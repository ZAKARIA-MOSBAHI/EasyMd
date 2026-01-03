import hljs from "highlight.js";
import { handlers } from "./quill.handlers";


export const modules = {
  syntax: {hljs},
  toolbar: {
    container: "#toolbar",
    handlers: handlers
  },
};