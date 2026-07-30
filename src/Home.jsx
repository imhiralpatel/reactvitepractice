// function fruit(){
//         return 'Apple';
//     }

function Home(){
    function callOpertation(a, b, op){
        if(op=="+"){
            return a+b;
        }
        else if(op=="-"){
            return a-b;
        }
        else
        {
            return a*b;
        }
    }

    const userObj={
        name:'Hiral',
        email:'hiral@gmail.com',
        age:35
    }

    const userArray=['Jay', 'Vijay', 'Ajay']
    const title="Operation";
    let x=10;
    let y=5;

    function fruit(){
        return 'Mango';
    }
    const path="https://www.niyatiurban.com/images/logo/logo.png";
    function callFun(){
        alert('function called')
    }
    const fruitName=(name)=>{
        alert(name)
    }

    return(
        <>
        <div>
            <h2 style={{color:"maroon"}}>13. Event and Function Call</h2>
            <h3>
                {title?title:"Title Not Found"}
            </h3>
            <br />
            <h3>{x/y}</h3>
            <h3>
                {fruit()}
            </h3>
            <h3>
                {userObj.email}
            </h3>
            <h3>
                {userArray[1]}
            </h3>
            <h3>
            {callOpertation(3, 18, "*")}
            </h3>
            
            <br />

            <input type="text" value={userObj.name} id={userObj.name} readOnly={true} />
            
            <button onClick={callFun}>click Me</button>
            <button onClick={()=>fruitName('Apple')}>Apple</button>
            <button onClick={()=>fruitName('Banana')}>Banana</button>
            <br />
            <img src={path} alt="Niyai Urban" style={{width:'200px',height:'200px'}} />
        </div>

        </>
    )
}

export default Home