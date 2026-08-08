import { NavLink, Outlet } from "react-router"
import './header.css'

function NavBar() {
    return (
        <>
            <div>
                <div className="header">
                    <div>
                        <NavLink className="link" to={"/"}>
                            <h2>Logo</h2>
                        </NavLink>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <NavLink className={({isActive})=> isActive? 'link custom-active':'link'} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/in/user/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/in/user/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/school">School</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/api/user">API User</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/api/user/add">API User Add</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/users">Users</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/list">List</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default NavBar