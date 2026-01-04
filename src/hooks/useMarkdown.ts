import { useCallback, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { markdownService } from '../components/Editor/lib/turndown/turndown-service';

export const useMarkdown = () => {
  const { html } = useApp();
  
  const markdown = useMemo(() => {
    console.log('🔄 Converting HTML to markdown...');
    return markdownService.turndown(html);
  }, [html]);  

   const copyMarkdown = useCallback(() => {
      console.log(
        "%ccopying markdown...",
        "color: #22c55e; font-weight: bold;"
      );
    navigator.clipboard.writeText(markdown);
  }, [markdown]);

  const exportAsMarkdown = useCallback(() => {
  const blob = new Blob([markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "document.md";
  a.click();
  URL.revokeObjectURL(url);
}, [markdown]);
 
  return {
    markdown,
    copyMarkdown,
    exportAsMarkdown
  };
};