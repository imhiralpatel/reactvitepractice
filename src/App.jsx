import { useState } from "react";
import Controlled from "./Controlled";
import Counter from "./Counter";
import Effect from "./Effect";
import Input from "./input";
import NestedLoop from "./NestedLoop";
import Prop from "./Props";
import Skills from "./Skills";


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


      

      <Counter count={count} Data={data} />
      <button onClick={()=>setCount(count + 1)}>Counter {count}</button>
      <button onClick={()=>setData(data + 1)}>Data {data}</button>


      <Effect />
      <NestedLoop />
      <Controlled />
      <Input />
      <Skills />
      <Prop data={userObj} sname={userName} />
      <Prop data={userObj2} />
    </div>
    </>
  )
}

export default App
