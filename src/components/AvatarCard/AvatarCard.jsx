import React from "react";
import ava from "../../assets/images/A.png";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { BsCartPlus } from "react-icons/bs";
import "./AvatarCard.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const AvatarCard = ({ data }) => {
  const imagePath = "/src/assets/images/" + data.image;

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 p-1">
      <Link to={`/${data.name}`} className="no-style-link">
        <div className="card border-0">
          <img src={imagePath} className="card-img-top rounded" alt="avatar" />
          <button
            className="btn btn-sm btn-primary"
            style={{ position: "absolute", top: 5, right: 5 }}
          >
            <BsCartPlus /> Add
          </button>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
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
                <button className="btn btn-sm heart-btn pt-0">
                  <AiOutlineHeart style={{ fontSize: "1.5rem" }} />
                </button>
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
              <p className="card-text">{data.description}</p>
              <button className="btn btn-sm pe-0 float-end">
                <HiOutlineArrowUpOnSquare style={{ fontSize: "2rem" }} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AvatarCard;
