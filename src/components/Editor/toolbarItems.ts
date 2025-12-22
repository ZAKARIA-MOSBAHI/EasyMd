import type { ComponentType } from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ListOrdered,
  List,
  Quote,
  CodeSquare,
  Image,
  Minus,
  RotateCcw,
  RotateCw,
  Trash2,
  FileCode,
  FileText,
  ClipboardCopy,
} from "lucide-react";

type ToolbarItem = {
      type: "button";
  name: string;
  value?: string;
  label: string;
  icon: ComponentType<{ size?: number }>;
  onClick?: () => void;

    }
  | { type: "divider" };

   

export const toolbarItems: ToolbarItem[] = [
  // history control
  {
    type: "button",
    name: "rollback",
    label: "Rollback",
    icon: RotateCcw,
  },
  {
    type: "button",
    name: "forward",
    label: "Forward",
    icon: RotateCw,
  },
  {
    type: "button",
    name: "clear",
    label: "Clear",
    icon: Trash2,
  },

  { type: "divider" },

  // text formatting
  {
    type: "button",
    name: "bold",
    label: "Bold",
    icon: Bold,
  },
  {
    type: "button",
    name: "italic",
    label: "Italic",
    icon: Italic,
  },
  {
    type: "button",
    name: "underline",
    label: "Underline",
    icon: Underline,
  },
  {
    type: "button",
    name: "strike",
    label: "Strike through",
    icon: Strikethrough,
  },
  {
    type: "button",
    name: "code",
    label: "Inline code",
    icon: Code,
  },

  { type: "divider" },

  // headings
  {
    type: "button",
    name: "header",
    value: "1",
    label: "Heading 1",
    icon: Heading1,
  },
  {
    type: "button",
    name: "header",
    value: "2",
    label: "Heading 2",
    icon: Heading2,
  },
  {
    type: "button",
    name: "header",
    value: "3",
    label: "Heading 3",
    icon: Heading3,
  },
  {
    type: "button",
    name: "header",
    value: "4",
    label: "Heading 4",
    icon: Heading4,
  },
  {
    type: "button",
    name: "header",
    value: "5",
    label: "Heading 5",
    icon: Heading5,
  },
  {
    type: "button",
    name: "header",
    value: "6",
    label: "Heading 6",
    icon: Heading6,
  },

  { type: "divider" },

  // block actions
  {
    type: "button",
    name: "list",
    value: "ordered",
    label: "Ordered list",
    icon: ListOrdered,
  },
  {
    type: "button",
    name: "list",
    value: "bullet",
    label: "Unordered list",
    icon: List,
  },
  {
    type: "button",
    name: "blockquote",
    label: "Blockquote",
    icon: Quote,
  },
  {
    type: "button",
    name: "code-block",
    label: "Code block",
    icon: CodeSquare,
  },
  {
    type: "button",
    name: "image",
    label: "Image",
    icon: Image,
  },
  {
    type: "button",
    name: "hr",
    label: "Horizontal line",
    icon: Minus,
  },

  { type: "divider" },

  // exporting
  {
    type: "button",
    name: "export-html",
    label: "Export as HTML",
    icon: FileCode,
  },
  {
    type: "button",
    name: "export-markdown",
    label: "Export as Markdown",
    icon: FileText,
  },
  {
    type: "button",
    name: "copy-to-clipboard",
    label: "Copy to Clipboard",
    icon: ClipboardCopy,
  },
];


