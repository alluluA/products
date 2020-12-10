import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewP = props =>{

    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => {setProduct(res.data.product) 
            console.log('res: ', res)})
        .catch(err => console.log('Error: ', err))
        
        
    },{});
console.log(product);
    return(

    <div className="container mt-5 ">
        <div className="card ">
        <h2 className='card-header bg-dark text-light'>{ product.title }</h2>
            <div className="car-body ">
        <h4>{ product.price }</h4>
        <h4>{ product.description }</h4>
        </div>
        </div>
    </div>
    );
}

export default ViewP;