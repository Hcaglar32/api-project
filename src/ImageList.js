import React from "react";
import ImageItem from "./ImageItem";

function ImageList({ imagePlaceHolders }) {
  return (
    <div>
      {imagePlaceHolders.map((image) => {
        return (
          <ImageItem image={image} />
        )
      })}
    </div>
  )
}
export default ImageList