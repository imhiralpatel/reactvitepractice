

function Prop({data, sname="User"}) {
    return(
        <>
        <div>
            <Student>
                <h1 style={{color:'red'}}>
                    Name : {sname}
                </h1>
            </Student>
            <h2>Prop in react js </h2>
            <h5>Name : {data.name}</h5>
            <h5>Age : {data.age}</h5>
            <h5>Email : {data.email}</h5>
        </div>
        </>
    )
    
}

export function Student({children}){
    return(
        <>
        <div>
        {children}
        </div>
        </>
    )
}

export default Prop