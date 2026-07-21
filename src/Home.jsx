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
<h1>
    {title?title:"Title Not Found"}
</h1>
<br />
<h2>{x/y}</h2>
<h1>
    {fruit()}
</h1>
<h3>
    {userObj.email}
</h3>
<h3>
    {userArray[1]}
</h3>
<h1>
{callOpertation(3, 18, "*")}
</h1>
<input type="text" value={userObj.name} id={userObj.name} />
<h1>Event and Function Call</h1>
<button onClick={callFun}>click Me</button>
<button onClick={()=>fruitName('Apple')}>Apple</button>
<button onClick={()=>fruitName('Banana')}>Banana</button>
<img src={path} alt="Niyai Urban" />
        </div>

        </>
    )
}

export default Home