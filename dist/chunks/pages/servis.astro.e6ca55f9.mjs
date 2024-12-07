/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.b0f4f7df.mjs';

const $$Astro$1 = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Info;
  const values = [
    [
      {
        ref: "01",
        name: "Servis chlad\xEDc\xEDch a klimatiza\u010Dn\xEDch za\u0159\xEDzen\xED",
        description: "P\u0159i pravideln\xE9m servisu se p\u0159edch\xE1z\xED \u010Dast\xFDm z\xE1vad\xE1m zp\u016Fsoben\xFDm zane\u0161en\xEDm filtr\u016F,\npo vy\u010Di\u0161t\u011Bn\xED v\xFDparn\xEDk\u016F a kondenz\xE1tor\u016F se zlep\u0161uje \xFA\u010Dinnost a sni\u017Euje spot\u0159eba elektrick\xE9 energie,\np\u0159edch\xE1z\xED se mo\u017Enostem \xFAniku chladiva ze syst\xE9mu,\nkontroluje se stav lo\u017Eisek ventil\xE1tor\u016F,\nkontroluj\xED se extern\xED \u010Derpadla kondenz\xE1tu."
      },
      {
        ref: "02",
        name: "Servis vnit\u0159n\xEDch klimatiza\u010Dn\xEDch jednotek",
        name2: "Kompletn\xED vy\u010Di\u0161t\u011Bn\xED: ",
        description: "Prachov\xFDch filtr\u016F, \nv\xFDm\u011Bn\xEDku chladiva,\nlopatek ventil\xE1toru,\nodpadn\xED vany kondenz\xE1tu,\nextern\xED plov\xE1kov\xE9 komory \u010Derpadla kondenz\xE1tu,\ncelkov\xE9 povrchov\xE9 \u010Di\u0161t\u011Bn\xED jednotky.\nzji\u0161t\u011Bn\xED stavu lo\u017Eisek u ventil\xE1toru,\nm\u011B\u0159en\xED provozn\xEDch teplot,\nkontrola elektrick\xE9 \u010D\xE1sti za\u0159\xEDzen\xED,\nkontrola ve\u0161ker\xFDch mo\u017En\xFDch funkc\xED dan\xE9ho za\u0159\xEDzen\xED.",
        name3: "Zji\u0161t\u011Bn\xED stavu lo\u017Eisek u ventil\xE1toru: ",
        description2: "M\u011B\u0159en\xED provozn\xEDch teplot,\nkontrola elektrick\xE9 \u010D\xE1sti za\u0159\xEDzen\xED,\nkontrola ve\u0161ker\xFDch mo\u017En\xFDch funkc\xED dan\xE9ho za\u0159\xEDzen\xED."
      }
    ],
    [
      {
        ref: "03",
        name: "Servis venkovn\xED klimatiza\u010Dn\xED jednotky",
        description: "Chemick\xE9 a tlakov\xE9 \u010D\xED\u0161t\u011Bn\xED kondenz\xE1toru, ventil\xE1toru a opl\xE1\u0161t\u011Bn\xED za\u0159\xEDzen\xED\nm\u011B\u0159en\xED provozn\xEDch tlak\u016F chladiva a kontrola mno\u017Estv\xED v syst\xE9mu,\nkontrola odb\u011Bru proudu kompresoru a cel\xE9ho za\u0159\xEDzen\xED p\u0159i z\xE1t\u011B\u017Ei,\nkontrola elektroinstalace, teplotn\xEDch \u010Didel, tlakov\xFDch a proudov\xFDch ochran za\u0159\xEDzen\xED,\nkontrola t\u011Bsnosti spoj\u016F za\u0159\xEDzen\xED,\nkontrola celkov\xE9ho chodu za\u0159\xEDzen\xED."
      },
      {
        ref: "04",
        name: "Profesion\xE1ln\xED Poradenstv\xED",
        description: "Ch\xE1peme, \u017Ee ka\u017Ed\xFD projekt je jedine\u010Dn\xFD. Proto v\xE1m poskytneme individu\xE1ln\xED poradenstv\xED, kter\xE9 odpov\xEDd\xE1 va\u0161im pot\u0159eb\xE1m a p\u0159edstav\xE1m."
      }
    ]
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20 tracking-wider">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-8 lg:gap-12">
      <h2 class="text-3xl font-medium sm:text-4xl underline decoration-red decoration-4 underline-offset-4">Servis, možnosti</h2>
      <h4 class="text-xl font-light sm:text-xl">Proč je důležité provádět pravidelný servis zařízení?</h4>
      <div class="grid gap-8 lg:grid-cols-2">
        ${values.map((column, index) => renderTemplate`<div${addAttribute(["space-y-8", index === 1 && "lg:mt-16"], "class:list")}>
              ${column.map((value) => renderTemplate`<div class="bg-red dark:bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8 duration-500 hover:scale-105 cursor-pointer">
                  <p class="text-2xl font-bold text-white">${value.ref}</p>
                  <div class="flex flex-col gap-4">
                    <h3 class="text-2xl font-medium text-white">${value.name}</h3>
                    ${value.name2 && renderTemplate`<h3 class="text-xl font-medium text-white">${value.name2}</h3>`}
                    
                    <p class="text-white dark:text-primary-200/70 text-base sm:text-lg px-5">
                      ${value.description.split("\n").map((line, idx) => renderTemplate`<span${addAttribute(idx, "key")}>
                          ${line}
                          ${idx < value.description.split("\n").length - 1 && renderTemplate`<br>`}
                        </span>`)}
                    </p>
                    ${value.name3 && renderTemplate`<h3 class="text-xl font-medium text-white">${value.name3}</h3>`}
                    ${value.description2 && renderTemplate`<p class="text-white dark:text-primary-200/70 text-base sm:text-lg px-5">
                        ${value.description2.split("\n").map((line, idx) => renderTemplate`<span${addAttribute(idx, "key")}>
                            ${line}
                            ${idx < value.description2.split("\n").length - 1 && renderTemplate`<br>`}
                          </span>`)}
                      </p>`}
                  </div>
                </div>`)}
            </div>`)}
      </div>
    </div>
  </div>
</section>
 

   <!--<img
          class="mb-20 h-full w-full rounded-3xl mx-auto"
          width="1280"
          height="640"
          src="/assets/klima.jpg"
          alt="obrazek, servis kliamtizace"
        /> -->`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/components/servis/Info.astro", void 0);

const $$Astro = createAstro();
const $$Servis = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servis;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "Servis" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "About", $$Info, {})}
 
` })}`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/servis.astro", void 0);

const $$file = "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/servis.astro";
const $$url = "/servis";

export { $$Servis as default, $$file as file, $$url as url };
