import React from "react";
import image from "./profilphoto.jpg"
const Profilphoto =()  => {
  let style = {
    margin: "10px 5px 0px 5px"
  };

  return <img src={image} style={style} />;
};

export default Profilphoto;