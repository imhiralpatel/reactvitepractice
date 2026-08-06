import { useState } from "react"

const useToggle=(defaultval)=>{
    
    const [val, setVal]=useState(defaultval);
    function toggleValue(dval){
        if(typeof dval!='boolean'){
            setVal(!val);
            console.log('if');
            
        }
        else{
            setVal(dval);
            console.log('else');
            
        }
    }

    return[val, toggleValue]

}

export default useToggle;