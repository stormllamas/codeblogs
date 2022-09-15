import React from "react";
import { TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb";
import { TiSocialFacebookCircular } from "react-icons/ti";
import MePortraitBackground from "../../static/img/meportrait-edited.png";
import Button from "../items/Button";

const HomeCover = () => {
  return (
    <div className="home-cover">
      <div className="container l-container pt-3">
        <div className="home-cover-text">
          <h4 className="text-red">Something here</h4>
          <h4 className="text-red mb-3">More stuff here</h4>
          <h1 className="main-text mb-3">Hi! I'm Storm Llamas</h1>
          <p className="sub-text mb-4">
            Currently, I work at Cognizant Softvision - Manila, Philippines as a
            Senior Developer
          </p>
          <Button color="#FF4E4E">Find Out More</Button>
        </div>
        <div className="home-cover-social">
          <a href="#facebook">
            <TiSocialFacebookCircular
              size={40}
              color="#FF4E4E"
              className="mr-3"
            />
          </a>
          <a href="#linkedin">
            <TbBrandLinkedin size={40} color="#FF4E4E" className="mr-3" />
          </a>
          <a href="#instagram">
            <TbBrandInstagram size={40} color="#FF4E4E" />
          </a>
        </div>
        <div
          className="home-cover-img"
          style={{
            backgroundImage: `url(${MePortraitBackground})`,
          }}
        />
      </div>
    </div>
  );
};

export default HomeCover;
