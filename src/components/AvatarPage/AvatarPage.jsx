import React from "react";
import Header from "../Header/Header";
import ava from "../../assets/images/A.png";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import jsonData from "./../../assets/data.json";
import { BsFillCartCheckFill, BsHandbag } from "react-icons/bs";

const AvatarPage = () => {
  const { avatarName } = useParams();
  const avatar = jsonData.avatars.find((ava) => ava.name === avatarName);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src={ava}
              alt="Avatar Image"
              className="img-fluid rounded-circle"
            />
            <h3 className="mt-3">{avatar.name}</h3>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <ReactStars
                  count={5}
                  value={avatar.rating}
                  isHalf={true}
                  onChange={ratingChanged}
                  size={18}
                  activeColor="#ffd700"
                />
                <div className="rating">{avatar.rating}</div>
              </div>
              <div className="price">$50</div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="likes">
                <i className="bi bi-heart-fill text-danger"></i> Likes:{" "}
                {avatar.likes}
              </div>
              <div className="gender">Male</div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="polygon-amount">
                Polygons: {avatar.polygonAmount}
              </div>
              <div className="auto-upload">
                Auto Upload Support: {avatar.autoUploadSupport ? "Yes" : "No"}{" "}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="polygon-amount">Creator Name: Joe</div>
              <div className="auto-upload">Category: Full </div>
            </div>
          </div>
          <div className="col-md-8 mt-3 mt-md-0">
            <h5>Description</h5>
            <p>{avatar.description}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              tempora error praesentium facilis fugiat nesciunt enim veniam
              libero dicta modi, rem repellendus, tenetur voluptates quibusdam
              distinctio, adipisci provident. Doloribus quo amet reprehenderit
              est quod quia fugiat aut! Earum sunt sed, velit eligendi eum unde
              nisi sequi nihil nemo suscipit distinctio nulla laudantium odit
              omnis repellat quasi fugit aut enim quos repudiandae at. Eligendi
              perferendis ipsa illo dolorum quod reiciendis corporis dignissimos
              ab aspernatur doloremque nam fuga qui est corrupti similique
              accusantium reprehenderit culpa impedit labore inventore,
              cupiditate rerum aperiam! Modi ducimus perferendis necessitatibus
              atque natus ad nulla deserunt voluptatibus inventore maxime, eum,
              saepe iusto? Distinctio minima unde dolor incidunt cupiditate
              accusantium alias fugit aspernatur quidem pariatur nostrum
              perspiciatis optio itaque repudiandae, dignissimos velit sapiente.
              Sequi rerum eos, eum ex cupiditate veritatis ut libero delectus,
              corrupti, ab neque veniam commodi et ducimus fugiat dolor
              voluptas. Nam, fuga quidem incidunt quam sint provident quibusdam
              consectetur, natus nobis placeat asperiores sit autem? Quam odit
              voluptatem minima dolorum quidem minus doloremque distinctio
              similique saepe, mollitia corporis perspiciatis alias impedit.
              Itaque, et ipsam. Non nam dolore voluptates, magni sequi aliquam,
              voluptate quaerat impedit placeat repellendus optio mollitia iste
              quod, quibusdam consequatur commodi assumenda nulla asperiores?
            </p>
            <div className="d-flex">
                    <button onClick={()=>alert("Your product is added to cart")} className="btn btn-outline-primary me-2"><BsFillCartCheckFill style={{marginBottom: '4px'}}/> Add to Cart</button>
                    <button onClick={()=>alert("Thanks for purchasing")} className="btn btn-primary"><BsHandbag style={{marginBottom: '4px'}}/> Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarPage;
