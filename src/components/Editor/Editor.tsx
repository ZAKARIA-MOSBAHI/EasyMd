import React, { useState, type JSX } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./editor.css";
export default function Editor(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const modules = {
  toolbar: {
    container: "#toolbar",
  },
};
  return (
    <div className="editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Write Contents Here..."
        modules={modules}
      />
    </div>
  );
}
