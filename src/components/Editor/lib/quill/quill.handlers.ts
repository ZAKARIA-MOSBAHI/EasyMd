import type { Range } from "quill";
import type { Quill } from "react-quill-new";

//tells each button of the toolbar how to behave when clicked
export const  handlers = {
    bold(this: { quill: Quill }) {
        const { quill } = this;
        const range : Range | null = quill.getSelection();// is this async ? 
        console.log(range); // this logs two times , once with null and once with the correct range
  const isBold = quill.getFormat(range?.index , range?.length).bold;
  quill.format("bold", !isBold);
}
    ,
   
    
    underline(this: any) {
 
        const quill = (this as any).quill; // quill instance
        const currentFormat = quill.getFormat();
        quill.format("underline", !currentFormat.underline);
    } 
    , strike(this: any) {
        const quill = (this as any).quill; // quill instance
        const currentFormat = quill.getFormat();
        quill.format("strike", !currentFormat.strike);
    }
    ,
    code(this: any) {
        const quill = (this as any).quill; // quill instance
        const currentFormat = quill.getFormat();
        quill.format("code", !currentFormat.code);
    }
}