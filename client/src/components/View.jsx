import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = props =>{

    const [products, setProducts]  = useState([]);
    useEffect(()=>{
        getAll()
    }, [])
    console.log(products);
    
    const getAll =() =>{
        axios.get('http://localhost:8000/api/products/')
    .then(res => {setProducts(res.data.products) 
        console.log('res: ', res)})
    .catch(err => console.log('Error: ', err))
    }

    const del = id =>{
        console.log('clicked');
        axios.delete(`http://localhost:8000/api/products/delete/${ id }`)
        .then(res => {
            console.log('res: ', res)
            getAll();
        })
        .catch(err => console.log('Error: ', err))
    }
    return(

    <div className="container mt-5">
        <h2>All Products:</h2>
        <div className="container col-10 d-flex justify-content-between">
        {
            products.map((product, i) =>{
                return(
                    <div key={ i } className="card col-6 m-2">
                        <div className="card-body ">
                        <a  className='btn btn-outline-dark btn-block' href={`http://localhost:3000/api/products/${product._id}`}>{ product.title }</a>
                        <a  className='btn btn-outline-info btn-block' href={`http://localhost:3000/api/products/update/${product._id}`}>Update</a>
                        <button  className='btn btn-outline-danger btn-block' onClick={ ()=> del(product._id) }>Delete</button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
    );
}

export default View;