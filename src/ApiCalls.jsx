import { useEffect, useState } from "react";
import "./css/api.css";

function ApiCalls() {

    //56 Fetch and Display Data from API
    const [usersData, setUsersData] = useState([]);
    const [userLoading, setUserLoading]=useState(false);

    useEffect(() => {
        setUserLoading(true);
        getUserData();
    }, [])

    async function getUserData() {
        // const url = "https://dummyjson.com/users";
        const url = "http://localhost:3000/users";

        let response = await fetch(url);
        response = await response.json();
        console.log(response);

        setUsersData(response);
        setUserLoading(false);
    }

    return (
        <>
            <div>
                <h2 style={{ color: "maroon" }}>
                    56. Fetch and Display Data from API
                </h2>
                <ul className="user-list user-list-header">
                    <li>Name</li>
                    <li>email</li>
                    <li>Age</li>
                </ul>
                {
                    !userLoading?
                    usersData && usersData.map((user) => {
                        return (
                            <>
                                <ul key={user.fullName} className="user-list">
                                    <li>{user.fullName}</li>
                                    <li>{user.email}</li>
                                    <li>{user.age}</li>
                                </ul>
                            </>
                        )
                    })
                    :<h3>Data Loading...</h3>
                }
            </div>
        </>
    )
}

export default ApiCalls;