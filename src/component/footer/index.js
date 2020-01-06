import React from 'react';

const Footer = (props) => {
    const {header, desc} = props;

    if(!header) {
        return null;
    }
    
    return (
        <div className="footerComponent">
            <h1 className="header">{header}</h1>
            <p className="desc">{desc}</p>
        </div>
    )
}

export default Footer;