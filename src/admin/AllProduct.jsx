import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import NavbarForm from '../component/NavbarForm';
import FooterForm from '../component/FooterForm';

const AllProduct = () => {
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [updatedProduct, setUpdatedProduct] = useState({
        product: null,
        description: '',
        price: '',
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No authentication token found');
                }
                const response = await axios.get('https://ecommerce-vyte.onrender.com/getproduct', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.data && Array.isArray(response.data.photos)) {
                    setTableData(response.data.photos);
                } else {
                    setTableData([]);
                    console.error('Unexpected response data format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    const deleteProduct = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found');
            }
            const response = await axios.delete(`https://ecommerce-vyte.onrender.com/deleteproduct/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setTableData(tableData.filter(item => item._id !== productId));
            } else {
                console.error('Error deleting product:', response);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            setError(error.message);
        }
    };

    const openUpdateModal = (product) => {
        if (product && product._id) {
            setCurrentProduct(product);
            setUpdatedProduct({
                product: null,
                description: product.description,
                price: product.price
            });
            setModal(true);
        } else {
            console.error('Product ID is undefined');
            setError('Product ID is undefined');
        }
    };

    const updateProduct = async () => {
        try {
            if (!currentProduct || !currentProduct._id || !updatedProduct.description || !updatedProduct.price) {
                throw new Error('Incomplete data for updating product');
            }

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found');
            }

            const productId = currentProduct._id;
            const formData = new FormData();
            if (updatedProduct.product) {
                formData.append('product', updatedProduct.product);
            } else {
                console.error('No file selected for upload');
                throw new Error('No file selected for upload');
            }
            formData.append('description', updatedProduct.description);
            formData.append('price', updatedProduct.price);

            // Log FormData for debugging
            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }

            const response = await axios.put(
                `https://ecommerce-vyte.onrender.com/updateproduct/${productId}`,
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            console.log('Server response:', response.data);

            if (response.status === 200) {
                setTableData(prevData =>
                    prevData.map(item => (item._id === productId ? { ...item, description: updatedProduct.description, price: updatedProduct.price } : item))
                );
                setModal(false);
            } else {
                console.error('Error updating product:', response);
                setError('Error updating product. Please try again later.');
            }
        } catch (error) {
            if (error.response) {
                console.error('Server responded with an error:', error.response.data);
                setError(`Error updating product: ${error.response.data.message || 'Unknown error'}`);
            } else if (error.request) {
                console.error('No response received:', error.request);
                setError('No response received from the server.');
            } else {
                console.error('Error setting up request:', error.message);
                setError(error.message);
            }
        }
    };

    return (
        <>
        <NavbarForm/>
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        {error && <p className="text-danger">{error}</p>}
                        {/* <Table className='table'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(item => (
                                    <tr key={item._id}>
                                        <td>{item.upload && item.upload[0] ? <img src={item.upload[0].url} alt={item.description} width={50} /> : 'No Image'}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Button className='btn btn-danger' onClick={() => deleteProduct(item._id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> */}
                        <Table className='table'>
    <thead>
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {tableData.map(item => (
            <tr key={item._id}>
                <td>{item.upload && item.upload[0] ? <img src={item.upload[0].url} alt={item.description} width={50} /> : 'No Image'}</td>
                <td style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.description}</td>
                <td>{item.price}</td>
                <td>
                    <Button className='btn btn-danger' onClick={() => deleteProduct(item._id)}>Delete</Button>
                    {/* <Button className='btn btn-success ms-3' onClick={() => openUpdateModal(item)}>Update</Button> */}
                </td>
            </tr>
        ))}
    </tbody>
</Table>

                    </Col>
                </Row>
            </Container>

          
        </section>
        <FooterForm/>
        </>
    );
};

export default AllProduct;

    


