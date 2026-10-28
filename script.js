/* ------------------------------------------------------------------
   THE MINIMALIST JOURNAL (TMJ) - DATABASE PRODUK
   Filter Gender: "men" | "women" | "unisex"
   Filter Kategori: "Tops" | "Bottoms" | "Footwear" | "Accessories"
------------------------------------------------------------------- */
const PRODUCTS = [
  {
    id: 1,
    name: "HEAVYWEIGHT PLAIN COTTON TEE",
    desc: "Heavyweight 200 GSM combed cotton in a relaxed boxy silhouette.",
    price: 67200,
    cat: "Tops",
    for: "men",
    img: "images/tops-1.jpg",
    url: "https://s.shopee.co.id/7puN5W8IA8" // Link affiliate Shopee kamu
  },
  {
    id: 2,
    name: "OVERSIZED LINEN BLOUSE",
    desc: "Breathable lightweight linen relaxed shirt for everyday wear.",
    price: 135000,
    cat: "Tops",
    for: "women",
    img: "",
    url: "#"
  },
  {
    id: 3,
    name: "MINIMALIST WOOL-BLEND JACKET",
    desc: "Tailored outerwear designed for clean modern layering.",
    price: 650000,
    cat: "Tops",
    for: "unisex",
    img: "",
    url: "#"
  },
  {
    id: 4,
    name: "RIBBED MINIMALIST KNIT TOP",
    desc: "Soft crewneck slim fit knitwear top.",
    price: 115000,
    cat: "Tops",
    for: "women",
    img: "",
    url: "#"
  },
  {
    id: 5,
    name: "RELAXED PLEATED TROUSERS",
    desc: "Tailored wide-leg smart casual trousers.",
    price: 210000,
    cat: "Bottoms",
    for: "men",
    img: "",
    url: "#"
  },
  {
    id: 6,
    name: "HIGH-WAIST WIDE LINEN PANTS",
    desc: "Flowy aesthetic high-rise minimalist pants.",
    price: 175000,
    cat: "Bottoms",
    for: "women",
    img: "",
    url: "#"
  },
  {
    id: 7,
    name: "NYLON UTILITY SHORTS",
    desc: "Quick-dry elastic waistband minimalist lounge shorts.",
    price: 95000,
    cat: "Bottoms",
    for: "men",
    img: "",
    url: "#"
  },
  {
    id: 8,
    name: "HIGH-RISE MIDI A-LINE SKIRT",
    desc: "Clean silhouette Korean style midi skirt.",
    price: 145000,
    cat: "Bottoms",
    for: "women",
    img: "",
    url: "#"
  },
  {
    id: 9,
    name: "LOW-TOP BLACK CANVAS SNEAKERS",
    desc: "Classic vulcanized sole daily minimalist sneakers.",
    price: 280000,
    cat: "Footwear",
    for: "unisex",
    img: "",
    url: "#"
  },
  {
    id: 10,
    name: "POINTED LEATHER SLIP MULES",
    desc: "Sleek daily wear flat leather loafers.",
    price: 320000,
    cat: "Footwear",
    for: "women",
    img: "",
    url: "#"
  },
  {
    id: 11,
    name: "LEATHER CHUNKY DERBY SHOES",
    desc: "Lug sole dress shoes for modern casual fit.",
    price: 850000,
    cat: "Footwear",
    for: "men",
    img: "",
    url: "#"
  },
  {
    id: 12,
    name: "MINIMALIST LEATHER SANDALS",
    desc: "Slim ankle strap casual flat summer sandals.",
    price: 165000,
    cat: "Footwear",
    for: "women",
    img: "",
    url: "#"
  }
];

const CATEGORIES = ["Tops", "Bottoms", "Footwear", "Accessories"];
const GENDERS = [["all", "All"], ["men", "Men"], ["women", "Women"]];

const state = { cat: "all", gender: "all" };
const $ = id => document.getElementById(id);

const rupiah = n => "Rp " + n.toLocaleString("id-ID");
const pad = n => String(n).padStart(3, "0");

function buildFilters() {
  $("gender").innerHTML = GENDERS.map(([v, l]) =>
    `<button type="button" data-gender="${v}" aria-pressed="${state.gender === v}">${l}</button>`
  ).join("");

  const present = CATEGORIES.filter(c => PRODUCTS.some(p => p.cat === c));
  $("tabs").innerHTML = [["all", "All Items"], ...present.map(c => [c, c])].map(([v, l]) =>
    `<button type="button" data-cat="${v}" aria-pressed="${state.cat === v}">${l}</button>`
  ).join("");
}

function card(p) {
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

function render() {
  const list = PRODUCTS.filter(p => 
    (state.cat === "all" || p.cat === state.cat) &&
    (state.gender === "all" || p.for === state.gender || p.for === "unisex")
  );

  $("grid").innerHTML = list.length
    ? list.map(card).join("")
    : `<div class="empty" style="grid-column:1/-1"><p>No items found in this section.</p><button type="button" id="reset">Show all items</button></div>`;

  $("count").textContent = `${list.length} ${list.length === 1 ? "piece" : "pieces"}`;

  document.querySelectorAll("[data-gender]").forEach(b => 
    b.setAttribute("aria-pressed", b.dataset.gender === state.gender)
  );
  document.querySelectorAll("[data-cat]").forEach(b => 
    b.setAttribute("aria-pressed", b.dataset.cat === state.cat)
  );
}

document.addEventListener("click", e => {
  const g = e.target.closest("[data-gender]");
  const c = e.target.closest("[data-cat]");

  if (g) { 
    state.gender = g.dataset.gender; 
    render(); 
  } else if (c) { 
    state.cat = c.dataset.cat; 
    render(); 
  } else if (e.target.id === "reset") { 
    state.cat = state.gender = "all"; 
    render(); 
  }
});

// Initialization
buildFilters();
render();
