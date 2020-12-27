import React from "react";
import Insta from "./instaFooter";

let styles = {
    footer: "flex w-screen",
    media: "w-1/10"
}
const Footer = () => {
  return (
      <div>
    <div className="mb-12">
      <div className="w-screen my-10">
        <h4
          className="w-max m-auto border-solid border-t border-b uppercase pt-2 pb-2"
          style={{ "font-family": "Varela Round" }}
        >
          <i style={{ fontSize: "30px" }} className="mr-2 fa fa-instagram"></i>
          cottagedream
        </h4>
      </div>
      <Insta footer={styles.footer} media={styles.media} userName="cottagecoredream" />
    </div>
    <div id="copyright">© Copyright cottagecoredream - Made by haidedang</div>
    </div>
  );
};

export default Footer;
