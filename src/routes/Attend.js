import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Attend.css';

function FormExample(){
    return(
        <div className="about_container">
            <div class="main-container">
                <h1>환경 마라톤이란?</h1>
                <p> 환경 마라톤은 건강적인 측면을 생각하면서 주변에 쓰레기를 줍겠다는 취지로 만들어진 운동입니다. 현재 이뤄지고 있는 언택트 환경 마라톤의 개념을 확장 시켜, 웹 페이지를 통해 건강과 환경을 생각하는 '온택트 환경마라톤' 으로 재탄생 시키고자 합니다.</p>
            </div>           
            <div><Link to="/Attend" class="attendBtn">신청하기</Link></div>
        </div>
    );
}

export default FormExample;