import React, { useState } from "react";
import inputStyles from "./input.module.css";

const InputField = (props) => {
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
      setLoaded(true);

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
    <div className="">
      {!loaded && (
        <div className="">
          {/* <p className="">{props.title}</p> */}
          <div>
            <input
              type="email"
              placeholder="e.g. youremail@gmail.com"
              className="  border w-full py-2 px-3 text-grey-darkest"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="block  mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 "
              onClick={sendEmail}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {loaded && (
        <div>
          <p className="text-center">
            <br /> <br />
            Have fun!
          </p>
        </div>
      )}
    </div>
  );
};

export default InputField;
