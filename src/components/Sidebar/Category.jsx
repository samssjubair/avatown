import React, { useState } from 'react';

const Category = ({genderFilter, setGenderFilter}) => {
    const [isFullAvatar, setIsFullAvatar] = useState(false);
    const [isHumanBased, setIsHumanBased] = useState(false);
    return (
        <>
            <h4>Category</h4>
            <ul className='category-list mb-0'>
                <li onClick={()=>{setIsFullAvatar(!isFullAvatar);setGenderFilter("")}}>Full Avatar</li>
                {
                    isFullAvatar &&
                    <ul className='category-list ms-3'>
                    <li onClick={()=>{setIsHumanBased(!isHumanBased);setGenderFilter("")}}>Human based</li>
                    {
                        isHumanBased &&
                        <ul className='category-list ms-3'>
                            <li onClick={()=>setGenderFilter('male')}>Male</li>
                            <li onClick={()=>setGenderFilter('female')}>Female</li>
                        </ul>
                    }
                    {
                        isHumanBased ||
                        <>
                        <li>Animal & mythical character based</li>
                        <li>Robot based</li>
                        <li>Others</li>
                        </>
                    }
                </ul>}
                {
                    isFullAvatar ||
                    <li>Others</li>
                }
            </ul>
        </>
    );
};

export default Category;