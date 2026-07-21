import { useState } from "react";
import User from "./User"

function State(){
    const [fruit, setFruit]=useState("Apple"); // State
    const [display, setDisplay]=useState(false);
    const [counter, setCounter]=useState(0);

    const handleFruit=()=>{
        setFruit('Banana');
        //console.log(fruit);
    }
    return(
        <>
        <h1>
            State in React JS
        </h1>
        <h2>{fruit}</h2>
        <button onClick={handleFruit}>Change Fruit Name</button>

        <h1>
            Toggle in React Js
        </h1>
        
        <button onClick={()=>setDisplay(!display)}>Toggle</button>
        {
            display?<h2><User /></h2>:null
        }


        <h1>
            Multiple Condition in React Js
        </h1>
        <button onClick={()=>setCounter(counter + 1)}>Counter</button>
        {
            counter==1?<User />
            :counter==2?<h1>Hiral + {counter}</h1>
            :<h1>Other Condition + {counter}</h1>
        }
        </>
    )
}

export default State