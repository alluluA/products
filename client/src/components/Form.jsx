import React, { useState, useEffect} from 'react';
import axios from 'axios';
import View from './View';


const Form = props =>{
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDesc] = useState('');

    const onSubmitHandeler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new',{
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


  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products/')
    .then(res => {setProducts(res.data.products) 
        console.log('res: ', res)})
    .catch(err => console.log('Error: ', err))
},[]);
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
    <input className="btn btn-outline-dark" type="submit" value="Create Product" />
    </div></div>
    </form>


    <View products={ products }/>
    </div>

    );
}

export default Form;