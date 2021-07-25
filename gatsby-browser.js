//import addScript from './src/utils/addScript'
import "./src/components/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";

const addScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.src = url;
    script.async = false;

    document.body.appendChild(script);
    resolve();
  });
};

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://code.jquery.com/jquery-3.2.1.slim.min.js")
      .then(() => {
        addScript(
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        );
      })
      .then(() => {
        addScript("https://use.fontawesome.com/fd3246bf26.js");
      })
      .then(() => {
        addScript(
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        );
      })
      .then(() => {
        // addScript("https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js")
      })
      .then(() => {
        /*  addScript("/js/mount.js") ; */
      });
  };
};

export function onServiceWorkerUpdateReady(){window.location.reload(true)};

