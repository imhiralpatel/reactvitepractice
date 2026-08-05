import { useContext } from "react"
import { SubjectContext } from "./ContextData"

export default function Subject(){
    const subject = useContext(SubjectContext);
    return(
        <div style={{backgroundColor:'red', padding:10}}>
            <h2>Subject Component : {subject}</h2>
        </div>
    )
}