import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/Login.css';

function Login() {
    return (
        <div className="login-form-div">
            <Form className="login-form-container">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Email 저장" />
                </Form.Group>
                <div className="login-btn-align">
                    <Button className="login-btn" variant="primary" type="submit">
                        로그인
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Login;