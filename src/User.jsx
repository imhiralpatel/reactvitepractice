
// Arrey Nested loop
function User({data}){
    return(
        <>

        {/* <h1>User Component</h1> */}
        <div style={{border:'1px solid green',padding:'10px',margin:'10px',width:'400px',borderRadius:"10px"}}>
            <h4>Name : <span style={{color:'green'}}>{data.name}</span></h4>
            <h4>Age : <span style={{color:'green'}}>{data.age}</span></h4>
            <h4>Email : <span style={{color:'green'}}>{data.email}</span></h4>

        </div>
        </>
    )
}

export default User;

export function College({colleges}){
    return(
        <>
        <div style={{
            backgroundColor:"#ccc",
            padding:"10px",
            margin:"10px",
            borderBottom:"1px solid #000",
            borderRadius:"10px"
        }}>
            <h2>Name : {colleges.name}</h2>
            <ul>
                <li>
                    <h3>
                        city : {colleges.city}
                    </h3>
                </li>
                <li>
                    <h3>
                        website : {colleges.website}
                    </h3>
                </li>
                <li>
                    <h3>Students:</h3>
                    {
                        colleges.student.map((student, index)=>(
                            <div  key={index} style={{color:"red"}}>
                                <ul>
                                    <li>
                                        Name : 
                                        <span style={{color:"#000"}}>
                                             {student.name}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        ))
                    }
                </li>
            </ul>
        </div>
        </>
    )
}

