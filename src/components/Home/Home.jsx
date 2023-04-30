import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';

const Home = () => {
    const [genderFilter,setGenderFilter]=useState("")
    const [cartCount, setCartCount]= useState(0);
    return (
        <div>
        <Header cartCount={cartCount} />
        <div className="container-fluid">
        <div className="row">
          <Sidebar genderFilter={genderFilter} setGenderFilter={setGenderFilter} />
          <MainContainer genderFilter={genderFilter} setGenderFilter={setGenderFilter} cartCount={cartCount} setCartCount={setCartCount} />
        </div>
      </div>
      </div>
    );
};

export default Home;