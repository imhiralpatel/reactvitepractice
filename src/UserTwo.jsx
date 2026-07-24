function UserTwo({dName, name, getUser}){
    return(
        <>
        <div>
            <button onClick={()=>dName(name)}>Display {name}</button>
            <button onClick={()=>getUser()}>Get User</button>

        </div>
        </>
    )
}

export default UserTwo