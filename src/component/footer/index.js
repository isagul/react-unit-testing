import React, {useState} from 'react';

const Footer = (props) => {
    const {header, desc} = props;
    const [count, setCount] = useState(0);

    if(!header) {
        return null;
    }

    function increaseCount(){
        setCount(prevCount => prevCount + 1);
        if (props.emitEvent){
            props.emitEvent();
        }
    }

    function decreaseCount(){
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div className="footerComponent">
            <h1 className="header">{header}</h1>
            <p className="desc">{desc}</p>
            <button className="incrementButton" onClick = {increaseCount}>Increment</button>
            <button className="decrementButton" onClick = {decreaseCount}>Decrement</button>
            <p className="count">{count}</p>
        </div>
    )
}

export default Footer;
