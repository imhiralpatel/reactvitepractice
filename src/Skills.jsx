import { useState } from "react"
import User from "./User";

function Skills(){
    const [skills, SetSkills]=useState([]);
        const handleSkills=(event)=>{
            // console.log(event.target.value, event.target.checked);
            if(event.target.checked){
                SetSkills([...skills, event.target.value])
            }else{
                SetSkills([...skills.filter((item)=>item!==event.target.value)])
            }
        }

        const [gender, setGender]=useState('female');
        const[city, setCity]=useState('Navsari');

        //const userName=['Hiral', 'Jayna', 'Mani', 'Yogesh'];

        const userData=[{
            Id:1,
            name:'Hiral',
            age:35,
            email:'hiral@test.com'
        },
        {
            Id:2,
            name:'Jayna',
            age:29,
            email:'jayna@test.com'
        },
        {
            Id:3,
            name:'Mani',
            age:65,
            email:'mani@test.com'
        },
        {
            Id:4,
            name:'Yogesh',
            age:36,
            email:'yogesh@test.com'
        }];

    return(
        <>
        <div>
            <h2 style={{color:"maroon"}}>22. Handle Checkbox in react js</h2>
            <h5>Select Your Skills</h5>
            <input onChange={handleSkills} type="checkbox" id="php" value="PHP" />
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="js" value="JS" />
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="react" value="REACT" />
            <label htmlFor="react">REACT</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="node" value="NODE" />
            <label htmlFor="node">NODE</label>
            <br />
            <br />
            <h4>{skills.toString()}</h4>

            <h2 style={{color:"maroon"}}>23. Handle Redio and Dropdown</h2>
            <h4>select Gender</h4>

            <input type="radio" name="gender" id="male" onChange={(event)=>setGender(event.target.value)} value={'male'} checked={gender == 'male'} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" onChange={(event)=>setGender(event.target.value)} value={'female'} checked={gender == 'female'} />
            <label htmlFor="female">Female</label>
            <h5>Selected Gender : {gender}</h5>

            <br />
            <br />
            <h4>Select City</h4>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={'Navsari'}>
                <option value={'Navsari'}>Navsari</option>
                <option value={'Surat'}>Surat</option>
                <option value={'Baroda'}>Baroda</option>
                
            </select>

            <br />
            <h4>Selected City : {city}</h4>
            <br />
            <br />
            
            <h2 style={{color:"maroon"}}>24. Loop in JSX with Map Function</h2>

<table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user, index)=>(
                            <tr key={index}>
                                <td>{user.Id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h4>Dummy Table</h4>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Hiral</td>
                        <td>35</td>
                        <td>hiral@test.com</td>
                    </tr>
                </tbody>
            </table>

            <br />
            <h2 style={{color:"maroon"}}>25. Reuse Component in React</h2>
            <br />
            {
                userData.map((user, index)=>(
                    <div key={index}>
                        <User data={user} />
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Skills