import React from "react";
import { Container,Form,Button } from "react-bootstrap";
import "./search.css";
const Serach = () =>{
    return (
        <Container className="search">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicSearch">
                    <Form.Control type="text" placeholder="What is in your mind?" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </Container>
    );
};

export default Serach;