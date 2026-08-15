import { lazy, Suspense, useState } from "react"
//import About from "./About"
const About = lazy(()=>import('./About'))

export default function LazyLoding(){

    const [load, setLoad]=useState(false)
    return(
        <div>
            <h2 style={{color:"maroon"}}>
                67 : Lazy Loading : Best Performance
            </h2>

            <button onClick={()=>setLoad(true)}>Load About</button>

            {/* {
                load ? <About /> : null
            } */}
            {
                load ? <Suspense fallback={<h3>loading....</h3>}> <About/> </Suspense> : null
            }

        </div>
    )
}