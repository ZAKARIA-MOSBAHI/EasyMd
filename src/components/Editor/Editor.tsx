
import "react-quill-new/dist/quill.snow.css";
import "./editor.css";
import {  useEffect, useRef, useState } from "react";
import { useResize } from "../../hooks/useResize";
import QuillToolbar from "./components/QuillToolbar";
import ReactQuill from "react-quill-new";
import { modules } from "./lib/quill/quill.modules";
import { formats } from "./lib/quill/quill.formats";
import Divider from "../Divider";
import Preview from "../Preview";

const initialContent = `<h1>My&nbsp;Awesome&nbsp;Project</h1><p><strong>Author:</strong>&nbsp;Zakaria&nbsp;Mosbahi</p><p><strong>Date:</strong>&nbsp;Today</p><p><strong>Status:</strong>&nbsp;In&nbsp;Progress</p><p></p><h2>What&nbsp;I&#39;m&nbsp;Building</h2><p>This&nbsp;is&nbsp;a&nbsp;<em>cool&nbsp;text&nbsp;editor</em>&nbsp;that&nbsp;shows&nbsp;<strong>live&nbsp;Markdown&nbsp;preview</strong>.&nbsp;I&#39;m&nbsp;building&nbsp;it&nbsp;with&nbsp;React,&nbsp;TypeScript,&nbsp;and&nbsp;Quill.js.</p><p></p><h2>Editor&nbsp;Features</h2><ol><li><strong>Rich&nbsp;Text&nbsp;Editing</strong>:&nbsp;Type&nbsp;here&nbsp;in&nbsp;Quill&nbsp;editor</li><li><strong>Live&nbsp;Preview</strong>:&nbsp;See&nbsp;Markdown&nbsp;output&nbsp;instantly</li><li><strong>Export&nbsp;Options</strong>:</li></ol><ul><li>&nbsp;Copy&nbsp;as&nbsp;MD</li><li>Export&nbsp;as&nbsp;HTML&nbsp;file</li><li>Export&nbsp;as&nbsp;MD&nbsp;file</li></ul><ol><li><strong>Formatting&nbsp;Support</strong>:&nbsp;Bold,&nbsp;italic,&nbsp;lists,&nbsp;code&nbsp;blocks</li></ol><p></p><h2>Tech&nbsp;Stack</h2><ul><li><strong>Frontend:</strong>&nbsp;React&nbsp;+&nbsp;TypeScript</li><li><strong>Editor</strong>:&nbsp;Quill.js</li><li><strong>Preview</strong>:&nbsp;GitHub-style&nbsp;Markdown</li></ul><p></p><h2>My&nbsp;To-Do&nbsp;List</h2><ul><li data-list="checked">Set&nbsp;up&nbsp;React&nbsp;+&nbsp;TypeScript</li></ul><ul><li data-list="unchecked">Add&nbsp;export&nbsp;buttons</li></ul><p></p><h2>Sample&nbsp;Code</h2><pre data-language="plain">
// This is a TypeScript example
const handleExport = (format: &#39;html&#39; | &#39;md&#39;) =&gt; {
  const content = getEditorContent();
  exportFile(content, format);
  console.log("Exported as ", format);
}
</pre>`;

 
 

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
   
   useEffect(()=>{
     setValue(initialContent)
    },[])
    useEffect(()=>{
      const toolbarHeight = document.querySelector(".editor-toolbar")?.clientHeight;

      console.log(toolbarHeight);
      if(toolbarHeight){
        containerRef.current!.style.height = `calc(100% - ${toolbarHeight}px)`;
      }
    },[])
     
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
         modules={modules}
        formats={formats}

      />
    </div>
        <Divider ref={dividerRef} onResize={startDragging} />
        <Preview value={value} />
      </div>
      </div>
    )
}