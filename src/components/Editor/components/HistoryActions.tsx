import { RotateCcw, RotateCw, X, type LucideIcon } from "lucide-react";
import { useApp } from "../../../context/AppContext";
import { type RefObject } from "react";
import type ReactQuill from "react-quill-new";

export default function HistoryActions({
  quillInstance,
}: {
  quillInstance: RefObject<ReactQuill | null>;
}) {
  const { clearContent } = useApp();
  const actions: { label: string; action: () => void; icon: LucideIcon }[] = [
    {
      label: "Undo",
      action: () => quillInstance.current?.editor?.history.undo(),
      icon: RotateCcw,
    },
    {
      label: "Redo",
      action: () => quillInstance.current?.editor?.history.redo(),
      icon: RotateCw,
    },
    {
      label: "Clear Editor",
      action: clearContent,
      icon: X,
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
            className="toolbar-btn"
            strokeWidth={3}
          />
        </button>
      ))}
    </>
  );
}
