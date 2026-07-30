import { useState } from "react";
import User from "./User"
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function State(){
    const [fruit, setFruit]=useState("Apple"); // State
    const [display, setDisplay]=useState(false);
    const [counter, setCounter]=useState(0);

    const handleFruit=()=>{
        setFruit('Banana');
        //console.log(fruit);
    }

    // 44. Derived State in React.js
    const [users, setUsers]=useState([]);
    const [user, setUser] = useState('');

    const handeladduser=()=>{
        setUsers([...users, user])
    }
    const total=users.length;
    const last = users[users.length-1];
    const uniq = [...new Set(users)].length;

    // 45. Lifting State Up in React js
    const [xuser, setXuser]=useState('');

    // 46. Updating Objects in State
    const [xname, setXname]= useState({
        name : 'Hiral',
        address:{
            city:'Navsari',
            state:'Gujarat',
            country:'India'
        }
    });

    const handelName=(val)=>{
        xname.name=val

        setXname({...xname})
    }
    const handleCity=(city)=>{
        xname.address.city=city;

        setXname({...xname, address:{...xname.address, city}})
    }

    // 47. Updating Array in State


    return(
        <>
        <h2 style={{color:"maroon"}}>
            14. State in React JS
        </h2>
        <h2>{fruit}</h2>
        <button onClick={handleFruit}>Change Fruit Name</button>

        <h2 style={{color:"maroon"}}>
            16. Hide & Show Toggle in React Js
        </h2>
        
        <button onClick={()=>setDisplay(!display)}>Toggle</button>
        {
            display?<h2><User /></h2>:null
        }


        <h2 style={{color:"maroon"}}>
            17. Multiple Condition Else-IF in React Js
        </h2>
        <button onClick={()=>setCounter(counter + 1)}>Counter</button>
        {
            counter==1?<User />
            :counter==2?<h1>Hiral + {counter}</h1>
            :<h1>Other Condition + {counter}</h1>
        }

        <div>
            <h2 style={{color:"maroon"}}>44. Derived State in React.js</h2>
            <h3>
                <span>
                    Total Users :
                </span>
                {total}
            </h3>
            <h3>
                <span>
                    Last User :
                </span>
                {last}
            </h3>
            <h3>
                <span>
                    Unique Total Users :
                </span>
                {uniq}
            </h3>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter User name" />
            <br />
            <br />
            <button onClick={handeladduser}>Add User</button>
            <br />
            {
                users.map((item,index)=>{
                    return (
                    <h4 key={index}>
                        {item}
                    </h4>
                    );
                })
            }
        </div>

        <div>
            <h2 style={{color:"maroon"}}>
                45. Lifting State Up in React js
            </h2>
            <AddUser setXuser={setXuser} />
            <DisplayUser username={xuser} />
        </div>
        
        <div>
            <h2 style={{color:"maroon"}}>
                46. Updating Objects in State
            </h2>
            <input type="text" onChange={(event)=>handelName(event.target.value)} placeholder="Update Name" />
            <br />
            <br />
            <input type="text" onChange={(event)=>handleCity(event.target.value)} placeholder="Update City" />
            <h4>
                Name : {xname.name}
            </h4>
            <h4>
                City : {xname.address.city}
            </h4>
        </div>
        <div>
            <h2 style={{color:"maroon"}}>
                47. Updating Array in State
            </h2>

        </div>
        </>
    )
}

export default State