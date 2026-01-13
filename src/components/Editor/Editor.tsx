import "react-quill-new/dist/quill.snow.css";
import "./editor.css";
import { useEffect, useRef } from "react";
import { useResize } from "../../hooks/useResize";
import QuillToolbar from "./components/QuillToolbar";
import ReactQuill from "react-quill-new";
import { modules } from "./lib/quill/quill.modules";
import { formats } from "./lib/quill/quill.formats";
import Divider from "../Divider";
import Preview from "../Preview";
import { useApp } from "../../context/AppContext";
 
export default function Editor() {
  const { html, setHtml } = useApp();
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const QuillInstanceRef = useRef<ReactQuill | null>(null);
  const { containerRef, leftWidth, startDragging } = useResize();
  const dividerWidth = 6;
  const gridTemplateColumns = `
   calc(${leftWidth}% - ${dividerWidth / 2}px)
   ${dividerWidth}px
   calc(${100 - leftWidth}% - ${dividerWidth / 2}px)
   `;

useEffect(() => {
  const updateHeight = () => {

    const toolbar = document.querySelector(".editor-toolbar");
    const toolbarHeight = toolbar?.clientHeight;
     if (toolbarHeight && containerRef.current) {
      containerRef.current.style.height = `calc(100% - ${toolbarHeight}px)`;
    }
  };

   updateHeight();

   window.addEventListener("resize", updateHeight);

   return () => {
    window.removeEventListener("resize", updateHeight);
  };
}, []);


  return (
    <div className="editor_container">
      <QuillToolbar quillInstance={QuillInstanceRef} />
      <div
        ref={containerRef}
        className="app_container"
        style={{
          gridTemplateColumns,
        }}
      >
        <div className="editor" spellCheck={false}>
          <ReactQuill
            ref={QuillInstanceRef}
            value={html}
            onChange={(value) => setHtml(value)}
            modules={modules}
            formats={formats}
          />
        </div>
        <Divider ref={dividerRef} onResize={startDragging} />
        <Preview />
      </div>
    </div>
  );
}
