import React from "react";
import PropTypes from "prop-types";
// import tw, { styled } from "twin.macro";

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from "react-share";

//import "./index.scss";
const color = {
  facebook:
    "text-blue-400 border-blue-400 hover:bg-blue-400 hover:border-blue-400",
  twitter:
    "text-indigo-400 border-indigo-400 hover:bg-indigo-400 hover:border-indigo-400",
  googleplus:
    "text-red-500 border-red-500 hover:bg-red-500 hover:border-red-500",
  linkedin:
    "text-blue-900 border-blue-900 hover:bg-blue-900 hover:border-blue-900",
  reddit: "text-red-600 border-red-600 hover:bg-red-600 hover:border-red-600",
  whatsapp:
    "text-green-700 border-green-700 hover:bg-green-700 hover:border-green-700",
};

/* const Container = styled.div`
  ${tw`
        flex flex-wrap justify-center
    `}
`;
 */

const container = "flex flex-wrap justify-center";
const buttonStyles =
  "rounded-full border-solid pr-3 pl-3 pt-1 pb-1 hover:text-white font-bold flex items-center ml-2 space-x-3 mb-2";

export function ShareButton({ socialConfig, tags, colors = color }) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <div className={container}>
      <FacebookShareButton
        url={socialConfig.config.url}
        className={`${buttonStyles} ${color.facebook}`}
      >
        <span className="icon">
          <i style={{ fontSize: "30px" }} className="fa fa-facebook"></i>
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className={`${buttonStyles} ${color.twitter}`}
        via={socialConfig.twitterHandle.split("@").join("")}
        hashtags={tags}
      >
        <span className="icon">
          <i style={{ fontSize: "30px" }} className="fa fa-twitter"></i>
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      <LinkedinShareButton
        url={socialConfig.config.url}
        className={`${buttonStyles} ${color.linkedin}`}
        title={socialConfig.config.title}
      >
        <span className="icon">
          <i style={{ fontSize: "30px" }} className="fa fa-linkedin"></i>
        </span>
        <span className="text">LinkedIn</span>
      </LinkedinShareButton>
      <RedditShareButton
        url={socialConfig.config.url}
        className={`${buttonStyles} ${color.reddit}`}
        title={socialConfig.config.title}
      >
        <span className="icon">
          <i style={{ fontSize: "30px" }} className="fa fa-reddit"></i>
        </span>
        <span className="text">Reddit</span>
      </RedditShareButton>
      <WhatsappShareButton
        url={socialConfig.config.url}
        className={`${buttonStyles} ${color.whatsapp}`}
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
