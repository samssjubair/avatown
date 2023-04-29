import React from 'react';
import Category from './Category';
import Content from './Content';
import Price from './Price';
import PolygonAmount from './PolygonAmount';
import AutoUpload from './AutoUpload';
import './Sidebar.css';

const Sidebar = ({genderFilter, setGenderFilter}) => {
    return (
        <nav className="col-md-2 d-none d-md-block sidebar">
          <div className="sidebar-sticky text-small">
            <Category genderFilter={genderFilter} setGenderFilter={setGenderFilter}/>
            <Content/>
            <Price/>
            <PolygonAmount/>
            <AutoUpload/>
          </div>
        </nav>
    );
};

export default Sidebar;