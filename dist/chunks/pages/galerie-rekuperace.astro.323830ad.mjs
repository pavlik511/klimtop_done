/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import ImageGallery from 'react-image-gallery';
/* empty css                                         */import { $ as $$Layout } from './404.astro.b0f4f7df.mjs';

const _20180721123035341 = "/_astro/20180721123035341.3eaec19a.JPG";

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20180721123035341
}, Symbol.toStringTag, { value: 'Module' }));

const _20231116_134954 = "/_astro/20231116_134954.22939902.jpg";

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20231116_134954
}, Symbol.toStringTag, { value: 'Module' }));

const _20231116_135053 = "/_astro/20231116_135053.0f28645a.jpg";

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20231116_135053
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_0000 = "/_astro/DSC_0000.20a90a02.jpg";

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_0000
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_1008 = "/_astro/DSC_1008.1742c2fe.JPG";

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_1008
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_1153 = "/_astro/DSC_1153.d96fab79.JPG";

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_1153
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_3168 = "/_astro/DSC_3168.622274db.JPG";

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_3168
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_3863 = "/_astro/DSC_3863.a427d2d1.JPG";

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_3863
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_4125 = "/_astro/DSC_4125.a19fd13b.JPG";

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_4125
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_4130 = "/_astro/DSC_4130.51a77cf1.JPG";

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_4130
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_4131 = "/_astro/DSC_4131.f46400f2.JPG";

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_4131
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_7127 = "/_astro/DSC_7127.94716a60.JPG";

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_7127
}, Symbol.toStringTag, { value: 'Module' }));

const DSC_7128 = "/_astro/DSC_7128.b8b3966c.JPG";

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: DSC_7128
}, Symbol.toStringTag, { value: 'Module' }));

const images = /* #__PURE__ */ Object.assign({"/src/assets/images/rekuperace/20180721123035341.JPG": __vite_glob_0_0,"/src/assets/images/rekuperace/20231116_134954.jpg": __vite_glob_0_1,"/src/assets/images/rekuperace/20231116_135053.jpg": __vite_glob_0_2,"/src/assets/images/rekuperace/DSC_0000.jpg": __vite_glob_0_3,"/src/assets/images/rekuperace/DSC_1008.JPG": __vite_glob_0_4,"/src/assets/images/rekuperace/DSC_1153.JPG": __vite_glob_0_5,"/src/assets/images/rekuperace/DSC_3168.JPG": __vite_glob_0_6,"/src/assets/images/rekuperace/DSC_3863.JPG": __vite_glob_0_7,"/src/assets/images/rekuperace/DSC_4125.JPG": __vite_glob_0_8,"/src/assets/images/rekuperace/DSC_4130.JPG": __vite_glob_0_9,"/src/assets/images/rekuperace/DSC_4131.JPG": __vite_glob_0_10,"/src/assets/images/rekuperace/DSC_7127.JPG": __vite_glob_0_11,"/src/assets/images/rekuperace/DSC_7128.JPG": __vite_glob_0_12});
const galleryImages = Object.keys(images).map((path) => ({
  original: path,
  thumbnail: path
}));
function App3() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "py-16 text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4", children: "Galerie rekuperací" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full xl:w-[60%] flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsx("div", {}),
      " ",
      /* @__PURE__ */ jsx("a", { href: "/galerie", className: "dark:text-primary-200/70 text-base sm:text-lg underline pr-5", children: "Zpět na hlavní stránku galerie" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full xl:w-[70%] p-10 rounded-lg", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium tracking-tight sm:text-2xl pb-5", children: "Rekuperace" }),
      /* @__PURE__ */ jsx(
        ImageGallery,
        {
          items: galleryImages,
          showPlayButton: true,
          slideOnThumbnailOver: true,
          showIndex: true
        }
      )
    ] })
  ] });
}

const $$Astro = createAstro();
const $$GalerieRekuperace = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalerieRekuperace;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "Galerie, klimatizace" }, { "default": ($$result2) => renderTemplate`

${renderComponent($$result2, "App3", App3, { "client:load": true, "client:component-hydration": "load", "client:component-path": "G:/Programing/dev/Astro/klimtop/testikklimtop/src/components/gallery/Galerie3.jsx", "client:component-export": "default" })}
` })}`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/galerie-rekuperace.astro", void 0);

const $$file = "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/galerie-rekuperace.astro";
const $$url = "/galerie-rekuperace";

export { $$GalerieRekuperace as default, $$file as file, $$url as url };
