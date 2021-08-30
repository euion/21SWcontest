import React from 'react';
import Header,{ MainContent}   from './TopNav';
import '../css/Home.css'

class Home extends React.Component{
    render() {
        return (
          <Header />,
          <MainContent />
        )
    }
}
export default Home;