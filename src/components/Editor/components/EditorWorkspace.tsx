import { useRef, useState } from "react";
import { useResize } from "../../../hooks/useResize";
import ReactQuill from "react-quill-new";
import Divider from "../../Divider";
import Preview from "../../Preview";

const modules = {
toolbar: {
  container: "#toolbar",
},
};
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
         <div
        ref={containerRef}
        className="app_container"
        style={{
          gridTemplateColumns,
        }}
      >
         <div className="editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Write Contents Here..."
        modules={modules}
      />
    </div>
        <Divider ref={dividerRef} onResize={startDragging} />
        <Preview />
      </div>
    )
}