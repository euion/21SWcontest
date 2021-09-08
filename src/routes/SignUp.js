import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import Header,{ MainContent}   from './TopNav';
import '../css/Login.css';

import '../css/SignUp.css'
import Home from './Home';


function SignUp(){  
    return (
        <div className="all-form-div">
                <Header />
            <h1 className="Title">회원가입</h1>
            <br/>
            <div className="login-form-div">
                <Form >
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter@email.com" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>
                    <br/>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>이름</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>출생년도</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>출생년도를 선택하세요</option>
                            <option>1996</option>
                            <option>1997</option>
                            <option>1992</option>
                            <option>1993</option>
                            <option>1994</option>
                            <option>1995</option>
                            <option>1996</option>
                            <option>1997</option>
                            <option>1998</option>
                            <option>1999</option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>
                    <br/>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>주소지</Form.Label>
                        <Form.Control placeholder="ex) 서울특별시 강남구 삼성동 " />
                    </Form.Group>
                    <br/>
                    <Form.Label>간단한 자기소개</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">

                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <br/>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="정보수집에 동의합니다." />
                    </Form.Group>
                        <div className="login-btn-align">
                            <Button className="login-btn" variant="primary" type="submit">
                                <Link to={Home} id="signUp-txt">Submit</Link>
                            </Button>
                        </div>
                </Form>
            </div>
    </div>
  );
};
export default SignUp;