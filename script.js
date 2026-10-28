// DATA KATALOG PRODUK (SISTEM TINGGAL EDIT DI SINI NANTI)
const products = [
    // 1. TOPS (BAJU / ATASAN)
    {
        title: "Heavyweight Plain Cotton Tee",
        desc: "Heavy 24s combed cotton tee in boxy fit.",
        price: "Rp 67.200",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
        link: "https://s.shopee.co.id/7puN5W8lA8",
        gender: "men",
        type: "tops"
    },
    {
        title: "Oversized Linen Blouse",
        desc: "Breathable lightweight linen relaxed shirt.",
        price: "Rp 135.000",
        image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "women",
        type: "tops"
    },
    {
        title: "Minimalist Wool-Blend Jacket",
        desc: "Tailored outerwear for modern layering.",
        price: "Rp 650.000",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "men",
        type: "tops"
    },
    {
        title: "Ribbed Minimalist Knit Top",
        desc: "Soft crewneck slim fit knitwear top.",
        price: "Rp 115.000",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "women",
        type: "tops"
    },

    // 2. BOTTOMS (CELANA / BAWAHAN)
    {
        title: "Relaxed Pleated Trousers",
        desc: "Tailored wide-leg smart casual pants.",
        price: "Rp 210.000",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "men",
        type: "bottoms"
    },
    {
        title: "High-Waist Wide Linen Pants",
        desc: "Flowy aesthetic high-rise minimalist pants.",
        price: "Rp 175.000",
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "women",
        type: "bottoms"
    },
    {
        title: "Nylon Minimalist Utility Shorts",
        desc: "Quick-dry elastic waistband lounge shorts.",
        price: "Rp 95.000",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "men",
        type: "bottoms"
    },
    {
        title: "High-Rise Midi A-Line Skirt",
        desc: "Clean silhouette Korean style midi skirt.",
        price: "Rp 145.000",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "women",
        type: "bottoms"
    },

    // 3. FOOTWEAR (SEPATU / SANDAL)
    {
        title: "Low-Top Black Canvas Sneakers",
        desc: "Classic vulcanized sole daily sneakers.",
        price: "Rp 280.000",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "men",
        type: "footwear"
    },
    {
        title: "Pointed Leather Slip Mules",
        desc: "Sleek daily wear flat leather loafers.",
        price: "Rp 320.000",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "women",
        type: "footwear"
    },
    {
        title: "Genuine Leather Chunky Derby Shoes",
        desc: "Lug sole dress shoes for modern casual fit.",
        price: "Rp 850.000",
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "men",
        type: "footwear"
    },
    {
        title: "Minimalist Strap Leather Sandals",
        desc: "Slim ankle strap casual flat summer sandals.",
        price: "Rp 165.000",
        image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "women",
        type: "footwear"
    },

    // 4. ACCESSORIES (AKSESORIS / TAS / JAM)
    {
        title: "Slim Leather Pocket Wallet",
        desc: "Minimalist veg-tanned black cardholder.",
        price: "Rp 50.000",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "men",
        type: "accessories"
    },
    {
        title: "Heavyweight Canvas Tote Bag",
        desc: "Structured cotton shoulder bag for daily carry.",
        price: "Rp 85.000",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "women",
        type: "accessories"
    },
    {
        title: "Matte Black Leather Watch",
        desc: "Simple analog dial watch with dark leather band.",
        price: "Rp 480.000",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "men",
        type: "accessories"
    },
    {
        title: "Silver Minimalist Band Ring Set",
        desc: "Polished stackable daily metal band rings.",
        price: "Rp 50.000",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
        link: "https://shopee.co.id",
        gender: "women",
        type: "accessories"
    }
];

// STATE FILTERING
let currentGender = 'all';
let currentType = 'all';

// FUNGSI RENDER PRODUK KE HTML
function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';

    const filtered = products.filter(item => {
        const matchGender = (currentGender === 'all' || item.gender === currentGender);
        const matchType = (currentType === 'all' || item.type === currentType);
        return matchGender && matchType;
    });

    filtered.forEach(item => {
        const cardHtml = `
            <a href="${item.link}" target="_blank" class="product-card" data-gender="${item.gender}" data-type="${item.type}">
                <div class="product-image-wrap">
                    <img src="${item.image}" alt="${item.title}" class="product-image">
                </div>
                <h2 class="product-title">${item.title}</h2>
                <p class="product-desc">${item.desc}</p>
                <div class="product-price">${item.price}</div>
                <span class="buy-btn">View on Shopee &rarr;</span>
            </a>
        `;
        grid.innerHTML += cardHtml;
    });
}

// HANDLER FILTER GENDER
function setGender(gender, element) {
    currentGender = gender.toLowerCase();
    document.querySelectorAll('.gender-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    renderProducts();
}

// HANDLER FILTER TIPE
function setType(type, element) {
    currentType = type.toLowerCase();
    document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    renderProducts();
}

// JALANKAN OTOMATIS SAAT HALAMAN SELESAI DI-LOAD
document.addEventListener('DOMContentLoaded', renderProducts);
