

function Prop({data, sname="User"}) {
    return(
        <>
        <div>
            <h3 style={{color:"maroon"}}>19. Pass JSX with Props react js </h3>

            <Student>
                <h3 style={{color:'red'}}>
                    Name : {sname}
                </h3>
            </Student>

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