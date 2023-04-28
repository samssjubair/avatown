import React from 'react';

const Content = () => {
    return (
        <>
            <h4>Content</h4>
            <input type="checkbox" name="content1"/>
            <label htmlFor="content1"> VRChat(Quest)</label><br></br>
            <input type="checkbox" name="content2"/>
            <label htmlFor="content2"> VRChat(PCVR)</label><br></br>
            <input type="checkbox" name="content3"/>
            <label htmlFor="content3"> Others</label><br></br>
        </>
    );
};

export default Content;