import { RotateCcw, RotateCw, X, type LucideIcon } from "lucide-react"

const actions : {label : string , action : ()=> void , icon : LucideIcon}[] = [
    {
        label : "Undo",
        action : () => {},
        icon : RotateCcw
    },
    {
        label : "Redo",
        action : () => {},
        icon : RotateCw

    }, {
        label : "Clear Editor",
        action : () => {},
        icon : X
    }

]
export default function HistoryActions() {
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
