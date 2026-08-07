import { Navigate, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import NavBar from "./NavBar"
import Login from "./Login"
import PageNotFound from "./PageNotFound"
import School from "./School"
import Departments from "./Departments"
import Student from "./Student"
import UserProfile from "./UserProfile"
import UserList from "./UserList"
import UserDetails from "./UserDetails"

function ReactRouter(){
    return(
        <>
        <h2 style={{color:"maroon"}}>
            React Router in react.js
        </h2>

        {/* <NavBar /> */}

        <Routes>
            <Route element={<NavBar />}>
                <Route path="/" element={<Home />} />
                <Route path="in">
                    {/* called Router Prefix */}
                    <Route path="/in/user"> 
                        <Route path="/in/user/about" element={<About />} />
                        <Route path="/in/user/login" element={<Login />} />
                    </Route>
                </Route>
                <Route path="/users/list?" element={<UserList />} />
                <Route path="/users/:id/:name?" element={<UserDetails />} />
                {/* <Route path="/users/list" element={<UserList />} /> */}
            </Route>
            
            <Route path="/school" element={<School />} >
                <Route index element={<Student />} />
                <Route path="departments" element={<Departments />} />
                <Route path="detail" element={<UserProfile />} />
            </Route>
            {/* <Route path="/*" element={<PageNotFound />} /> */}
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        </>
    )
}

export default ReactRouter