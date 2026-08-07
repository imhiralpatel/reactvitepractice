import { Link, NavLink, Outlet } from "react-router"

function School(){
    return(
        <>
            <div className="school" style={{textAlign:"center"}}>
                <h2 style={{color:'maroon'}}>
                    School
                </h2>
                <h3>
                    <Link to="/">Go to Home Page</Link>
                </h3>
                <NavLink className='link' to="">Student</NavLink>
                <NavLink className="link" to="departments">Departments</NavLink>
                <NavLink className="link" to="detail">School Details</NavLink>
                {/* use child component display use outlet */}
                <Outlet /> 
            </div>
        
        </>
    )
}

export default School