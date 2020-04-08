import React , {useContext}from 'react';
import {CountContext} from './Home2'
 
const ComponentA = () => {
    const countContext =useContext(CountContext)
    return (
        <div>
            ComponentA
        <button onClick={() => countContext.countDispatch({type:"INCREMENT", value:2})}>Increment</button>
        <button onClick={() => countContext.countDispatch({type:"DECREMENT", value:4})}>Decrement</button>
        <button onClick={() => countContext.countDispatch({type:"RESET", value: 0})}>Reset</button>
        </div>
    );
}
 
export default ComponentA;