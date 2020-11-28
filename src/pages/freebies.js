import React, { useState } from "react";
import PictureBox from "../components/pictureBox";
import Layout from "../components/layout";
import { navigate } from "gatsby";
import freebieStyles from "./freebies.module.css";

const Freebies = () => {
  const [email, setEmail] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [download, setDownload] = useState(false);

  let downloadURL =
    process.env.NODE_ENV == "development"
      ? process.env.DOWNLOAD_SERVER_URL + "/freebies"
      : "https://cottage-core.herokuapp.com" + "/freebies";

  let emailLink =
    process.env.NODE_ENV == "development"
      ? process.env.DOWNLOAD_SERVER_URL + "/" + email
      : "https://cottage-core.herokuapp.com" + "/" + email;

  const sendEmail = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(process.env.DOWNLOAD_SERVER_URL);
    console.log(downloadURL);

    if (re.test(email)) {
      setDownload(true);

      fetch(emailLink).then((res) => {
        console.log(res);
      });
    } else {
      alert("invalid Email Address");
    }
  };

  const handleLink = () => {
    setLoaded(true);
  };

  return (
    <Layout>
      <div className="text-center p-8 pb-10">
        <h2>Cottagecore Freebies</h2>
        <p>A collection of ressources free for our cottagecore community.</p>
      </div>
      <div className="w-screen flex justify-center flex-wrap">
        <PictureBox />

        {!loaded && (
          <div className="flex flex-col mt-12 lg:mt-24 max-w-md p-8 md:ml-16">
            <p className="">
              Thank you for being part of the cottagcecore dream. To express our
              gratitude, we have created some unique GIFs for you to use on your
              stories. There are 7 GIFs and one instruction video in total.
            </p>

            {!download && (
              <div>
                <input
                  type="email"
                  placeholder="e.g. youremail@gmail.com"
                  className="  border w-full py-2 px-3 text-grey-darkest"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  className="block w-64 mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 "
                  onClick={sendEmail}
                >
                  Submit
                </button>
              </div>
            )}

            {download && (
              <a
                className={[
                  freebieStyles.loaded,
                  "text-pink-500 bg-gray-50  block w-64 shadow border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1",
                ].join(" ")}
                href={downloadURL}
                onClick={handleLink}
                download="FreebieGifs.zip"
              >
                <button>
                  <i class="fa fa-heart"></i> Download Now
                </button>
              </a>
            )}
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
              Your Free GIFs … <br /> <br />
              Have fun!
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Freebies;
