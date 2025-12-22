import { toolbarItems } from "../toolbarItems";

 
export default function EditorToolbar() {
  return (
    <div className="editor-toolbar" id="toolbar">
      {toolbarItems.map((item, index) => {
        if (item.type === "divider") {
          return <div key={index} className="toolbar-divider" />;
        }

        const Icon = item.icon;

        return (
          <button
            key={index}
            className={`ql-${item.name}`}
            value={item.value}
            aria-label={item.label}
             title={item.label}
            onClick={item.onClick} 
            type="button"
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}


