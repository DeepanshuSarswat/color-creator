import Values from 'values.js'
import isColor from 'is-color';
import { useState,useEffect } from "react";
import Title from "./Title";
import Colorbox from './Colorbox';

function App() {
  const [valuess ,setvalues] = useState("#0000")
  let [colrshade ,setcolrshade] = useState([]);
 const  submitted = (e) =>{
  e.preventDefault();
  if(isColor(valuess)){
    const color = new Values(valuess);
    const colorshade = color.shades(5);
    console.log(colorshade)
    setcolrshade(colorshade);
    console.log(colrshade);
  }

 }


  return (
    <div className="App">
    <Title valuess ={valuess} setvalues ={setvalues} submitted={submitted} />
   <Colorbox colrshade ={colrshade}/>
    </div>
  );
}

export default App;
