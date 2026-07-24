import { useRef, useState } from "react"
import Clock from "./Clock";

function Controlled(){

    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const [email,setEmail]=useState('');
    const[color, setColor]=useState('pink')

    const handleForm=(event)=>{
        event.preventDefault();

        // using dom
        const user=document.querySelector("#user").value;
        const password=document.querySelector("#password").value;

        console.log(user, password);
    }

    const userRef=useRef();
    const passwordRef=useRef();
    
    const handleFormRef=(event)=>{
        event.preventDefault();

        // using useRef
        const user=userRef.current.value;
        const password=passwordRef.current.value;

        console.log(user, password);
    }
    
    return(
        <>
        <div>
            <h3>Digital Clock Component</h3>
            <br />
            <select onChange={(event)=>setColor(event.target.value)}>
                <option value={'red'}>Red</option>
                <option value={'blue'}>Blue</option>
                <option value={'green'}>green</option>
                <option value={'orange'}>Orange</option>
            </select>
            <Clock color={color} />
            <br />
            <div>
              
                <h2 style={{color:"maroon"}}>21. Controlled Component in React</h2>

                <form action="" method="get">
                    <input type="text" onChange={(event)=>setName(event.target.value)} value={name} placeholder="Enter Name" />
                    <br/>
                    <br />
                    <input type="password" onChange={(event)=>setPass(event.target.value)} value={pass} placeholder="Enter Password"/>
                    <br />
                    <input type="text" onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="Enter Email" />
                    <br />
                    <br />
                    <button>Submit</button>
                    <button onClick={()=>{setName('');setPass('');setEmail('')}}>Clear</button>
                    <br />
                    <h4>{name}</h4>
                    <h4>{pass}</h4>
                    <h4>{email}</h4>
                </form>
              
            </div>
            <hr />
            <div>
                <h2 style={{color:"maroon"}}>39. Uncontrolled Component</h2>
                <form action="" method="post" onSubmit={handleForm}>
                    <input type="text" id="user" placeholder="enter username" />
                    <br />
                    <br />
                    <input type="password" id="password" placeholder="enter password" />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
                
                <hr />

                <form action="" method="post" onSubmit={handleFormRef}>
                    <input type="text" id="userRef" placeholder="enter username" />
                    <br />
                    <br />
                    <input type="password" id="passwordRef" placeholder="enter password" />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Controlled