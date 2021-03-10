import React from 'react';

const Header = (props) => {
    //sibling way data pase and eventHandler
    const {count, setCount} = props;
    return (
        <div>
             <h2>This is Header Part : {count}</h2>
             <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Header;