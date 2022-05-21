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
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_db705882 = require("../../chunks/index-db705882.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-ynz6et{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-ynz6et{width:100%}.welcome.svelte-ynz6et{position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_db705882.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>MaDr | svelteKitStripped</title>`, ""}<meta name="${"description"}" content="${"SvelteKitStripped"}" data-svelte="svelte-3p4l7j">`, ""}

<section class="${"svelte-ynz6et"}"><h1 class="${"svelte-ynz6et"}">svelteKitStripped by <a href="${"https://github.com/MaDrCloudDev"}">MaDrCloudDev</a>
		<div class="${"welcome svelte-ynz6et"}"></div></h1>

	<h2>Hello World.
	</h2>

</section>`;
});
