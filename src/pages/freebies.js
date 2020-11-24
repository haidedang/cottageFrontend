import React from "react";
import PictureBox from "../components/pictureBox";
import Layout from "../components/layout";
import { navigate } from "gatsby";

const Freebies = () => {
  /* const download = () => {
    fetch("https://cottage-core.herokuapp.com/freebies")
      .then((res) => {
        console.log(res);
        return res.blob();
      })
      .then(function (blob) {
        navigate("/");
      });
  };
 */
  return (
    <Layout>
      <div className="text-center p-8 pb-10">
        <h2>Cottagecore Freebies</h2>
        <p>A collection of ressources free for our Cottagecore community.</p>
      </div>
      <div className="w-screen flex justify-center flex-wrap">
        <PictureBox />
        <div className="flex flex-col mt-12 lg:mt-24 max-w-md p-8 md:ml-16">
          <p>
            Thank you for being part of our cottagcecore community. To express
            our gratitude, we have created some unique GIFS for you to use on
            your stories. There are 6 GIFS in total. Add your email adress in
            the box below and we will send you the download link. Please check
            your spam inbox in case you cannot find our email. We can’t wait to
            see the GIFs in your stories!
          </p>
          <input
            placeholder="Your email"
            className="  border  py-2 px-3 text-grey-darkest"
          />
          <button
            className="block w-64 mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            /* onClick={download} */
          >
            <a
              className="no-underline text-white"
              href="https://cottage-core.herokuapp.com/freebies"
              download="FreebieGifs.rar"
            >
              DOWNLOAD
            </a>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Freebies;
