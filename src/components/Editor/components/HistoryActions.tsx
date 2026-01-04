import { RotateCcw, RotateCw, X, type LucideIcon } from "lucide-react";
import { useApp } from "../../../context/AppContext";

export default function HistoryActions() {
  const { clearContent } = useApp();
  const actions: { label: string; action: () => void; icon: LucideIcon }[] = [
    {
      label: "Undo",
      action: () => {},
      icon: RotateCcw,
    },
    {
      label: "Redo",
      action: () => {},
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
