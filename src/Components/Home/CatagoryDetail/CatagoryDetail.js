import React, { useContext } from 'react';
import { catagoryContext } from '../../../App';
const CatagoryDetail = () => {
  const catagory =  useContext(catagoryContext)
    return (
        <div>
             <h4>Catagory deatails values</h4>
             <h4>Details: {catagory}</h4>
        </div>
    );
};

export default CatagoryDetail;