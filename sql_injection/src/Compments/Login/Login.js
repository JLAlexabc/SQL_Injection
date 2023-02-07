import React, { useState } from "react";
import {Form,Button,Container,Row, Col} from "react-bootstrap";
import "./login.css";

const Login = ()=>{
    //useState to save user input email and password
    let [user,setUser] = useState({
        email:"",
        password:"",
    });
    let [result, setResult] = useState([]);

    //record the change about user input
    const handleChange = (event)=>{
        let {name, value} = event.target;
        setUser((oldData)=>{
            return {
                ...oldData,
                [name]:value,
            }
        });
    };
    
    //send request to backend server
    const handleLogin = async (event) =>{
        event.preventDefault();
        //         /\w+(['");-=])./g         .+(['");-=]).([\s--])       /(['");=])/g
        //1. add user input check on both frontend & backend
        //1.1 the check can be "regExp" check, to block some special chars
        // if(user.email.match(/(['");=])/g) || user.password.match(/(['");=])/g) || user.email.match(/--/g) || user.email.password(/--/g)){
        //     const invaild_chars = user.email.match(/(['");=])/g,/--/g) + user.email.match(/--/g)
        //     console.log(user.email.match(/--/g));
        //     alert(`You entered special characters ${invaild_chars} that are not allowed.`); 
        //     return
        // }

        let url = "http://localhost:8080/api/login";
        await fetch(url,{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json',
            }
        }).then((response)=>{
            //console.log(response.json());
            if(!response.ok){
                throw new Error('Login Failed');
            }
            return response.json();
        })
        .then((body)=>{
            console.log(body);
            const db_result = body.map((ele)=>{
                return ele.id+"\t"+ele.first_name+"\t"+ele.last_name+"\t"+ele.email+"\t"+ele.password+"\t\n";
            });
            setResult(db_result);
        });
    };

    return (
        //the component
        <div className="login">
            <Container fluid="sm" width="50%">
                <Row>
                    <Col><h2>User Login</h2></Col>
                </Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange}/>  
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleLogin} >
                        Login
                    </Button>
                    {' '}
                    <Button variant="secondary" type="reset">Clear</Button>
                </Form>
            </Container>
            <pre id="result">{ result }</pre>
        </div>
    );
};

export default Login;
