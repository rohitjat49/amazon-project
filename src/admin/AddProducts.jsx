import React, { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Form, FormGroup, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import NavbarForm from '../component/NavbarForm';
import FooterForm from '../component/FooterForm';

const AddProducts = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([{
        
    }]);
    console.log(product , "productproductproduct")
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState();
    const [crating, setCRating] = useState();
    const [people, setPeople] = useState();
    const [price, setPrice] = useState();
    const [discount, setDiscount] = useState();
    const [offer, setOffer] = useState();
    const [error, setError] = useState("");

    const addProduct = async (e) => {
        e.preventDefault();

        if (!product) {
            alert("Please upload a product image.");
            return;
        }

        const formData = new FormData();
        console.log(product , "upload product data")
        product.forEach((file, index) => {
            formData.append('product', file); // Note: using the same key for multiple files
        });
        formData.append('description', description);
        formData.append('rating', rating);
        formData.append('crating', crating);
        formData.append('people', people);
        formData.append('price',price);
        formData.append('discount', discount);
        formData.append('offer',offer);

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found');
            }

            const response = await axios.post('https://ecommerce-vyte.onrender.com/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('Product added:', response.data);
            alert("Product added successfully!");
            navigate('/add-all-product');
        } catch (error) {
            console.error('Error:', error);

            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }

            alert("Failed to add product. Please try again.");
        }
    };

    const handleProductChange = (e, index) => {
        const files = e.target.files;
        if (files.length > 0) {
            const newProductList = [...product];
            newProductList[index] = files[0];
            setProduct(newProductList);
        }
    };

    const addProductField = () => {
        setProduct([...product, null]);
    };
    return (
      
        <>
        <NavbarForm/>
        <section className="add-product-section">
        <Container fluid>
            <Row className="justify-content-center">
                <Col lg="10" md="10" sm="12">
                    <h4 className='mb-4 text-center'>Add Product</h4>
                    <Form onSubmit={addProduct}>
                        {product.map((_, index) => (
                            <FormGroup className='form-group' key={index}>
                                <span>Product Image</span>
                                <input 
                                    type="file" 
                                    className='form-control' 
                                    onChange={e => handleProductChange(e, index)} 
                                    required 
                                />
                            </FormGroup>
                        ))}
                        <Button type="button" className='btn-buy-now' onClick={addProductField}>Add Another Product Image</Button>
                        <FormGroup className='form-group'>
                            <span>Description</span>
                            <input 
                                type="text" 
                                className='form-control' 
                                value={description}
                                onChange={e => setDescription(e.target.value)} 
                                required 
                            />
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <span>Rating</span>
                            <input 
                                type="number" 
                                className='form-control' 
                                value={rating}
                                onChange={e => setRating(e.target.value)} 
                                required 
                            />
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <span>CRating</span>
                            <input 
                                type="number" 
                                className='form-control' 
                                value={crating}
                                onChange={e => setCRating(e.target.value)} 
                                required 
                            />
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <span>People</span>
                            <input 
                                type="number" 
                                className='form-control' 
                                value={people}
                                onChange={e => setPeople(e.target.value)} 
                                required 
                            />
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <span>Price</span>
                            <input 
                                type="number" 
                                className='form-control' 
                                value={price}
                                onChange={e => setPrice(e.target.value)} 
                                required 
                            />
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <span>Discount</span>
                            <input 
                                type="number" 
                                className='form-control' 
                                value={discount}
                                onChange={e => setDiscount(e.target.value)} 
                                required 
                            />
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <span>Offer limited time</span>
                            <input 
                                type="text" 
                                className='form-control' 
                                value={offer}
                                onChange={e => setOffer(e.target.value)} 
                                required 
                            />
                        </FormGroup>
                        {error && <p className="text-danger">{error}</p>}
                        <Button type="submit" className='btn-buy-now'>Add Product</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
    <FooterForm/>
    </>
    );
};

export default AddProducts;