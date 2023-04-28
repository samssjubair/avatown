import React from 'react';
import AvatarCard from '../AvatarCard/AvatarCard';

const MainContainer = () => {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
         <div className="row">
            <AvatarCard/>
            <AvatarCard/>
            <AvatarCard/>
            <AvatarCard/>
            <AvatarCard/>
            <AvatarCard/>
         </div>
        </main>
    );
};

export default MainContainer;