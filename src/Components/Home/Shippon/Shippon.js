import React, { useContext } from 'react';
import { catagoryContext } from '../../../App';
const Shippon = () => {
   const count = useContext(catagoryContext)
    return (
        <div>
             <h2>Shippn Part :{count}</h2>
        </div>
    );
};

export default Shippon;