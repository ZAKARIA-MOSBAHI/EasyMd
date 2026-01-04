import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useMemo,
  useCallback,
} from "react";

// Context only manages HTML (source of truth)
interface AppContextType {
  html: string;
  setHtml: (newHtml: string) => void;
  clearContent: () => void;
  exportAsHTML: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
  initialHtml?: string;
}

const DEFAULT_HTML_CONTENT = `<h1>My&nbsp;Awesome&nbsp;Project</h1><p><strong>Author:</strong>&nbsp;Zakaria&nbsp;Mosbahi</p><p><strong>Date:</strong>&nbsp;Today</p><p><strong>Status:</strong>&nbsp;In&nbsp;Progress</p><p></p><h2>What&nbsp;I&#39;m&nbsp;Building</h2><p>This&nbsp;is&nbsp;a&nbsp;<em>cool&nbsp;text&nbsp;editor</em>&nbsp;that&nbsp;shows&nbsp;<strong>live&nbsp;Markdown&nbsp;preview</strong>.&nbsp;I&#39;m&nbsp;building&nbsp;it&nbsp;with&nbsp;React,&nbsp;TypeScript,&nbsp;and&nbsp;Quill.js.</p><p></p><h2>Editor&nbsp;Features</h2><ol><li><strong>Rich&nbsp;Text&nbsp;Editing</strong>:&nbsp;Type&nbsp;here&nbsp;in&nbsp;Quill&nbsp;editor</li><li><strong>Live&nbsp;Preview</strong>:&nbsp;See&nbsp;Markdown&nbsp;output&nbsp;instantly</li><li><strong>Export&nbsp;Options</strong>:</li></ol><ul><li>&nbsp;Copy&nbsp;as&nbsp;MD</li><li>Export&nbsp;as&nbsp;HTML&nbsp;file</li><li>Export&nbsp;as&nbsp;MD&nbsp;file</li></ul><ol><li><strong>Formatting&nbsp;Support</strong>:&nbsp;Bold,&nbsp;italic,&nbsp;lists,&nbsp;code&nbsp;blocks</li></ol><p></p><h2>Tech&nbsp;Stack</h2><ul><li><strong>Frontend:</strong>&nbsp;React&nbsp;+&nbsp;TypeScript</li><li><strong>Editor</strong>:&nbsp;Quill.js</li><li><strong>Preview</strong>:&nbsp;GitHub-style&nbsp;Markdown</li></ul><p></p><h2>My&nbsp;To-Do&nbsp;List</h2><ul><li data-list="checked">Set&nbsp;up&nbsp;React&nbsp;+&nbsp;TypeScript</li></ul><ul><li data-list="unchecked">Add&nbsp;export&nbsp;buttons</li></ul><p></p><h2>Sample&nbsp;Code</h2><pre data-language="plain">
 const exportAsHTML = (format: &#39;html&#39; | &#39;md&#39;) =&gt; {
  const content = getEditorContent();
  exportFile(content, format);
  console.log("Exported as ", format);
}
</pre>`;

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
  initialHtml = DEFAULT_HTML_CONTENT,
}) => {
  const [html, setHtmlState] = useState<string>(initialHtml);

  const setHtml = useCallback((newHtml: string) => {
    setHtmlState(newHtml);
  }, []);

  const clearContent = useCallback(() => {
    setHtmlState("");
  }, []);

  const exportAsHTML = useCallback(() => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "document.html";
    a.click();
    URL.revokeObjectURL(url);
  }, [html]);

  const contextValue = useMemo(
    () => ({
      html,
      setHtml,
      clearContent,
      exportAsHTML,
    }),
    [html, setHtml, clearContent, exportAsHTML]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};
