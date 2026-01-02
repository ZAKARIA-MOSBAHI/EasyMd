import { Clipboard, FileCode, FileText, type LucideIcon } from "lucide-react"

const actions : {label : string , action : ()=> void , icon : LucideIcon}[] = [
    {
        label : "Copy as MD",
        action : () => {},
        icon : Clipboard 
    },
    {
        label : "Export as HTML",
        action : () => {},
        icon : FileCode
    },
    {
        label : "Export as MD",
        action : () => {}
        , icon : FileText
    }
]
export default function ExportActions() {
  return (
    <>
    {actions.map((action, index)=>(
        <button key={index} className="editor-action-btn" onClick={action.action} title={action.label} >
            <action.icon size={16}/>
        </button>
    ))}
    </>
  )
}
