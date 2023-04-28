import React from 'react';

const Price = () => {
    return (
        <>
            <h4>Price</h4>
            <input type="checkbox" name="price1"/>
            <label htmlFor="price1"> Under $10</label><br></br>
            <input type="checkbox" name="price2"/>
            <label htmlFor="price2"> $10 to $20</label><br></br>
            <input type="checkbox" name="price3"/>
            <label htmlFor="price3"> $20 to $30</label><br></br>
            <input type="checkbox" name="price4"/>
            <label htmlFor="price4"> $30 to $40</label><br></br>
            <input type="checkbox" name="price5"/>
            <label htmlFor="price5"> $40 to $50</label><br></br>
            <input type="checkbox" name="price6"/>
            <label htmlFor="price6"> $50 to $70</label><br></br>
            <input type="checkbox" name="price7"/>
            <label htmlFor="price7"> $70 and above</label><br></br>
        </>
    );
};

export default Price;