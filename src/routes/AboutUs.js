import React from 'react';
import {Link} from 'react-router-dom';
import Header,{ MainContent}   from './TopNav';
import '../css/AboutUs.css';

function AboutUs(){
    return(
        <div className="about_container">
            <Header />
            <div class="main-container">
                <h1>환경을 생각하는 우리는 <div class="main_titl_1">EcoToner</div> 입니다.</h1>
                <br/>
                <p> Ecotoner는 환경과 운동을 생각하여 마라톤을 주최해보자는 발상으로부터 시작하였습니다.</p>
                
                <p>기존의 환경마라톤은 코로나라는 특수한 상황속에서 어려움을 겪게 되었습니다. 그 이후 온택트 형식의 환경마라톤이 등장하였으나 개인이 환경 마라톤의 성격을 지켜가며 활동하기엔 부족한 점이 많았습니다. EcoToner는 이러한 문제를 보완하고 기존 환경마라톤의 장점을 유지하면서 온택트 형식을 완벽 지원하고자 합니다.
                </p>
                {/* <div><Link to="/Attend" class="attendBtn">신청하기</Link></div> */}
            </div>           
            
        </div>
    );
}

export default AboutUs;