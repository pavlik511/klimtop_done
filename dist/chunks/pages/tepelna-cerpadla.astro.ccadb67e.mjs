/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.b0f4f7df.mjs';

const $$Astro$1 = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20 tracking-wide">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <h2 class="text-3xl font-medium sm:text-4xl underline decoration-red decoration-4 underline-offset-4">Tepelná čerpadla</h2>
        <div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
          <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
            <b><u><a href="https://www.toshiba-aircondition.com/cz/uvodni-stranka.html">Toshiba Corporation</a></u></b> používá nejmodernější technologie a&nbsp;vysoce kvalitní komponenty, s&nbsp;důrazem na kvalitu výroby každého jednotlivého zařízení. Své produkty vyrábí Toshiba od roku 1975 v&nbsptovárnách v&nbsp;Japonsku a&nbsp;Thajsku. Oba výrobní závody jsou držiteli certifikátu mezinárodního standardu kvality ISO 14001. Všechna zařízení splňují normy EU, což je deklarováno označením CE, které je uvedeno na typovém štítku každého výrobku. Samozřejmostí je plnění direktivy 2002/95/EU (ROHS) zakazující použití nebezpečných látek v&nbsp;elektrických a&nbsp;elektronických výrobcích. Technické údaje odpovídají mezinárodní normě EUROVENT, která slouží jako ochrana zákazníka a&nbsp;dokladuje korektnost měřených a&nbsp;uvedených údajů. Kvalitě zařízení můžete plně důvěřovat – je sledována od výroby až po konečnou montáž zařízení odbornými autorizovanými firmami.
          </p>
          
        </div>
        
        
      </div>
    </div>
  </section>

  <section class="pb-16 sm:py-20 tracking-wide">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <h2 class="text-3xl font-medium sm:text-4xl underline decoration-red decoration-4 underline-offset-4">Princip tepelných čerpadel
        </h2>
        <div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
          <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg pb-10">
            Tepelné čerpadlo pracuje ve svém principu jako chladící zařízení, jehož hnacím prvem je kompresor poháněný zpravidla elektromotorem. Zařízení odvádí v&nbsp;prvním výměníku (výparníku) teplo z&nbspprostředí s&nbsp;nižší teplotou (např. z&nbsp;okolního vzduchu nebo ze země) – tím prostředí ochlazuje – a&nbsp;pomocí hnací elektrické energie ho předává ve druhém výměníku (kondenzátoru) do prostředí s&nbspvyšší teplotou (např. do topné vody) – tím prostředí ohřívá.
            Teplo převáděné z&nbsp;výparníku do kondenzátoru se přitom zvětšuje o&nbsp;teplo, na které se v kompresoru mění hnací elektrická energie. Převod tepla v tepelném čerpadle se uskutečňuje pomocí pracovní látky, tzv. chladiva, které v&nbsp;zařízení trvale obíhá a&nbsp;cyklicky mění své skupenství. Přiváděným nízkopotenciálním teplem se ve výparníku při sacím tlaku kompresoru vypařuje, teplem odváděným v&nbsp;kondenzátoru pro vytápění při výtlačném tlaku kompresoru kondenzuje. Převod a&nbsp;stlačování par z&nbsp;výparníku do kondenzátoru zajišťuje kompresor.
            Převod kapalného chladiva z&nbsp;kondenzátoru do výparníku zajišťuje vhodný expanzní ventil.
          </p>
          <img class="mx-auto duration-500 hover:scale-110 cursor-pointer" width="700" height="500" src="/assets/cerpadloObrUpr.png" alt="obrázek principu tepelného čerpadla">
          
         
        </div>
        
        
      </div>
   
    </div>
   
  </section>`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/components/heatpump/Info.astro", void 0);

const $$Astro = createAstro();
const $$TepelnaCerpadla = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TepelnaCerpadla;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "Tepeln\xE1 \u010Darpadla" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "About", $$Info, {})}
 
` })}`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/tepelna-cerpadla.astro", void 0);

const $$file = "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/tepelna-cerpadla.astro";
const $$url = "/tepelna-cerpadla";

export { $$TepelnaCerpadla as default, $$file as file, $$url as url };
