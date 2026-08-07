import { Link } from "react-router";

export default function PageNotFound(){
    return(
        <div style={{textAlign:'center'}}>
        <h2 style={{color:"maroon"}}>
            404
        </h2>
        <h4>
            Page Not Found
        </h4>
        <div>
            <Link to="/">Go to Home Page</Link>
        </div>
        </div>
    )
};