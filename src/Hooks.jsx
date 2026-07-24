import { useRef } from "react";
import UserInput from "./UserInput";

function Hooks(){

    const inputRef= useRef(null);
    const inputHandler=()=>{
        inputRef.current.focus();
        inputRef.current.style.color='red';
        inputRef.current.placeholder='Enter UserName';
    }

    const inputRef2 = useRef(null)

    const updateInput=()=>{
        inputRef.current.value=1000;
        inputRef.current.focus();
        inputRef.current.style.color='red';
    }


    return(
        <>
            <div>
                <h2 style={{color:"maroon"}}>38. UseRef Hooks</h2>
                <input ref={inputRef} type="text" placeholder="Enter User Name" />
                <button onClick={inputHandler}>Focus on Input field</button>
            </div>

            <div>
            <h2 style={{color:"maroon"}}>41. Forward Ref as Props</h2>
            <UserInput ref={inputRef2} />
            <button onClick={updateInput}>Update Input field</button>
        </div>

        </>
    )
}
export default Hooks