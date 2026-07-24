import UserTwo from "./UserTwo";


function PassFun(){

    const displayName=(name)=>{
        alert(name)
    }

    const getUser=()=>{
        alert("get user function called")
    }

    
    return(
        <>
        <div>
            <h2 style={{color:"maroon"}}>40. Pass function in component as props</h2>

            <UserTwo dName={displayName} name='Hiral' getUser={getUser} />
            <UserTwo dName={displayName} name='Jayna' getUser={getUser} />
        </div>
        
        </>
    )
}

export default PassFun;