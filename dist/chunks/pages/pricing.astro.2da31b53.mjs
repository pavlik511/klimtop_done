/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.b0f4f7df.mjs';

const $$Astro$4 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10">
      <div class="flex flex-col gap-4 sm:gap-6">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Still have questions?</h2>
        <p class="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-2xl text-lg">
          Please describe your case to receive the most accurate advice.
        </p>
      </div>
      <a href="/contact" class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Contact Us
      </a>
    </div>
  </div>
</section>`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/components/pricing/Cta.astro", void 0);

const $$Astro$3 = createAstro();
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Faq;
  const questions = [
    {
      id: "faq-1",
      title: "How do I know which pricing plan is right for me?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
    },
    {
      id: "faq-2",
      title: "How can I upgrade, downgrade, or cancel my plan?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
    },
    {
      id: "faq-3",
      title: "What does 'lifetime access' mean exactly?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
    },
    {
      id: "faq-4",
      title: "What does 'free updates' mean exactly?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
    },
    {
      id: "faq-5",
      title: "Do you offer a free trial?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
    },
    {
      id: "faq-6",
      title: "How can I request support?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
      <div>
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Frequently asked questions</h2>
      </div>
      <div class="lg:col-span-2">
        <dl class="-mt-3" x-data="{ selected: null, toggle(value) { this.selected = this.selected === value ? null : value } }">
          ${questions.map((question, index) => renderTemplate`<div class="rounded-3xl px-4 transition"${addAttribute(`{ id: ${index}, get isOpen() { return this.id === this.selected }, get isNextOpen() { return (this.id + 1) === this.selected } }`, "x-data")} x-bind:class="{ 'bg-primary-500/10 dark:bg-primary-400/10': isOpen }">
                <dt class="border-b text-lg transition" x-cloak x-bind:class="{ 'border-transparent': isOpen || isNextOpen, 'border-primary-900/10 dark:border-primary-300/10': !(isOpen || isNextOpen) }">
                  <button type="button" class="group block w-full py-6 text-left transition focus-visible:outline-none"${addAttribute(question.id, "aria-controls")} x-on:click="toggle(id)" aria-expanded="false" x-bind:aria-expanded="isOpen.toString()">
                    <div class="group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2">
                      <span class="font-medium">${question.title}</span>
                      <span class="ml-6 flex h-7 items-center">
                        <svg class="text-primary-600 dark:text-primary-400 h-6 w-6 rotate-0 transform transition duration-200 ease-in-out" x-bind:class="{ '-rotate-180': isOpen, 'rotate-0': !isOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                </dt>
                <dd class="pb-6 pr-6"${addAttribute(question.id, "id")} x-show="isOpen" x-cloak x-collapse>
                  <p class="text-primary-950/70 dark:text-primary-200/70 text-base">
                    ${question.answer}
                  </p>
                </dd>
              </div>`)}
        </dl>
      </div>
    </div>
  </div>
</section>`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/components/pricing/Faq.astro", void 0);

const $$Astro$2 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-4 sm:gap-6">
      <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">Pricing</h1>
      <p class="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-xl text-lg sm:text-xl">
        Choose the plan that best suits your needs.
      </p>
    </div>
  </div>
</section>`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/components/pricing/Heading.astro", void 0);

const $$Astro$1 = createAstro();
const $$PricingTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PricingTable;
  const pricing = [
    {
      name: "Basic",
      description: "For development, staging, and small production projects.",
      periodicity: "/month",
      price: "$10",
      action: "Buy Now",
      features: ["5 Seats", "1,000 Projects", "Lifetime access", "Community Support"]
    },
    {
      name: "Pro",
      description: "For high-scale and mission critical projects.",
      isFlagged: true,
      periodicity: "/month",
      price: "$25",
      action: "Buy Now",
      features: ["10 Seats", "10,000 Projects", "Lifetime access", "Email Support", "Free updates"]
    },
    {
      name: "Team",
      description: "For teams with more security, support, and performance needs.",
      periodicity: "",
      price: "Custom",
      action: "Buy Now",
      features: [
        "Unlimited Seats",
        "Unlimited Projects",
        "Lifetime access",
        "Email and Chat Support",
        "High-Performance",
        "Free updates"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="-mt-8 grid gap-8 lg:mt-0 lg:grid-cols-3">
      ${pricing.map((item) => renderTemplate`<div${addAttribute([
    "relative flex flex-col gap-8 rounded-3xl p-8",
    item.isFlagged && "bg-primary-500/10 dark:bg-primary-400/10"
  ], "class:list")}>
            <div class="flex-1">
              <h2 class="text-xl font-medium">${item.name}</h2>
              <p class="mt-4 flex items-baseline">
                <span class="text-4xl font-medium tracking-tight">${item.price}</span>
                <span class="text-primary-950/70 dark:text-primary-200/70 ml-1 text-sm font-medium">
                  ${item.periodicity}
                </span>
              </p>
              <p class="text-primary-950/70 dark:text-primary-200/70 mt-6">${item.description}</p>

              <ul role="list" class="mt-6 space-y-6">
                ${item.features.map((feature) => renderTemplate`<li class="flex gap-3">
                    <svg class="text-primary-600 dark:text-primary-400 h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                    </svg>
                    <span>${feature}</span>
                  </li>`)}
              </ul>
            </div>
            <a href="#" class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex w-full items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Buy now
            </a>
          </div>`)}
    </div>
  </div>
</section>`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/components/pricing/PricingTable.astro", void 0);

const $$Astro = createAstro();
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Find the pricing plan that best fits your needs. Plans include seats, projects, support and more", "title": "Pricing \xB7 Stone" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Heading", $$Heading, {})}
  ${renderComponent($$result2, "PricingTable", $$PricingTable, {})}
  ${renderComponent($$result2, "Faq", $$Faq, {})}
  ${renderComponent($$result2, "Cta", $$Cta, {})}
` })}`;
}, "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/pricing.astro", void 0);

const $$file = "G:/Programing/dev/Astro/klimtop/testikklimtop/src/pages/pricing.astro";
const $$url = "/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
