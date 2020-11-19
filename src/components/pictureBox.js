import React from "react";

const PictureBox = () => {
  return (
    <div className="border shadow rounded-lg text-center inline-block">
      <img
        className="inline-block"
        src="https://user-images.githubusercontent.com/23120018/99684194-75c62600-2a81-11eb-903d-2ac73329a4af.gif"
      />
      <div className="border-solid shadow-2xl p-8">
        <h1 className="text-4xl">FREE ANIMATED GIFS</h1>
        <p className="mt-1">by @cottagecoredream</p>
      </div>
    </div>
  );
};

export default PictureBox;
