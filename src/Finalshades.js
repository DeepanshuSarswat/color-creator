import { useState,useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Finalshades = (props) => {
    const [copies,setcopies] = useState(false)
    let e = props.e;
    let idx = props.idx;
    useEffect(() => {
        if(copies === true){
        setInterval(() => {
            setcopies(false)
        },1500);
 
 }
    }, [copies])
    return ( 
        <CopyToClipboard text = {e.hexString()} onCopy ={() =>{setcopies(true)}}>
           {
               copies ? ( <div key ={idx} style ={{backgroundColor :e.hexString() }}className ="finalshades">Copied!</div>) :
               ( <div key ={idx} 
                style ={{backgroundColor :e.hexString() }}
                className ="finalshades">
 
                   {e.hexString()} 
                    </div>)
           }
                  
        </CopyToClipboard>
        
     );
}
 
export default Finalshades;