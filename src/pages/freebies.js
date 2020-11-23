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
        <div className="flex flex-col mt-12 lg:mt-48 max-w-md p-8 md:ml-16">
          <p>
            We teamed up with the talented Caroline to create some unique GIFS
            for you to use on your stories. There are 6 GIFS in total. TRAVEL,
            LOVE, POSITIVITY
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
