
import "react-quill-new/dist/quill.snow.css";
import "./editor.css";
import {  useRef, useState } from "react";
import { useResize } from "../../hooks/useResize";
import QuillToolbar from "./components/QuillToolbar";
import ReactQuill from "react-quill-new";
import { modules } from "./lib/quill/quill.modules";
import { formats } from "./lib/quill/quill.formats";
import Divider from "../Divider";
import Preview from "../Preview";





export default function EditorWorkspace() {
     const [value, setValue] = useState<string>("");
     const dividerRef = useRef<HTMLDivElement | null>(null);
      const { containerRef, leftWidth, startDragging } = useResize();
      const dividerWidth = 6;
      const gridTemplateColumns = `
        calc(${leftWidth}% - ${dividerWidth / 2}px)
        ${dividerWidth}px
        calc(${100 - leftWidth}% - ${dividerWidth / 2}px)
      `;
       
    return(
      <div className="editor_container">
      <QuillToolbar/>
         <div
        ref={containerRef}
        className="app_container"
        style={{
          gridTemplateColumns,
        }}
      >
         <div className="editor">
          
      <ReactQuill
         value={value}
        onChange={setValue}
        placeholder="Write Contents Here..."
        modules={modules}
        formats={formats}
      />
    </div>
        <Divider ref={dividerRef} onResize={startDragging} />
        <Preview />
      </div>
      </div>
    )
}