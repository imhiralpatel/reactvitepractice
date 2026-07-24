import { useState } from "react";

function Input(){
    const [val, setValue]=useState("Hiral Patel")
    return(
        <>
        <div>
            <h2 style={{color:"maroon"}}>20. input field value</h2>

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