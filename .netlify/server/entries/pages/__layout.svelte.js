var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_db705882 = require("../../chunks/index-db705882.js");
const getStores = () => {
  const stores = (0, import_index_db705882.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/assets/MaDr-logo-8c8c4dbe.svg";
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-dqwfsz.svelte-dqwfsz{display:flex;justify-content:space-between}.corner.svelte-dqwfsz.svelte-dqwfsz{width:3em;height:3em}.corner.svelte-dqwfsz a.svelte-dqwfsz{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-dqwfsz img.svelte-dqwfsz{width:2em;height:2em;object-fit:contain}nav.svelte-dqwfsz.svelte-dqwfsz{display:flex;justify-content:center}ul.svelte-dqwfsz.svelte-dqwfsz{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-dqwfsz.svelte-dqwfsz{position:relative;height:100%}li.active.svelte-dqwfsz.svelte-dqwfsz::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-dqwfsz a.svelte-dqwfsz{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-dqwfsz.svelte-dqwfsz:hover{color:var(--accent-color)}",
  map: null
};
const Header = (0, import_index_db705882.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_db705882.a)(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-dqwfsz"}"><div class="${"corner svelte-dqwfsz"}"><a href="${"https://MaDr.io"}" class="${"svelte-dqwfsz"}"><img${(0, import_index_db705882.b)("src", logo, 0)} alt="${"MaDr"}" class="${"svelte-dqwfsz"}"></a></div>

	<nav class="${"svelte-dqwfsz"}"><ul class="${"svelte-dqwfsz"}"><li class="${["svelte-dqwfsz", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-dqwfsz"}">Home</a></li>
			<li class="${["svelte-dqwfsz", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/about"}" class="${"svelte-dqwfsz"}">About</a></li>
			<li class="${["svelte-dqwfsz", $page.url.pathname === "/todos" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/todos"}" class="${"svelte-dqwfsz"}">Todos</a></li></ul></nav>

	<div class="${"corner svelte-dqwfsz"}"></div>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}",
  map: null
};
const _layout = (0, import_index_db705882.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_db705882.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1izrdc8"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1izrdc8"}"><p>Copyright \xA9 2022 <a href="${"https://MaDr.io"}" class="${"svelte-1izrdc8"}">MaDr</a></p>
</footer>`;
});
