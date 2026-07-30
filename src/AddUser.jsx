function AddUser({setXuser}){
    return(
        <>
            <div>
                <h4>Add User</h4>
                <input type="text" onChange={(event)=>setXuser(event.target.value)} placeholder="Enter Username" />
                <hr />
            </div>
        </>
    )
}

export default AddUser