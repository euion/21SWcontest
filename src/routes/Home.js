import React from 'react';
import Header,{ MainContent}   from './TopNav';
import '../css/Home.css'

class Home extends React.Component{
    render() {
        return (
          <div className="background-img">
            <Header />,
            <MainContent />
          </div>
        )
    }
}
export default Home;