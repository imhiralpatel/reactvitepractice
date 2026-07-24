import { College } from "./User";

function NestedLoop(){
    const collegeData=[
        {
            name:'IIT Delhi',
            city:'Delhi',
            website:'www.iit.com',
            student:[
                {
                    name:'Anil Sidhu',
                    age:'29',
                    email:'anil@test.com'
                },
                {
                    name:'Rajesh Sidhu',
                    age:'29',
                    email:'Rajesh@test.com'
                },
                {
                    name:'Tanvi Sidhu',
                    age:'29',
                    email:'tanvi@test.com'
                }
            ]
        },
        {
            name:'IET Alwar',
            city:'Alwar',
            website:'www.iet.com',
            student:[
                {
                    name:'Anil Sidhu',
                    age:'29',
                    email:'anil@test.com'
                },
                {
                    name:'Rajesh Sidhu',
                    age:'29',
                    email:'Rajesh@test.com'
                },
                {
                    name:'Tanvi Sidhu',
                    age:'29',
                    email:'tanvi@test.com'
                }
            ]
        },
        {
            name:'NCIET Hisar',
            city:'Hisar',
            website:'www.nciet.com',
            student:[
                {
                    name:'Anil Sidhu',
                    age:'29',
                    email:'anil@test.com'
                },
                {
                    name:'Rajesh Sidhu',
                    age:'29',
                    email:'Rajesh@test.com'
                },
                {
                    name:'Tanvi Sidhu',
                    age:'29',
                    email:'tanvi@test.com'
                }
            ]
        }
    ]
    return(
        <>
        <div>
            <h2 style={{color:"maroon"}}>26. Array Nested Looping with component</h2>
            {
                collegeData.map((college, index)=>(
                    <div key={index}>
                        <College colleges={college} />

                    </div>
                ))
            }
        </div>
        </>
    )
}

export default NestedLoop;