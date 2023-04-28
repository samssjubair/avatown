import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContainer from './components/MainContainer/MainContainer';

const App = () => {
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

export default App;