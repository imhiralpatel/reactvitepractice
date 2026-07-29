import { useRef, useState, useTransition } from "react";
import UserInput from "./UserInput";
import { useFormStatus } from "react-dom";

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

    // useFormStatus
    const handlesubmit=async()=>{
        await new Promise(res=>setTimeout(res, 2000));
        console.log("submit");
        
    }

    function CustomerForm(){
        const {pending}=useFormStatus();
        console.log(pending);
        
        return(
            <div>
                <input type="text" placeholder="Enter Name" />
                <br />
                <br />
                <input type="text" placeholder="Enter Password" />
                <br />
                <br />
                <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
            </div>
        )
    }

    // useTransition Hook
    //const [xpending, setPending]=useState(false);
    const [xpending, startTransition]=useTransition(); 

    const handleButton=()=>{
        //setPending(true)

        startTransition(async ()=>{
            await new Promise(res=>setTimeout(res, 2000));
        })

        //setPending(false)
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

        <div>
            <h2 style={{color:"maroon"}}>42. useFormStatus Hook</h2>
            <form action={handlesubmit}>
                <CustomerForm />
            </form>
        </div>

        <div>
            <h2 style={{color:"maroon"}}>43. useTransition Hook</h2>
            {
                xpending?<img style={{width:'100px'}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />:null
            }
            <button disabled={xpending} onClick={handleButton}>Click</button>
        </div>
        </>
    )
}
export default Hooks