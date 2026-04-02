import { CodeEditorState } from "./../types/index";
import { LANGUAGE_CONFIG } from "@/app/(root)/_constants";
import { create } from "zustand";
import type { editor as MonacoEditor } from "monaco-editor";

const getInitialState = () => {
  // if we're on the server, return default values
  if (typeof window === "undefined") {
    return {
      language: "javascript",
      fontSize: 16,
      theme: "vs-dark",
    };
  }

  // if we're on the client, return values from local storage bc localStorage is a browser API.
  const savedLanguage = localStorage.getItem("editor-language") || "javascript";
  const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
  const savedFontSize = localStorage.getItem("editor-font-size") || 16;

  return {
    language: savedLanguage,
    theme: savedTheme,
    fontSize: Number(savedFontSize),
  };
};

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
  const initialState = getInitialState();

  return {
    ...initialState,
    output: "",
    isRunning: false,
    error: null,
    editor: null,
    executionResult: null,

    getCode: () => get().editor?.getValue() || "",

    setEditor: (editorInstance: MonacoEditor.IStandaloneCodeEditor) => {
      const savedCode = localStorage.getItem(`editor-code-${get().language}`);
      if (savedCode) editorInstance.setValue(savedCode);

      set({ editor: editorInstance });
    },

    setTheme: (theme: string) => {
      localStorage.setItem("editor-theme", theme);
      set({ theme });
    },

    setFontSize: (fontSize: number) => {
      localStorage.setItem("editor-font-size", fontSize.toString());
      set({ fontSize });
    },

    setLanguage: (language: string) => {
      // Save current language code before switching
      const currentCode = get().editor?.getValue();
      if (currentCode) {
        localStorage.setItem(`editor-code-${get().language}`, currentCode);
      }

      localStorage.setItem("editor-language", language);

      set({
        language,
        output: "",
        error: null,
      });
    },

    runCode: async () => {
      const { language, getCode } = get();
      const code = getCode();

      if (!code) {
        set({ error: "Please enter some code" });
        return;
      }

      set({ isRunning: true, error: null, output: "" });

      try {
        const runtime = LANGUAGE_CONFIG[language].judge0Runtime;

        // Step 1: Create submission
        const submissionResponse = await fetch(
          "https://ce.judge0.com/submissions?base64_encoded=false&wait=false",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              source_code: code,
              language_id: runtime.languageId,
            }),
          }
        );

        const submissionData = await submissionResponse.json();

        if (submissionData.message) {
          set({ error: submissionData.message, executionResult: { code, output: "", error: submissionData.message } });
          return;
        }

        const token = submissionData.token;

        // Step 2: Poll for results
        let result;
        let attempts = 0;
        const maxAttempts = 10;

        while (attempts < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

          const resultResponse = await fetch(
            `https://ce.judge0.com/submissions/${token}?base64_encoded=false`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          result = await resultResponse.json();

          // Status ID 1 = In Queue, 2 = Processing
          if (result.status.id > 2) {
            break;
          }

          attempts++;
        }

        if (!result || attempts >= maxAttempts) {
          set({
            error: "Execution timeout",
            executionResult: { code, output: "", error: "Execution timeout" },
          });
          return;
        }

        console.log("Judge0 result:", result);

        // Handle compilation errors (status 6)
        if (result.status.id === 6 && result.compile_output) {
          const error = result.compile_output;
          set({
            error,
            executionResult: {
              code,
              output: "",
              error,
            },
          });
          return;
        }

        // Handle runtime errors (status 5, 7-12)
        if ((result.status.id >= 5 && result.status.id !== 3) || result.stderr) {
          const error = result.stderr || result.message || "Runtime error";
          set({
            error,
            executionResult: {
              code,
              output: "",
              error,
            },
          });
          return;
        }

        // Status 3 = Accepted (success)
        if (result.status.id === 3 || result.stdout) {
          const output = result.stdout || "";
          set({
            output: output.trim(),
            error: null,
            executionResult: {
              code,
              output: output.trim(),
              error: null,
            },
          });
        } else {
          set({
            error: result.status.description || "Unknown error",
            executionResult: {
              code,
              output: "",
              error: result.status.description || "Unknown error",
            },
          });
        }
      } catch (error) {
        console.log("Error running code:", error);
        set({
          error: "Error running code",
          executionResult: { code, output: "", error: "Error running code" },
        });
      } finally {
        set({ isRunning: false });
      }
    },
  };
});

export const getExecutionResult = () => useCodeEditorStore.getState().executionResult;
