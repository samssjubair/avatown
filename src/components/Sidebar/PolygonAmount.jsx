import React from 'react';

const PolygonAmount = () => {
    return (
        <>
            <h4>Polygon Amount</h4>
            <input type="checkbox" name="polygon1"/>
            <label htmlFor="polygon1"> Under △7,500</label><br></br>
            <input type="checkbox" name="polygon2"/>
            <label htmlFor="polygon2"> △7,500 to △10,000</label><br></br>
            <input type="checkbox" name="polygon3"/>
            <label htmlFor="polygon3"> △10,000 to △15,000</label><br></br>
            <input type="checkbox" name="polygon4"/>
            <label htmlFor="polygon4"> △15,000 to △20,000</label><br></br>
            <input type="checkbox" name="polygon5"/>
            <label htmlFor="polygon5"> △20,000 to △32,000</label><br></br>
            <input type="checkbox" name="polygon6"/>
            <label htmlFor="polygon6"> △32,000 to △70,000 </label><br></br>
            <input type="checkbox" name="polygon7"/>
            <label htmlFor="polygon7"> △70,000 and above</label><br></br>
        </>
    );
};

export default PolygonAmount;