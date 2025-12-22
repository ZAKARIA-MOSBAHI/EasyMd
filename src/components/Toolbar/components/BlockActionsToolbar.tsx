export default function BlockActionsToolbar(){
    return (
        <div>
            <button className="ql-blockquote"></button>
  <button className="ql-code-block"></button>

  <button className="ql-list" value="ordered"></button>
  <button className="ql-list" value="bullet"></button>

  <button className="ql-image"></button>

  <button className="ql-hr">HR</button>
        </div>
    )
}
/*
Purpose: Actions that are not simple text formatting or headings.
Actions to include:

Blockquote

Code block

Image insertion

Lists (ordered, unordered)

Horizontal line


*/