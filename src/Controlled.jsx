import { useState } from "react"
import Clock from "./Clock";

function Controlled(){
    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const [email,setEmail]=useState('');
    const[color, setColor]=useState('pink')
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
            <h3>Controlled Component in React</h3>
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
        </>
    )
}

export default Controlled