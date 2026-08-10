import { useActionState, useState } from "react"
import "./css/validation.css"

function Login() {

    // simple User Name Validation
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState();

    const handelName = (event) => {
        if (event.target.value.length > 5) {
            setNameErr("Please enter valid username. only 5 digit allowed.");
        }
        else {
            setNameErr('');
        }
    }

    // simple Password Validation

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState();

    const handelPassword = (event) => {
        let regex = /^[A-Z0-9]+$/i;
        if (regex.test(event.target.value)) {
            setPasswordErr();
        }
        else {
            setPasswordErr("Please enter valid password. only number and alphabet allowed.");
        }
    }

    // 66 validation with useActionState
    const handleLogin = (prevData, fromData) => {
        let uname = fromData.get('username')
        let upass = fromData.get('password')
        let regex = /^[A-Z0-9]+$/i

        if (uname || uname.length < 5) {
            return { error: "Username can not empty. UserName should not container more than 5 character", uname, upass }
        }
        else if (upass || !regex.test(upass)) {
            return { error: "Password can not empty. Password can container only numbers and alphabets", uname, upass }
        }
        else {
            return { message: "logine done", uname, upass }
        }
    }
    const [data, action, pending] = useActionState(handleLogin)

    return (
        <>
            <div>
                <h1>Login</h1>
                <h2 style={{ color: "maroon" }}>
                    65 simple validation on input field
                </h2>
                <input className={nameErr ? 'error' : ''} type="text" onChange={handelName} placeholder="Enter UserName" />
                <span className="red-color">{nameErr && nameErr}</span>
                <br /><br />
                <input className={passwordErr ? 'error' : ''} type="text" onChange={handelPassword} placeholder="Enter Password" />
                <span className="red-color">{passwordErr}</span>
                <br /><br />
                <button disabled={nameErr || passwordErr}>Login</button>
            </div>
            <div>
                <h2 style={{ color: "maroon" }}>
                    66 validation with useActionState
                </h2>
                {
                    data?.message && <span style={{color:"green"}}>{data?.message}</span>
                }
                {
                    data?.error && <span className="red-color">{data?.error}</span>
                }
                <form action={action}>
                    <input className={data?.error ? 'error' : ''} defaultValue={data?.uname} name="username" type="text" placeholder="Enter UserName" />
                    <br /><br />
                    <input className={data?.error ? 'error' : ''} defaultValue={data?.upass} name="password" type="text" placeholder="Enter Password" />
                    <br /><br />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login