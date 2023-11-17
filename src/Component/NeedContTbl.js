import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NeedConTbl = () => {
    const [contacts, setContacts] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8888/contactus")
            .then((res) => {
                setContacts(res.data);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteContact = (id) => {
        if (window.confirm(`Are you sure to remove the user ${id}?`)) {
            axios.delete(`http://localhost:8888/contactus/${id}`)
                .then(() => {
                    window.alert("User removed successfully");
                    fetchData();
                })
                .catch((err) => {
                    console.error('Error deleting user:', err);
                });
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {contacts.map((contact) => (
                    <div key={contact.id} className="col-md-4 mb-3">
                        <Card style={{ backgroundColor: 'maroon', color: 'gold',borderRadius:'20px' }}>
                            <Card.Body>
                                <Card.Title>{contact.name}</Card.Title>
                                <Card.Text>
                                    <strong>Contact Number:</strong> {contact.contact}<br />
                                    <strong>Email:</strong> {contact.email}<br />
                                    <strong>Message:</strong> {contact.message}
                                </Card.Text>
                                <Button
    variant="danger"
    onClick={() => deleteContact(contact.id)}
    style={{ backgroundColor: 'gold', color: 'maroon', transition: 'box-shadow 0.1s' }}
    className="mt-2"
    onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 1.0)'}
    onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
>
    Remove
</Button>

                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NeedConTbl;