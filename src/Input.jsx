import { useState } from "react";

function Input(){
    const [val, setValue]=useState("Hiral Patel")
    return(
        <>
        <div>
            <h3>Get input field value</h3>

            <input type="text" onChange={(event)=>setValue(event.target.value)} value={val} placeholder="Enter Name" />
            
            <h5>
                {val}
            </h5>

            <button onClick={()=>{setValue("")}}>Clear Name</button>
        </div>
        </>
    )
}

export default Input;