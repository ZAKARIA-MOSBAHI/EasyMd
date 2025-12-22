import { useEffect, useRef } from "react";
import "./App.css";
import Divider from "./components/Divider";
import Editor from "./components/Editor/Editor";
import Navbar from "./components/navbar/Navbar";
import Preview from "./components/Preview";
import { useResize } from "./hooks/useResize";
import ToolBar from "./components/Toolbar/ToolBar";
import { TextFormattingToolbar } from "./components/Toolbar/components/TextFormattingToolbar";
 
function App() {
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const { containerRef, leftWidth, startDragging } = useResize();
  const dividerWidth = 6;
  const gridTemplateColumns = `
    calc(${leftWidth}% - ${dividerWidth / 2}px)
    ${dividerWidth}px
    calc(${100 - leftWidth}% - ${dividerWidth / 2}px)
  `;
  return (
    <div className="app">
      <Navbar />
      <ToolBar>
        <TextFormattingToolbar />
      </ToolBar>
      <div
        ref={containerRef}
        className="app_container"
        style={{
          gridTemplateColumns,
        }}
      >
        <Editor />
        <Divider ref={dividerRef} onResize={startDragging} />
        <Preview />
      </div>
    </div>
  );
}

export default App;
