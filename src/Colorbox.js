import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Finalshades from './Finalshades';

const Colorbox = (props) => {
    const [copies,setcopies] = useState(true)
    const colrshade = props.colrshade;
    return ( 
        <div className ="colorbox">
           {
               colrshade.map((e,idx) => (
        <Finalshades e ={e} idx ={idx} />
               
               )
               )
       
           }

        </div>
     );
}
 
export default Colorbox;