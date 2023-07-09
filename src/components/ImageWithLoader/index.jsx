import cn from "classnames";
import React, { useState } from "react";
import { Bars } from "react-loader-spinner";

import "./styles.css";

const ImageWithLoader = ({ alt, src, className }) => {
  const [isImageloaded, setIsImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);

  const onError = () => {
    setIsImageError(true);
    setIsImageLoaded(false);
  };

  return (
    <div className={cn("cnImageWithLoaderRoot", className)}>
      {!isImageloaded && (
        <div className="cnImageWithLoaderWrapper">
          {isImageError ? (
            "error"
          ) : (
            <Bars width={15} height={15} color="#000BFF" />
          )}
        </div>
      )}
      <img
        className={cn(
          "cnImageWithLoaderImg",
          isImageloaded && "cnImageWithLoaderImgLoaded"
        )}
        src={src}
        alt={alt}
        onLoad={() => setIsImageLoaded(true)}
        onError={() => onError()}
      />
    </div>
  );
};

export default ImageWithLoader;
