// Database Produk Curated (Quiet Luxury & Minimalist Daily Wear)
const products = [
    // --- CATEGORY: UNDER 100K ---
    {
        id: 1,
        title: "Heavyweight Cotton Basic Tee 24s",
        brand: "MyBasic / Star Seller",
        price: "Rp 79.200",
        category: "under100k",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
        description: "Kaos katun tebal potongan boxy fit. Jahitan rapi tanpa logo, sangat cocok untuk daily outfit quiet luxury.",
        link: "https://s.shopee.co.id/5AtLuvCTjb" // LINK AFFILIATE JULIAN
    },
    {
        id: 2,
        title: "Minimalist Matte Cardholder",
        brand: "Local Craft",
        price: "Rp 65.000",
        category: "under100k",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80",
        description: "Dompet kartu kulit sintetis matte yang simpel dan tipis. Muat hingga 6 kartu + selipan uang.",
        link: "https://shopee.co.id/"
    },
    {
        id: 3,
        title: "Minimalist Canvas Tote Bag",
        brand: "Daily Carry",
        price: "Rp 79.000",
        category: "under100k",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
        description: "Tote bag bahan kanvas tebal polos tanpa motif. Muat laptop 14 inch, cocok buat ngantor atau sekadar ngopi.",
        link: "https://shopee.co.id/"
    },
    {
        id: 4,
        title: "Unstructured Clean Baseball Cap",
        brand: "Headwear Studio",
        price: "Rp 49.000",
        category: "under100k",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80",
        description: "Topi polos tanpa logo dengan bahan twill halus. Memberikan sentuhan sporty-casual yang bersih.",
        link: "https://shopee.co.id/"
    },
    {
        id: 5,
        title: "Ribbed Cotton Ankle Socks (Pack of 3)",
        brand: "Basic Essentials",
        price: "Rp 45.000",
        category: "under100k",
        image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&auto=format&fit=crop&q=80",
        description: "Kaos kaki rajut bertekstur dengan warna-warna earth tone netral (cream, charcoal, off-white).",
        link: "https://shopee.co.id/"
    },

    // --- CATEGORY: MID-RANGE (100k - 300k) ---
    {
        id: 6,
        title: "Relaxed Fit Linen Blend Shirt",
        brand: "Essentials Co.",
        price: "Rp 149.000",
        category: "mid",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
        description: "Kemeja bahan linen halus berpotongan santai. Adem di cuaca tropis, memberikan vibe effortless mewah.",
        link: "https://shopee.co.id/"
    },
    {
        id: 7,
        title: "Pleated Ankle Trousers",
        brand: "Minimalist Wear",
        price: "Rp 189.000",
        category: "mid",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop&q=80",
        description: "Celana bahan lipatan plisket depan. Memberikan ilusi kaki lebih jenjang dan terlihat rapi seketika.",
        link: "https://shopee.co.id/"
    },
    {
        id: 8,
        title: "Knit Polo Shirt Fine Gauge",
        brand: "Modern Heritage",
        price: "Rp 175.000",
        category: "mid",
        image: "https://images.unsplash.com/photo-1625910513413-282470725a2e?w=600&auto=format&fit=crop&q=80",
        description: "Kaos kerah bahan rajut halus tanpa kancing. Vibe old-money khas gaya quiet luxury.",
        link: "https://shopee.co.id/"
    },
    {
        id: 9,
        title: "Tailored Smart Casual Shorts",
        brand: "Urban Classic",
        price: "Rp 135.000",
        category: "mid",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80",
        description: "Celana pendek bahan kain formal dengan potongan di atas lutut. Pas untuk weekend getaway santai.",
        link: "https://shopee.co.id/"
    },
    {
        id: 10,
        title: "Minimalist Leather Belt (Silver Buckle)",
        brand: "Craftsman Co.",
        price: "Rp 129.000",
        category: "mid",
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=80",
        description: "Ikat pinggang kulit sapi asli dengan gesper perak doff yang bersih tanpa ukiran mencolok.",
        link: "https://shopee.co.id/"
    },

    // --- CATEGORY: INVESTMENT (300k+) ---
    {
        id: 11,
        title: "Fine Cashmere Crewneck Sweater",
        brand: "UNIQLO U / Premium",
        price: "Rp 1.299.000",
        category: "investment",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=80",
        description: "Sweater cashmere 100% serat halus. Potongan timeless untuk investasi jangka panjang capsule wardrobe.",
        link: "https://shopee.co.id/"
    },
    {
        id: 12,
        title: "Clean Leather Low-Top Sneakers",
        brand: "Footwear Select",
        price: "Rp 450.000",
        category: "investment",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80",
        description: "Sepatu kets putih polos berbahan kulit asli. Desain serbaguna yang cocok dipadukan dengan celana apa saja.",
        link: "https://shopee.co.id/"
    },
    {
        id: 13,
        title: "Oversized Wool Blend Trench Coat",
        brand: "Atelier Studio",
        price: "Rp 899.000",
        category: "investment",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&auto=format&fit=crop&q=80",
        description: "Outer luaran bahan wool tebal dengan siluet jatuh yang elegan. Cocok untuk travelling atau acara formal.",
        link: "https://shopee.co.id/"
    },
    {
        id: 14,
        title: "Structured Leather Crossbody Bag",
        brand: "Leatherwork ID",
        price: "Rp 380.000",
        category: "investment",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80",
        description: "Tas selempang kulit berstruktur kokoh. Desain kokoh dan minimalis untuk membawa barang harian.",
        link: "https://shopee.co.id/"
    },
    {
        id: 15,
        title: "Classic Acetate Sunglasses",
        brand: "Eyewear Co.",
        price: "Rp 320.000",
        category: "investment",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
        description: "Kacamata hitam frameless/acetate hitam pekat dengan perlindungan UV400. Memberikan kesan misterius dan berkelas.",
        link: "https://shopee.co.id/"
    },
    {
        id: 16,
        title: "Tessa Linen Trousers",
        brand: "AzikaCollection",
        price: "Rp 85.000",
        category: "under100k",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&auto=format&fit=crop&q=80",
        description: "Celana panjang linen berpotongan high waist dan loose fit. Nyaman untuk aktivitas santai atau liburan.",
        link: https://vt.tokopedia.com/t/ZS9UHQaGuFK4Y-BR7Bm/
    }
];

// Render Produk ke HTML
function renderProducts(items) {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

    items.forEach(product => {
        const cardHTML = `
            <div class="card">
                <div>
                    <div class="card-img-wrapper">
                        <img src="${product.image}" alt="${product.title}" class="card-img" loading="lazy">
                    </div>
                    <span class="tag">${product.brand}</span>
                    <h3 class="card-title">${product.title}</h3>
                    <div class="card-price">${product.price}</div>
                    <p class="card-desc">${product.description}</p>
                </div>
                <a href="${product.link}" target="_blank" rel="noopener" class="btn-affiliate">Buy on Store ↗</a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Filter Kategori
function filterCategory(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Executed on Load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});
