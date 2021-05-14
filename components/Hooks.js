import {useState} from 'react';
import PropTypes from 'prop-types';


function Hooks(){
    const[intitalValue,changeValue] = useState(0);
    return(
        <div>
            <p>{intitalValue}</p>
            <button onClick={()=>changeValue(intitalValue + 1)}>click</button>
        </div>
    )
}

export default Hooks;
