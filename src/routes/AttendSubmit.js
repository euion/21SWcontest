import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header, { MainContent } from "./TopNav";
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import anime from "animejs/lib/anime.es.js";

import '../css/AttendSubmit.css'

function AttendSubmit(){
    return(
        <div className="all-form-div">
                            <Header />
           <h1 className="Title">에코토너 신청</h1>
            <br/>
            <div className="login-form-div">
                <Form >
                    <br/>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>이름</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>마라톤 진행 기간</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>마라톤 진행 기간을 선택하세요</option>
                            <option>1일</option>
                            <option>2일</option>
                            <option>3일</option>
                            <option>4일</option>
                            <option>5일</option>
                            <option>6일</option>
                            <option>7일</option>
                            <option>8일</option>
                            <option>9일</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>비상 연락망</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>
                    <br/>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>출발지</Form.Label>
                        <Form.Control placeholder="ex) 서울특별시 강남구 삼성동 " />
                        <br />
                        <Form.Label>도착지</Form.Label>
                        <Form.Control placeholder="ex) 서울특별시 강남구 삼성동 " />
                    </Form.Group>
                    <br/>
                    <Form.Label>간단한 다짐</Form.Label>
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
                        <Button variant="success" className="login-btn">
                            <Link to="/SubmitResult" id="login-txt">
                            Submit
                            </Link>
                        </Button>
                        </div>
                </Form>
            </div>
        </div>
    );
}

function SubmitResult(){
    return(
        <div className ="about_container">
            <div className="all-form-div">
                <Header />
                <h1 className="Result-title">에코토너 신청이 완료되었습니다.</h1>
           </div>
        </div>
    );
}

export { SubmitResult };
export default AttendSubmit;