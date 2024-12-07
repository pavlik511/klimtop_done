/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.b0f4f7df.mjs';

const $$Astro$1 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center text-center space-y-6">
    <h2 class="pt-16 text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4">
      Galerie
    </h2>
    <p class="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl max-w-lg px-4 pt-4">
      Zde najdete čtyři galerie, které představují naši práci v&nbsp;oblasti klimatizace, podlahového topení, rekuperace a&nbsp;tepelných čerpadel. Prohlédněte si jednotlivé galerie a&nbsp;objevte více o&nbsp;našich řešeních.
    </p>
    <div class="pt-10 px-5">
      <nav>
        <div>
          <ul>
            <li class="mb-8 rounded-2xl bg-blue dark:bg-primary-400 hover:bg-blue2 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 text-black">
              <a href="/galerie-klimatizace" class="block p-8 sm:text-2xl text-blue-500 hover:text-blue-700 font-semibold transition-all">
                Galerie 1 – Klimatizace
              </a>
            </li>
            <li class="mb-8 rounded-2xl bg-red hover:bg-red2 text-white dark:bg-primary-400/10 dark:hover:bg-primary-600">
              <a href="/galerie-podlahove-topeni" class="block p-8 sm:text-2xl text-blue-500 hover:text-blue-700 font-semibold transition-all">
                Galerie 2 – Podlahové topení
              </a>
            </li>
            <li class="mb-8 rounded-2xl bg-blue dark:bg-primary-400 hover:bg-blue2 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 text-black">
              <a href="/galerie-rekuperace" class="block p-8 sm:text-2xl text-blue-500 hover:text-blue-700 font-semibold transition-all">
                Galerie 3 – Rekuperace
              </a>
            </li>
            <li class=" rounded-2xl bg-red hover:bg-red2 text-white dark:bg-primary-400/10 dark:hover:bg-primary-600">
              <a href="/galerie-tepelna-cerpadla" class="block mb-10 p-8 sm:text-2xl text-blue-500 hover:text-blue-700 font-semibold transition-all">
                Galerie 4 – Tepelná čerpadla
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</div>`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/components/gallery/Navigation.astro", void 0);

const $$Astro = createAstro();
const $$Galerie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galerie;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace & Tepeln\xE1 \u010Derpadla Jirout", "title": "Galerie" }, { "default": ($$result2) => renderTemplate`
${renderComponent($$result2, "Navigation", $$Navigation, {})}
  
  
` })}`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/galerie.astro", void 0);

const $$file = "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/galerie.astro";
const $$url = "/galerie";

export { $$Galerie as default, $$file as file, $$url as url };
