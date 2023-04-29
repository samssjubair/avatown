import React from 'react';

const AutoUpload = () => {
    return (
        <>
            <h4 style={{fontSize: '22px'}}>Auto Upload Support</h4>
            <input type="checkbox" name="auto1"/>
            <label htmlFor="auto1"> Supported</label><br></br>
            <input type="checkbox" name="auto2"/>
            <label htmlFor="auto2"> Unsupported</label><br></br>
        </>
    );
};

export default AutoUpload;