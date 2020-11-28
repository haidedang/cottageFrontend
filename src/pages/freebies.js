import React, { useState } from "react";
import PictureBox from "../components/pictureBox";
import Layout from "../components/layout";
import { navigate } from "gatsby";
import freebieStyles from "./freebies.module.css";

const Freebies = () => {
  const [email, setEmail] = useState("");
  const [loaded, setLoaded] = useState(false);

  const download = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(process.env.DOWNLOAD_SERVER_URL);
    let downloadURL =
      process.env.NODE_ENV == "development"
        ? process.env.DOWNLOAD_SERVER_URL
        : "https://cottage-core.herokuapp.com" + "/freebies/" + email;
    console.log(downloadURL);

    if (re.test(email)) {
      setLoaded(true);

      fetch(downloadURL).then((res) => {
        console.log(res);
      });
    } else {
      alert("invalid Email Address");
    }
  };

  return (
    <Layout>
      <div className="text-center p-8 pb-10">
        <h2>Cottagecore Freebies</h2>
        <p>A collection of ressources free for our Cottagecore community.</p>
      </div>
      <div className="w-screen flex justify-center flex-wrap">
        <PictureBox />

        {!loaded && (
          <div className="flex flex-col mt-12 lg:mt-24 max-w-md p-8 md:ml-16">
            <p>
              Thank you for being part of our cottagcecore community. To express
              our gratitude, we have created some unique GIFS for you to use on
              your stories. There are 6 GIFS in total. Add your email adress in
              the box below and we will send you the download link. Please check
              your spam inbox in case you cannot find our email. We can’t wait
              to see the GIFs in your stories!
            </p>
            <input
              type="email"
              placeholder="e.g. youremail@gmail.com"
              className="  border  py-2 px-3 text-grey-darkest"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="block w-64 mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              onClick={download}
            >
              DOWNLOAD
            </button>
          </div>
        )}

        {loaded && (
          <div
            className={[
              freebieStyles.loaded,
              "flex flex-col mt-12 lg:mt-24 max-w-md p-8 md:ml-16",
            ].join(" ")}
          >
            <p>
              We have sent you an email with the download Link. It should arrive
              soon. Thank you :)
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Freebies;
