import React, { Suspense, use } from "react";

const fetchData=()=>fetch('https://dummyjson.com/users').then((response)=>response.json());
const userResourse = fetchData();

export default function ApiUseApi(){
    return(
        <div>
        <h2 style={{color:"maroon"}}>
        68. Call Rest API with use API
        </h2>
        <Suspense fallback={<p>loading....</p>}>
        <Users userResourse={userResourse} />
        </Suspense>
        </div>
    )
}

const Users=({userResourse})=>{

    const userData= use(userResourse)
    return(
        <div>
            <h2>
                user list
            </h2>
            {
                userData?.users?.map((user)=>(
                    <h4>
                        {user.firstName}
                    </h4>
                ))
            }
        </div>
    )
}