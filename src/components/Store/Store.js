import React from 'react';
// import './Header.css';

const Store = (props) => {
    console.log(props.api);
    return (
        <div className="store">
           <p>This is {props.name}</p>
        </div>
    )
}

export default Store;