import React from "react";

const LinkComponent = ({ id, name, image, route }) => {
  return (
    <div className="link-to-social">
      <img src={image} />
    </div>
  );
};

export default LinkComponent;
