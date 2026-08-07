import { Link, useParams } from "react-router"

function UserDetails(){
    const paramData=useParams();

    return(
        <>
        <h3>
            User Details
        </h3>
        <h4>
            user id is : {paramData.id}
        </h4>
        <h5>
            <Link to="/users">Back</Link>
        </h5>
        </>
    )
}

export default UserDetails