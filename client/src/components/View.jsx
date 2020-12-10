import React from 'react';

const View = props =>{

    let products = props.products;

    console.log(products)

    return(

    <div className="container mt-5">
        <h2>All Products:</h2>
        <div className="container col-4">
        {
            products.map((product, i) =>{
                return(
                <a key={ i } className='btn btn-dark btn-block' href={`http://localhost:3000/api/products/${product._id}`}>{ product.title }</a>
                )
            })
        }
        </div>
    </div>
    );
}

export default View;