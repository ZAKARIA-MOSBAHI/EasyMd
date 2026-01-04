import { Clipboard, FileCode, FileText, type LucideIcon } from "lucide-react";
import { useMarkdown } from "../../../hooks/useMarkdown";
import { useApp } from "../../../context/AppContext";

export default function ExportActions() {
  const { copyMarkdown, exportAsMarkdown } = useMarkdown();
  const { exportAsHTML } = useApp();
  const actions: {
    label: string;
    action: () => void;
    icon: LucideIcon;
  }[] = [
    {
      label: "Copy as MD",
      action: copyMarkdown,
      icon: Clipboard,
    },
    {
      label: "Export as HTML",
      action: exportAsHTML,
      icon: FileCode,
    },
    {
      label: "Export as MD",
      action: exportAsMarkdown,
      icon: FileText,
    },
  ];
  return (
    <>
      {actions.map((action, index) => (
        <button
          key={index}
          className="editor-action-btn"
          onClick={action.action}
          title={action.label}
        >
          <action.icon
            size={16}
            color="#444"
            strokeWidth={3}
            className="toolbar-btn"
          />
        </button>
      ))}
    </>
  );
}
