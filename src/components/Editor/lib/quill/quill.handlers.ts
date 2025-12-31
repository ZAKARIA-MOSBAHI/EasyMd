import type { Range } from "quill";
import type { Quill } from "react-quill-new";

export const handlers = {
    bold(this: { quill: Quill }) {
        const { quill } = this;

        const range: Range | null = quill.getSelection();
        if( !range ) return;
        const format = range
            ? quill.getFormat(range.index, range.length)
            : quill.getFormat();

        quill.format("bold", !format.bold);
    },
    italic(this: { quill: Quill }) {
        const { quill } = this;

        const range: Range | null = quill.getSelection();
        if( !range ) return;
        const format = range
            ? quill.getFormat(range.index, range.length)
            : quill.getFormat();

        quill.format("italic", !format.italic);
    },
    underline(this: { quill: Quill }) {
        const { quill } = this;

        const range: Range | null = quill.getSelection();
        if( !range ) return;
        const format = range
            ? quill.getFormat(range.index, range.length)
            : quill.getFormat();

        quill.format("underline", !format.underline);
    },
    strike(this: { quill: Quill }) {
        const { quill } = this;

        const range: Range | null = quill.getSelection();
        if( !range ) return;
        const format = range
            ? quill.getFormat(range.index, range.length)
            : quill.getFormat();

        quill.format("strike", !format.strike);
    },
    code(this: { quill: Quill }) {
        const { quill } = this;

        const range: Range | null = quill.getSelection();
        if( !range ) return;
        const format = range
            ? quill.getFormat(range.index, range.length)
            : quill.getFormat();

        quill.format("code", !format.code);
    },
    blockquote(this: { quill: Quill }) {
        const { quill } = this;

        const range: Range | null = quill.getSelection();
        if( !range ) return;
        const format = range
            ? quill.getFormat(range.index, range.length)
            : quill.getFormat();

        quill.format("blockquote", !format.blockquote);
    },
    "code-block"(this: { quill: Quill }) {
    const { quill } = this;
    const range: Range | null = quill.getSelection();
     if (!range) return;

    const format = quill.getFormat(range.index, range.length);
    console.log(format["code-block"]);
    const isCodeBlock = format["code-block"] ;

    quill.format("code-block", !isCodeBlock);
},
image(this: { quill: Quill }) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const range = this.quill.getSelection(true);
            const base64 = reader.result as string;
            this.quill.insertEmbed(range.index, "image", base64, "user");
        };
        reader.readAsDataURL(file);
    };
}

};
