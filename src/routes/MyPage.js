import React from 'react';
import Header,{ MainContent}   from './TopNav';

class MyPage extends React.Component{
    render(){ 
        return  (
            <div  className="all-form-div">
                <Header />
                <h1 className="Title">당신의 활동내역입니다.</h1>
            </div>
        );
    }
}

export default MyPage;