import React, { useState, useEffect} from 'react';
import axios from 'axios';


const UpdateForm = props =>{


    const [product, setProduct] = useState({});
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [description, setDesc] = useState(product.description);
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => {setProduct(res.data.product) 
            console.log('res: ', res)})
            .catch(err => console.log('Error: ', err))
            
            setTitle(product.title);
            setPrice(product.price);
            setDesc(product.description)
            
        },{});
        console.log(product);

    const onSubmitHandeler = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${product._id}`,{
            title,
            price,
            description
        })
        .then(res => console.log('Response: ',res))
        .catch(err => console.log('Error: ',err)) 

        setTitle('');
        setPrice(0);
        setDesc('')
    }

    return(

    <div className="container mt-5">
        <form onSubmit={ onSubmitHandeler }>
    <div className="form-group row">
    <label className="col-4 col-form-label">Title: </label>
    <div className="col-sm-6">
        <input type="text"  className="form-control"  onChange={ e => setTitle( e.target.value ) } value={ title }/>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-4 col-form-label">Price: </label>
    <div className="col-sm-6">
        <input type="text"  className="form-control"  onChange={ e => setPrice( e.target.value ) } value={ price }/>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-4 col-form-label">Description: </label>
    <div className="col-sm-6">
        <input type="text"  className="form-control"  onChange={ e => setDesc( e.target.value ) } value={ description }/>
    </div>
    </div>
    <div className="form-group row">
        <p className="col-4"></p>
    <div className="col-sm-6">
    <input className="btn btn-outline-dark" type="submit" value="Update Product" />
    </div></div>
    </form>
    </div>

    );
}

export default UpdateForm;