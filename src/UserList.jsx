import { Link } from "react-router"

function UserList(){
    const userData=[
        {id:1,name:'hiral'},
        {id:2,name:'jayu'},
        {id:3,name:'vishal'},
        {id:4,name:'yogesh'},
        {id:5,name:'fenil'},
    ]
    return(
        <>
        <h3 style={{marginLeft:'20px'}}>
            User List
        </h3>
        {
            userData.map((item)=>{
                return(
                    <div style={{marginLeft:'20px'}}>
                        <h4>
                            <Link to={"/users/"+item.id}>{item.name}</Link>
                        </h4>
                    </div>
                )
            })
        }
        <h3 style={{marginLeft:'20px'}}>
            User List with name in url
        </h3>
        {
            userData.map((item)=>{
                return(
                    <div style={{marginLeft:'20px'}}>
                        <h4>
                            <Link to={"/users/"+item.id+"/"+item.name}>{item.name}</Link>
                        </h4>
                    </div>
                )
            })
        }
        </>
    )
}

export default UserList