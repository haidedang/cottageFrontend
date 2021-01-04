export const sendEmail = (email) => {
  let downloadURL =
    process.env.NODE_ENV == "development"
      ? process.env.DOWNLOAD_SERVER_URL + "/freebies"
      : "https://cottage-core.herokuapp.com" + "/freebies";

  let emailLink =
    process.env.NODE_ENV == "development"
      ? process.env.DOWNLOAD_SERVER_URL + "/" + email
      : "https://cottage-core.herokuapp.com" + "/" + email;

  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  console.log(process.env.DOWNLOAD_SERVER_URL);
  console.log(downloadURL);
  console.log(emailLink);
  if (re.test(email)) {
    //setLoaded(true);

    fetch(emailLink).then((res) => {
      console.log(res);
    });
  } else {
    alert("invalid Email Address");
  }
};
