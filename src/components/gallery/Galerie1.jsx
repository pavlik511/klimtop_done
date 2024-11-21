// src/components/App.jsx
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Načte všechny obrázky ze složky src/images/klimatizace
const images = import.meta.glob("/public/assets/images/klimatizace/*.{jpg,jpeg,png,JPG}");

// Převede načtené obrázky na formát vhodný pro ImageGallery
const galleryImages = Object.keys(images).map((path) => ({
  
  original: path,
  thumbnail: path,
}));

function App() {
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
