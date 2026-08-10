import { useEffect, useState } from "react";
import "./css/api.css";
import { useNavigate } from "react-router";

function ApiCalls() {

    //56 Fetch and Display Data from API
    // List Records
    const [usersData, setUsersData] = useState([]);
    const [userLoading, setUserLoading]=useState(false);

    const url = "http://localhost:3000/users";

    useEffect(() => {
        setUserLoading(true);
        getUserData();
    }, [])

    async function getUserData() {
        // const url = "https://dummyjson.com/users";
        
        let response = await fetch(url);
        response = await response.json();
        console.log(response);

        setUsersData(response);
        setUserLoading(false);
    }

    // Delete
    const deleteUser=async(id)=>{
        let response = await fetch(url+ "/"+ id, {
            method:'delete'
        })
        response = await response.json;
        console.log(response);
        

        if(response){
            alert("Record Deleted...")
            getUserData()
        }
    }

    // Edit
    const navigate=useNavigate();
    const editUser=(id)=>{
        navigate("/api/user/edit/"+id)
    }

    return (
        <>
            <div>
                <h2 style={{ color: "maroon" }}>
                    56. Fetch and Display Data from API
                </h2>
                <ul className="user-list user-list-header">
                    <li>Name</li>
                    <li>Email</li>
                    <li>Age</li>
                    <li>Action</li>
                </ul>
                {
                    !userLoading?
                    usersData && usersData.map((user) => {
                        return (
                            <div key={user.id}>
                                <ul className="user-list">
                                    <li>{user.fullName}</li>
                                    <li>{user.email}</li>
                                    <li>{user.age}</li>
                                    <li>
                                        <button onClick={()=>deleteUser(user.id)}>
                                            Delete
                                        </button>
                                        <button onClick={()=>editUser(user.id)}>
                                            Edit
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                    :<h3>Data Loading...</h3>
                }
            </div>
        </>
    )
}

export default ApiCalls;