import { Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import NavBar from "./NavBar"
import Login from "./Login"

function ReactRouter(){
    return(
        <>
        <h2 style={{color:"maroon"}}>
            React Router in react.js
        </h2>

        <NavBar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        </>
    )
}

export default ReactRouter