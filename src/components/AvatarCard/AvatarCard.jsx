import React, { useState } from "react";
import ava from "../../assets/images/A.png";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import "./AvatarCard.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Heart from "react-heart"



const AvatarCard = ({ data, cartCount, setCartCount }) => {
    const [isClick, setClick] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  

  const handlePopupClick = () => {
    // console.log(window.location.href)
    navigator.clipboard.writeText(window.location.href + data.name);
    setIsPopupOpen(false);
  };
    
  const imagePath = "/src/assets/images/" + data.image;

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const handleLinkClick = () => {
    // handle link click event
    console.log("link clicked")
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 p-1">
      {/* <Link  onClick={handleLinkClick} className="no-style-link"> */}
        <div className="card border-0">
          <img src={imagePath} className="card-img-top rounded" alt="avatar" />
          <button
            onClick={() => setCartCount(cartCount + 1)}
            className="btn btn-sm btn-primary"
            style={{ position: "absolute", top: 5, right: 5 }}
          >
            <BsCartPlus /> Add
          </button>
          <div className="card-body">
            <Link to={`/${data.name}`} onClick={handleLinkClick} className="no-style-link">
                <h5 className="card-title">{data.name}</h5>
            </Link>
            <div className="row">
              <div className="col-10 d-flex">
                <ReactStars
                  count={5}
                  value={data.rating}
                  isHalf={true}
                  onChange={ratingChanged}
                  size={18}
                  activeColor="#ffd700"
                />

                <p className="card-text">
                  {data.rating} & {data.likes} likes
                </p>
              </div>
              <div className="col-2">
                <Heart isActive={isClick} onClick={()=>setClick(!isClick)} animationTrigger='hover'/>
              </div>
            </div>
            <div>
              <img
                src={ava}
                alt="avatar"
                className="rounded-circle ava-creator me-1"
              />
              <span className="creator-name">Avatar Joe's</span>
            </div>

            <p className="card-text fs-4 mb-1">
              <small>$</small>
              {data.price}
            </p>
            <div className="d-flex">
              <div className="content-indicator"></div>
              <p>PC Only</p>
            </div>
            <div className="d-flex">
            <Link to={`/${data.name}`} onClick={handleLinkClick} className="no-style-link">
                <p className="card-text">{data.description}</p>
            </Link>
              
              <button className="btn btn-sm pe-0 float-end">
                <div>
                {isPopupOpen && (
                    <div className="popup" onClick={handlePopupClick}>
                    <AiOutlinePaperClip/>
                    Copy link
                    </div>
                )}
                </div>
                <HiOutlineArrowUpOnSquare onClick={()=>setIsPopupOpen(!isPopupOpen)} style={{ fontSize: "2rem" }} />
                
              </button>
            </div>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default AvatarCard;
