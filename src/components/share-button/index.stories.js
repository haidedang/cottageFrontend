import React from "react";
import { ShareButton } from ".";

export default {
  title: "Component/ShareButton",
  component: ShareButton,
};

export const renders = () => (
  <ShareButton
    socialConfig={{
      twitterHandle: "@haidedang",
      config: {
        url: "http://google.com",
        title: "coolio",
      },
    }}
    tags={["cool", "nice"]}
  />
);
