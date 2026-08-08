import { useState } from "react"

export default function UserAdd() {
    const [fullName, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const createUser= async ()=>{
        const url="http://localhost:3000/users";
        let response= await fetch(url, {
            method:'Post',
            body:JSON.stringify({fullName, age, email})
        });
        response = await response.json();
        if(response){
            alert("new user added..");
        }
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h3>Add User</h3>
                <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter Full Name" />
                <br />
                <br />
                <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
                <br /><br />
                <input type="text" onChange={(event) => setAge(event.target.value)} placeholder="Enter Age" />
                <br /><br />
                <button onClick={createUser}>Add User</button>
            </div>

        </>
    )
}