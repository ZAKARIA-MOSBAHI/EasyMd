import React from "react";

export default function ToolBar({children}: {children : React.ReactNode}) {
  return  <div id="toolbar">
   {children}
  </div>;
}
