import type { RefObject } from "react";
import ExportActions from "./ExportActions";
import HistoryActions from "./HistoryActions";
import type ReactQuill from "react-quill-new";

type quillToolbarBtn =
  | {
      type: "button";
      name: string;
      value?: string;
      label: string;
    }
  | { type: "divider" };
const quillToolbarButtons: quillToolbarBtn[] = [
  { type: "divider" },
  {
    type: "button",
    name: "bold",
    label: "Bold",
  },
  {
    type: "button",
    name: "italic",
    label: "Italic",
  },
  {
    type: "button",
    name: "underline",
    label: "Underline",
  },
  {
    type: "button",
    name: "strike",
    label: "Strike through",
  },
  {
    type: "button",
    name: "code",
    label: "Inline code",
  },
  {
    type: "button",
    name: "blockquote",
    label: "Blockquote",
  },
  {
    type: "button",
    name: "code-block",
    label: "Code block",
  },
  { type: "divider" },
  {
    type: "button",
    name: "header",
    value: "1",
    label: "Heading 1",
  },
  {
    type: "button",
    name: "header",
    value: "2",
    label: "Heading 2",
  },
  {
    type: "button",
    name: "header",
    value: "3",
    label: "Heading 3",
  },
  {
    type: "button",
    name: "header",
    value: "4",
    label: "Heading 4",
  },
  {
    type: "button",
    name: "header",
    value: "5",
    label: "Heading 5",
  },
  {
    type: "button",
    name: "header",
    value: "6",
    label: "Heading 6",
  },
  {
    type: "button",
    name: "header",
    value: "",
    label: "Paragraph",
  },
  { type: "divider" },
  {
    type: "button",
    name: "list",
    value: "ordered",
    label: "Ordered list",
  },
  {
    type: "button",
    name: "list",
    value: "bullet",
    label: "Unordered list",
  },
  {
    type: "button",
    name: "list",
    value: "check",
    label: "Check list",
  },
  {
    type: "button",
    name: "link",
    label: "Link",
  },
  {
    type: "button",
    name: "image",
    label: "Image",
  },
  { type: "divider" },
  /*
   
  {
    type: "button",
    name: "hr",
    label: "Horizontal line",
   },*/
];
export default function QuillToolbar({
  quillInstance,
}: {
  quillInstance: RefObject<ReactQuill | null>;
}) {
  return (
    <div className="editor-toolbar" role="toolbar" id="toolbar">
      <HistoryActions quillInstance={quillInstance} />
      {quillToolbarButtons.map((item, index) => {
        if (item.type === "divider") {
          return <div key={index} className="toolbar-divider" />;
        }

        return (
          <button
            key={index}
            className={`ql-${item.name}`}
            value={item.value}
            aria-label={item.label}
            title={item.label}
            type="button"
          >
            {item.label === "Paragraph" ? "P" : ""}
          </button>
        );
      })}
      <ExportActions />
    </div>
  );
}
