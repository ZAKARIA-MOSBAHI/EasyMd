import React, { type JSX } from "react";

export default function ToolBar({children}: {children : JSX.Element}) {
  return  <div id="toolbar">
   {children}
  </div>;
}
