import hljs from "highlight.js";
import { handlers } from "./quill.handlers";


export const modules = {
  syntax: {hljs},
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true
    },
  toolbar: {
    container: "#toolbar",
    handlers: handlers
  },
};