import { useEffect, useState } from "react"

function Effect(){
    
    const [counter, setCounter]=useState(0);
    const [data, setData]=useState(0);

    
    function callOnce(){
        console.log("Counter Function", counter);
    }
    
    function counterFunction(){
        console.log("Counter Function Called");
    }

    // Call Every Time
    // useEffect(()=>{
    //     counterFunction();
    // })

    // Call Only One Time
    useEffect(()=>{
        counterFunction();
    },[])

    // Call on changing single state / prop
    useEffect(()=>{
        callOnce();
    }, [counter])


    // call on changing both state / prop
    // useEffect(()=>{
    //     counterFunction();
    // },[counter,data,])


    return(
        <>
        <div>
            <h3>useEffect Hook</h3>
            <button onClick={()=>setCounter(counter + 1)}>counter {counter}</button>
            <button onClick={()=>setData(data + 1)}>Data {data}</button>

        </div>
        </>
    )
}

export default Effect