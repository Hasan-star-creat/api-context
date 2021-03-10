import React, { useContext } from 'react';
import { catagoryContext } from '../../App';
import Catagory from './Catagory/Catagory';

const Home = () => {
    const catagory = useContext(catagoryContext)
    return (
        <div style={{border:'1px solid purple'}}>
             <h2>This is the home: {catagory}</h2>
             <Catagory></Catagory>
        </div>
    );
};

export default Home;