/* ------------------------------------------------------------------
   EDIT HERE. One object per piece.
   cat:  "Tops" | "Bottoms" | "Footwear" | "Accessories"
   for:  "men" | "women" | "unisex"
   img:  paste the photo URL (leave "" to show a neutral placeholder)
   url:  your Shopee affiliate link
------------------------------------------------------------------- */
const PRODUCTS = [
  { name:"Heavyweight Plain Cotton Tee", desc:"Heavy 24s combed cotton tee in boxy fit.", price:67200, cat:"Tops", for:"men", img:"images/tops-1.jpg.jpg", url:"#" },
  { name:"Oversized Linen Blouse", desc:"Breathable lightweight linen relaxed shirt.", price:135000, cat:"Tops", for:"women", img:"", url:"#" },
  { name:"Minimalist Wool-Blend Jacket", desc:"Tailored outerwear for modern layering.", price:650000, cat:"Tops", for:"unisex", img:"", url:"#" },
  { name:"Ribbed Minimalist Knit Top", desc:"Soft crewneck slim fit knitwear top.", price:115000, cat:"Tops", for:"women", img:"", url:"#" },
  { name:"Relaxed Pleated Trousers", desc:"Tailored wide-leg smart casual pants.", price:210000, cat:"Bottoms", for:"men", img:"", url:"#" },
  { name:"High-Waist Wide Linen Pants", desc:"Flowy aesthetic high-rise minimalist pants.", price:175000, cat:"Bottoms", for:"women", img:"", url:"#" },
  { name:"Nylon Minimalist Utility Shorts", desc:"Quick-dry elastic waistband lounge shorts.", price:95000, cat:"Bottoms", for:"men", img:"", url:"#" },
  { name:"High-Rise Midi A-Line Skirt", desc:"Clean silhouette Korean style midi skirt.", price:145000, cat:"Bottoms", for:"women", img:"", url:"#" },
  { name:"Low-Top Black Canvas Sneakers", desc:"Classic vulcanized sole daily sneakers.", price:280000, cat:"Footwear", for:"unisex", img:"", url:"#" },
  { name:"Pointed Leather Slip Mules", desc:"Sleek daily wear flat leather loafers.", price:320000, cat:"Footwear", for:"women", img:"", url:"#" },
  { name:"Genuine Leather Chunky Derby Shoes", desc:"Lug sole dress shoes for modern casual fit.", price:850000, cat:"Footwear", for:"men", img:"", url:"#" },
  { name:"Minimalist Strap Leather Sandals", desc:"Slim ankle strap casual flat summer sandals.", price:165000, cat:"Footwear", for:"women", img:"", url:"#" }
];
const CATEGORIES = ["Tops","Bottoms","Footwear","Accessories"];
const GENDERS = [["all","All"],["men","Men"],["women","Women"]];

const state = { cat:"all", gender:"all" };
const $ = id => document.getElementById(id);
const rupiah = n => "Rp " + n.toLocaleString("id-ID");
const pad = n => String(n).padStart(3, "0");

function buildFilters(){
  $("gender").innerHTML = GENDERS.map(([v,l]) =>
    `<button type="button" data-gender="${v}" aria-pressed="${state.gender===v}">${l}</button>`).join("");
  const present = CATEGORIES.filter(c => PRODUCTS.some(p => p.cat === c));
  $("tabs").innerHTML = [["all","All items"], ...present.map(c => [c,c])].map(([v,l]) =>
    `<button type="button" data-cat="${v}" aria-pressed="${state.cat===v}">${l}</button>`).join("");
}

function card(p){
  const media = p.img
    ? `<img src="${p.img}" alt="${p.name}" loading="lazy">`
    : `<div class="ph" aria-hidden="true">TMJ</div>`;
  return `<article class="card">
    <figure class="plate">${media}</figure>
    <div class="meta"><span>${p.cat}</span><span>No. ${pad(p.id)}</span></div>
    <h3 class="name">${p.name}</h3>
    <p class="desc">${p.desc}</p>
    <div class="buy">
      <span class="price">${rupiah(p.price)}</span>
      <a class="shop" href="${p.url}" target="_blank" rel="noopener sponsored">View on Shopee</a>
    </div>
  </article>`;
}

function render(){
  const list = PRODUCTS
    .map((p, i) => ({ ...p, id: i + 1 }))
    .filter(p => (state.cat === "all" || p.cat === state.cat) &&
                 (state.gender === "all" || p.for === state.gender || p.for === "unisex"));
  $("grid").innerHTML = list.length
    ? list.map(card).join("")
    : `<div class="empty" style="grid-column:1/-1"><p>Nothing here yet.</p><button type="button" id="reset">Show all items</button></div>`;
  $("count").textContent = `${list.length} ${list.length === 1 ? "piece" : "pieces"}`;
  document.querySelectorAll("[data-gender]").forEach(b => b.setAttribute("aria-pressed", b.dataset.gender === state.gender));
  document.querySelectorAll("[data-cat]").forEach(b => b.setAttribute("aria-pressed", b.dataset.cat === state.cat));
}

document.addEventListener("click", e => {
  const g = e.target.closest("[data-gender]"), c = e.target.closest("[data-cat]");
  if (g) { state.gender = g.dataset.gender; render(); }
  else if (c) { state.cat = c.dataset.cat; render(); }
  else if (e.target.id === "reset") { state.cat = state.gender = "all"; render(); }
});

buildFilters();
render();
