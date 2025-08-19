import React from "react";

const Image = () => {
  return (
    <div class="image-container">
      <div class="image-wrapper">
        <img class="hot-dog" src="images/hotdogs.jpg" />
      </div>
      <div class="image-wrapper">
        <img src="images/sandwich.jpg" />
      </div>
      <div class="image-wrapper">
        <img src="images/hamburger.jpg" />
      </div>
    </div>
  );
};

export default Image;
