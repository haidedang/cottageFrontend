import React from "react";

const PictureBox = () => {
  return (
    <div className=" text-center inline-block">
      <img
        style={{ width: "300px" }}
        src="https://user-images.githubusercontent.com/23120018/99684194-75c62600-2a81-11eb-903d-2ac73329a4af.gif"
      />
      <div className="text-left shadow-lg p-4 mt-8">
        <h1 className="text-4xl mb-0 mt-3">FREE ANIMATED GIFS</h1>
        <p className="m-0">by @cottagecoredream</p>
      </div>
    </div>
  );
};

export default PictureBox;
