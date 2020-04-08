import React, { useState, useEffect} from 'react';
import logo from '../../logo.svg';
import './Home.css';

const Home = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title= `you clicked ${count} times`
    console.log('hello')
    return ()=>{
        console.log('unmounted')
    }
    },[count])

    return (
        <div className="App">
            <button onClick={(e) => setCount(count + 1)}>increment</button>
            <button onClick={(e) => setCount(count - 1)}>decrement</button>
            <button onClick={(e) => setCount(count * 5)}>Multiply</button>
            <p> You clicked on the button{count}times</p>
        </div>
    );


}

export default Home;
