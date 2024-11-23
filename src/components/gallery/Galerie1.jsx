// src/components/App.jsx
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import img1 from "/src/assets/images/klimatizace/20140423_143324.jpg"
import img2 from "/src/assets/images/klimatizace/20150302_104046.jpg"
import img3 from "/src/assets/images/klimatizace/20150618_135249.jpg"
import img4 from "/src/assets/images/klimatizace/20230118_135037.jpg"



const galleryImages = [
  { original: img1, thumbnail: img1 },
  { original: img2, thumbnail: img2 },
  { original: img3, thumbnail: img3 },
  { original: img4, thumbnail: img4 },

  // Přidej další obrázky sem
];

const App = () => {
  return (
    <div className="flex flex-col place-items-center">
      <h2 className="py-16 text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4">
    Galerie klimatizací
</h2>
<div className="w-full xl:w-[60%] flex justify-between items-center mb-4">
        <div></div> {/* Ponecháme prázdný div pro vyrovnání */}
        <a href="/galerie" className="dark:text-primary-200/70 text-base sm:text-lg underline">
          Zpět na hlavní stránku galerie
        </a>
      </div>
      <div className="w-full xl:w-[60%] p-10 rounded-lg">
        <h3 className="text-2xl font-medium tracking-tight sm:text-2xl pb-5">Klimatizace</h3>
        <ImageGallery
          items={galleryImages}
          showPlayButton={true}
          slideOnThumbnailOver={true}
          showIndex={true}
        />
      </div>
     
    </div>
  );
}
export default App;

