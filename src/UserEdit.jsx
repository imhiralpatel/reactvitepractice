import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export default function UserEdit(){
    
    const {id}=useParams()

    const [fullName, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    
    const url = "http://localhost:3000/users/" + id;

    const navigate = useNavigate();

    useEffect(()=>{
        getUserData()
    }, [])

    const getUserData=async()=>{
        console.log(url);
        
        let response = await fetch(url);
        const data = await response.json();

        //console.log("Response", data);

        if(data){
            setName(data.fullName)
            setAge(data.age)
            setEmail(data.email)
        }
    }

    const updateUserData=async()=>{
        let response = await fetch(url, {
            method:'Put',
            body:JSON.stringify({fullName, age, email})
        });

        response =  await response.json;

        if(response){
            alert('Record Updated...')
            navigate("/api/user")
        }
    }

    return(
        <div style={{textAlign:"center"}}>
            <h4>Edit User</h4>
            <input type="text" value={fullName} onChange={(event) => setName(event.target.value)} placeholder="Enter Full Name" />
                <br />
                <br />
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
                <br /><br />
                <input type="text" value={age} onChange={(event) => setAge(event.target.value)} placeholder="Enter Age" />
                <br /><br />
                <button onClick={updateUserData}>Edit User</button>
        </div>
    )
}