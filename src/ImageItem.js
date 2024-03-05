import React from "react";

function ImageItem({image}){
  console.log(image);
return(
  <div>
    <img src={image.urls.small}/>
  </div>
)
}

export default ImageItem