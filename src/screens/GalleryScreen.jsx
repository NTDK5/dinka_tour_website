import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import galleryImages from "../assets/galleryImages";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="gallery-title">Our Gallery</h1>
      <div className="gallery-container">
        <LightGallery plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
          {galleryImages.map((image, index) => (
            <a
              key={index}
              data-lg-size="1406-1390"
              className="gallery-item"
              data-src={image.src}
              data-sub-html="<h4>Photo by - </h4> <p> Location - Fushimi Ward, Kyoto, Japan</a></p>"
            >
              <img className="img-responsive" src={image.src} />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
