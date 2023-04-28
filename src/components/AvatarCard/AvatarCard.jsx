import React from 'react';
import ava from '../../assets/images/X(F).png'
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { BsCartPlus } from "react-icons/bs";
import './AvatarCard.css'

const AvatarCard = () => {
    return (
        <div className='col-md-3 p-1'>
            <div className="card border-0">
            <img src={ava} className="card-img-top rounded" alt="avatar"/>
            <button className="btn btn-sm btn-primary" style={{position: 'absolute', top: 5, right: 5}}><BsCartPlus/> Add</button>
            <div className="card-body">
                <h5 className="card-title">Avatar Name</h5>
                <div className="row">
                <div className="col-10">
                    <p className="card-text">Ratings</p>
                </div>
                <div className="col-2">
                    <button className="btn btn-sm heart-btn">
                        <AiOutlineHeart style={{fontSize: '1.5rem'}}/>
                    </button>
                </div>
                </div>
                <p className="card-text">Price</p>
                <p className="card-text">Short description</p>
                <button className="btn btn-sm pe-0 float-end">
                    <HiOutlineArrowUpOnSquare style={{fontSize: '2rem'}}/>
                </button>
            </div>
            </div>

        </div>
    );
};

export default AvatarCard;