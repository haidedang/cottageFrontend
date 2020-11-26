import { withEmotionCache } from "@emotion/core";
import React, { useState } from "react";
import scrollArrowStyles from "./index.module.css";

export const ScrollArrow = () => {
  if (typeof window !== "undefined") {
    const [showScroll, setShowScroll] = useState(true);

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    const scrollTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollTop);
        window.scrollTo(0, c - c / 10);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return (
      <i
        onClick={scrollTop}
        style={{
          display: showScroll ? "flex" : "none",
          color: "rgb(255, 179, 179)",
        }}
        className={[
          scrollArrowStyles.scrollTop,
          `fa fa-arrow-circle-up text-5xl fixed bottom-0 right-0 pr-3 pb-3 md:pr-14 md:pb-14`,
        ].join(" ")}
      ></i>
    );
  } else {
    return <div></div>;
  }
};
