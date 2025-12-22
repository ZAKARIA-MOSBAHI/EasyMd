import { Bold } from "lucide-react";

 
export function TextFormattingToolbar(){
    return (
        <div>
        <button className="ql-bold">
        <Bold size={32}/>
        </button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
        <button className="ql-code"></button> {/*inline code*/}
         </div>
    )
}
/*Purpose: Formatting the text inline.
Actions to include:

Bold

Italic

Underline (if you want)

Strikethrough

Inline code (sometimes considered here or in "Other Actions")*/