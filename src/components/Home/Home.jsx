import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';

const Home = () => {
    return (
        <div>
        <Header/>
        <div className="container-fluid">
        <div className="row">
          <Sidebar/>
          <MainContainer/>
        </div>
      </div>
      </div>
    );
};

export default Home;