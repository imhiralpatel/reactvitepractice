import { useState } from "react";
import Controlled from "./Controlled";
import Counter from "./Counter";
import Effect from "./Effect";
import Input from "./input";
import NestedLoop from "./NestedLoop";
import Prop from "./Props";
import Skills from "./Skills";
import PassFun from "./PassFun";
import State from "./State";
import Hooks from "./Hooks";
import Event from "./Event";
import ReactRouter from "./ReactRouter";
import ApiCalls from "./ApiCalls";
import LazyLoding from "./LazyLoding";
import ApiUseApi from "./ApiUseApi";


function App() {

  const userName = "Hiral Patel";

  let userObj={
    name:'Hiral Patel',
    age:35,
    email:'hiral@gmail.com'
  }

  let userObj2={
    name:'Jayna Hiral Patel',
    age:29,
    email:'Jayna@gmail.com'
  }

  const [count, setCount]=useState(0);

  const [data, setData]=useState(0);

  return (
    <>
    <div>
      <h1>Hi, {userName}</h1>

      <hr />

      <ReactRouter />
      
      <hr />
      <PassFun />
      
      <hr />
      <LazyLoding />
      <hr />
      <ApiUseApi />
      <hr />
      <Event />

      <hr />

      <State />

      <hr />

      <h2 style={{color:"maroon"}}>18. Prop in react js </h2>
      
      <Prop data={userObj} sname={userName} />
      <Prop data={userObj2} />

      <hr />
      
      <Hooks />

      <hr />

      <Effect />

      <hr />


      <hr />
      <Input />

      <Skills />

      <hr />

      <NestedLoop />
      
      <hr />

      <Controlled />

<hr />
      
      <button onClick={()=>setCount(count + 1)}>Counter {count}</button>
      <button onClick={()=>setData(data + 1)}>Data {data}</button>

      <Counter count={count} Data={data} />
    
      <hr />


      
    </div>
    </>
  )
}

export default App
