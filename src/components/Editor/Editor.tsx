
import "react-quill-new/dist/quill.snow.css";
import "./editor.css";
import EditorToolbar from "./components/EditorToolbar";
import EditorWorkspace from "./components/EditorWorkspace";
 export default function Editor() {
 
  return (
   <div className="editor_container">
    <EditorToolbar/>
    
    <EditorWorkspace />
   </div>
  );
}
