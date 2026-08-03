import { useActionState, useId, useRef, useState, useTransition } from "react";
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

    // 48. useActionState Hook
    const handleBtnSubmit = async(previousData, formData)=>{
        let name = formData.get("name");
        let password = formData.get("password");

        await new Promise(res=>setTimeout(res, 2000))

        if(name && password)
        {
            return {message:'Data Submitted...!', name, password}
        }
        else{
            return {error:'Failed to submit. Enter proper data', name, password}
        }
    }
    const [data, action, pending]=useActionState(handleBtnSubmit, undefined)

    // 49 - useId Hook in Reactjs

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
            <h2 style={{color:"maroon"}}>42. useFormStatus Hook (Very Important)</h2>
            <form action={handlesubmit}>
                <CustomerForm />
            </form>
        </div>

        <div>
            <h2 style={{color:"maroon"}}>43. useTransition Hook (Very Important)</h2>
            {
                xpending?<img style={{width:'100px'}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />:null
            }
            <button disabled={xpending} onClick={handleButton}>Click</button>
        </div>
        <div>
            <h2 style={{color:"maroon"}}>
                48. useActionState Hook
            </h2>
            <form action={action}>
                <input defaultValue={data?.name} type="text" placeholder="enter name" name="name" />
                <br /><br />
                <input defaultValue={data?.password} type="password" placeholder="enter password" name="password" />
                <br /><br />
                <button disabled={pending}>Submit Data</button>
            </form>
            <br />
            {
                data?.error && <span style={{color:'red'}}>{data?.error}</span>
            }
            {
                data?.message && <span style={{color:'green'}}>{data?.message}</span>
            }
            <br />
            <h4>
                Name : {data?.name}
            </h4>
            <h4>
                Password : {data?.password}
            </h4>
        </div>
        <div>
            <h2 style={{color:"maroon"}}>
                49 - useId Hook in Reactjs
            </h2>
            <UserForm />
            <br />
            <UserForm />
        </div>
        </>
    )
}

export default Hooks

function UserForm(){
    const user = useId();

    return(
        <div>
            <label htmlFor={"name" + user}>Enter Name</label>
            <input id={"name" + user} type="text" placeholder="Enter Name" />
            <br />
            <label htmlFor={"password" + user}>Enter Password</label>
            <input id={"password" + user} type="text" placeholder="Enter Password" />
            <br />
        </div>
    )
}