import React from "react";
import PropTypes from "prop-types";

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from "react-share";

//import "./index.scss";
const colors = {
  facebook: "blue-400",
  twitter: "indigo-500",
  googleplus: "red-500",
  linkedin: "blue-900",
  reddit: "red-600",
  whatsapp: "green-700",
};

const button = (social) => {
  return `text-${colors[social]} border-solid border-${
    colors[social]
  } rounded-full pr-3 pl-3 pt-1 pb-1 hover:bg-${colors[social]} hover:border-${[
    social,
  ]} hover:text-white font-bold flex items-center ml-2  space-x-3 mb-2 `;
};

export function ShareButton({ socialConfig, tags }) {
  return (
    <div className="flex flex-wrap justify-center">
      <FacebookShareButton
        url={socialConfig.config.url}
        className={button("facebook")}
      >
        <span className="icon">
          <i style={{ fontSize: "30px" }} className="fa fa-facebook"></i>
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className={button("twitter")}
        title={socialConfig.config.title}
        via={socialConfig.twitterHandle.split("@").join("")}
        hashtags={tags}
      >
        <span className="icon">
          <i style={{ fontSize: "30px" }} className="fa fa-twitter"></i>
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      {/*  <GooglePlusShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded googleplus"
      >
        <span className="icon">
          <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
        </span>
        <span className="text">Google+</span>
      </GooglePlusShareButton> */}
      <LinkedinShareButton
        url={socialConfig.config.url}
        className={button("linkedin")}
        title={socialConfig.config.title}
      >
        <span className="icon">
          <i style={{ fontSize: "30px" }} className="fa fa-linkedin"></i>
        </span>
        <span className="text">LinkedIn</span>
      </LinkedinShareButton>
      <RedditShareButton
        url={socialConfig.config.url}
        className={button("reddit")}
        title={socialConfig.config.title}
      >
        <span className="icon">
          <i style={{ fontSize: "30px" }} className="fa fa-reddit"></i>
        </span>
        <span className="text">Reddit</span>
      </RedditShareButton>
      <WhatsappShareButton
        url={socialConfig.config.url}
        className={button("whatsapp")}
        title={socialConfig.config.title}
      >
        <span className="icon">
          <i style={{ fontSize: "30px" }} className="fa fa-whatsapp"></i>
        </span>
        <span className="text">WhatsApp</span>
      </WhatsappShareButton>
    </div>
  );
}
