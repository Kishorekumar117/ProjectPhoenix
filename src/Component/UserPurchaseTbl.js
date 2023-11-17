import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserPurchaseTbl = () => {
    const [purchase, setPurchase] = useState([]);

    const fetchPurchase = () => {
        axios.get("http://localhost:8888/purchase")
            .then((res) => {
                setPurchase(res.data);
            })
            .catch((err) => {
                console.error('Error fetching purchase data:', err);
            });
    };

    useEffect(() => {
        fetchPurchase();
    }, []);

    return (
        <div className="container mt-4">
            
           
            <Row xs={1} md={2} lg={3} className="g-4">
                {purchase.map((val) => (
                    <Col key={val.id}>
                        <Card style={{ backgroundColor: 'maroon', color: 'gold', borderRadius:'20px'}}>
                            <Card.Body>
                                <Card.Title>{val.username}</Card.Title>
                                <Card.Text>
                                    <strong>Product Name:</strong> {val.productname}<br />
                                    <strong>Product Price:</strong> {val.productprice}<br />
                                    <strong>Email:</strong> {val.useremail}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default UserPurchaseTbl;