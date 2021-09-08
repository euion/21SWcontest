import React from 'react';
import Header,{ MainContent}   from './TopNav';
import ground from '../img/Vector.png'
import MypageTree from '../img/Tree03-1.png'
import '../css/MyPage.css'

class MyPage extends React.Component{
    render(){ 
        return  (
            <div className="all-form-div">
                <Header />
                <h1 className="Title">당신의 성장도를 확인하세요</h1>
                <br/>
                <p className="main-text">Ecotoner를 통하여 당신은 이만큼 성장했습니다</p>
                <div className="mypage-tree-align">
                        <img src={MypageTree} alt="MypageTree_img" className="mypage-tree-img"/>
                </div>
                <div className="ground-img-align">
                    <img src={ground} className="ground-img" alt="ground_img"/>
                </div>

            </div>
        );
    }
}

export default MyPage;