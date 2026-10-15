"use strict";

/* =========================================================
   LUMIÈRE - MAIN JAVASCRIPT
   Products + Search + Wishlist + Cart + Shop + Checkout
========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [
    {
        id: 1,
        name: "Satin Cowl Neck Dress",
        category: "dresses",
        categoryName: "Dresses",
        price: 1799,
        oldPrice: 2999,
        discount: 40,
        rating: 4.8,
        reviews: 126,
        badge: "Bestseller",
        colors: [
            { name: "Black", value: "#171717" },
            { name: "Champagne", value: "#d8c5a9" },
            { name: "Rose", value: "#c89191" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
        image2: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=85",
        description: "A beautifully fluid satin dress featuring a soft cowl neckline and elegant silhouette. Perfect for dinners, celebrations and special occasions.",
        material: "Premium Satin",
        fit: "Regular Fit",
        care: "Dry clean recommended",
        tags: ["new", "trending", "sale"]
    },

{
    id: 2,
    name: "Elegant Black Button-Down Top",
    category: "tops",
    categoryName: "Tops",
    price: 1499,
    oldPrice: 2299,
    discount: 35,
    rating: 4.7,
    reviews: 96,
    badge: "Trending",
    colors: [
        { name: "Black", value: "#171717" },
        { name: "White", value: "#f5f5f1" },
        { name: "Beige", value: "#cdbda7" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1548624149-f2b8a6f6c7b4?auto=format&fit=crop&w=900&q=85",
    description: "A chic black button-down top with a timeless silhouette, perfect for everyday styling, office wear and evening outings.",
    material: "Soft Woven Blend",
    fit: "Regular Fit",
    care: "Machine wash cold with similar colours",
    tags: ["trending", "tops"]

 },

{
    id: 3,
    name: "Women’s High-Waist Utility Cargo Pants",
    category: "bottom",
    categoryName: "Bottom",
    price: 1799,
    oldPrice: 2499,
    discount: 28,
    rating: 4.8,
    reviews: 186,
    badge: "Trending",
    colors: [
        { name: "Olive Green", value: "#6B6A45" },
        { name: "Black", value: "#171717" },
        { name: "Beige", value: "#CDBDA7" }
    ],
    sizes: ["26", "28", "30", "32", "34"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1506629905607-d9c297d7b6c4?auto=format&fit=crop&w=900&q=85",
    description: "Modern high-waist cargo pants featuring a relaxed silhouette and utility-inspired styling. Pair them with fitted tops, sneakers or casual shirts for an effortlessly trendy look.",
    material: "Cotton Twill Blend",
    fit: "Relaxed Cargo Fit",
    care: "Machine wash cold with similar colours",
    tags: ["trending", "cargo", "bottom"]
},


    {
        id: 4,
        name: "Minimal Co-ord Set",
        category: "co-ords",
        categoryName: "Co-ords",
        price: 2199,
        oldPrice: 3499,
        discount: 37,
        rating: 4.9,
        reviews: 172,
        badge: "Editor's Pick",
        colors: [
            { name: "Cream", value: "#e9dfd1" },
            { name: "Black", value: "#191919" },
            { name: "Olive", value: "#777660" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
        image2: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85",
        description: "A coordinated two-piece set designed for an elevated yet effortless look.",
        material: "Cotton Blend",
        fit: "Relaxed Fit",
        care: "Gentle machine wash",
        tags: ["trending", "new"]
    },


{
    id: 5,
    name: "Burgundy Satin Evening Maxi Dress",
    category: "dresses",
    categoryName: "Dresses",
    price: 2499,
    oldPrice: 3599,
    discount: 31,
    rating: 4.8,
    reviews: 142,
    badge: "New Arrival",
    colors: [
        { name: "Burgundy", value: "#701C36" },
        { name: "Black", value: "#171717" },
        { name: "Champagne", value: "#D8C3A5" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1765870972864-6a4140a993e4?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1765870972864-6a4140a993e4?auto=format&fit=crop&w=900&q=85",
    description: "An elegant burgundy satin evening maxi dress with a flowing silhouette and a luxurious finish. Perfect for celebrations, dinner outings and special occasions.",
    material: "Satin Blend",
    fit: "Flowy Maxi Fit",
    care: "Gentle hand wash",
    tags: ["new", "party-wear", "dresses"]
},

{
    id: 6,
    name: "Colorful Faux Leather Jacket Collection",
    category: "jackets-coats",
    categoryName: "Jackets & Coats",
    price: 2799,
    oldPrice: 3999,
    discount: 30,
    rating: 4.8,
    reviews: 168,
    badge: "New Trend",
    colors: [
        { name: "Burgundy", value: "#701C36" },
        { name: "Chocolate Brown", value: "#654321" },
        { name: "Olive Green", value: "#6B6A45" },
        { name: "Cream", value: "#E8DDC8" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&w=900&q=85",
    description: "A stylish collection of leather-look jackets displayed in a boutique-inspired setting. Perfect for creating trendy layered outfits and adding a modern touch to your wardrobe.",
    material: "Faux Leather",
    fit: "Regular Fit",
    care: "Wipe clean with a soft cloth",
    tags: ["new", "trending", "jackets-coats"]
},


{
    id: 7,
    name: "Elegant Long Coat Collection",
    category: "jackets-coats",
    categoryName: "Jackets & Coats",
    price: 3299,
    oldPrice: 4599,
    discount: 28,
    rating: 4.8,
    reviews: 112,
    badge: "New Trend",
    colors: [
        { name: "Burgundy", value: "#701C36" },
        { name: "Camel Beige", value: "#C19A6B" },
        { name: "Olive Green", value: "#6B6A45" },
        { name: "Cream", value: "#E8DDC8" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1548624149-f2b8a6f6c7b4?auto=format&fit=crop&w=900&q=85",
    description: "A sophisticated long coat collection with timeless tailoring and elegant seasonal colours. Perfect for layering over dresses, jeans and everyday outfits.",
    material: "Wool Blend",
    fit: "Regular Long Fit",
    care: "Dry clean recommended",
    tags: ["new", "trending", "jackets-coats"]
},


    {
        id: 8,
        name: "Soft Knit Cardigan",
        category: "tops",
        categoryName: "Tops",
        price: 1399,
        oldPrice: 2299,
        discount: 39,
        rating: 4.8,
        reviews: 63,
        badge: "New",
        colors: [
            { name: "Cream", value: "#ddd4c7" },
            { name: "Grey", value: "#969696" },
            { name: "Brown", value: "#876d5b" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85",
        image2: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=85",
        description: "A soft knitted cardigan with a relaxed silhouette for effortless layering.",
        material: "Soft Knit",
        fit: "Relaxed Fit",
        care: "Hand wash",
        tags: ["new"]
    },


{
    id: 9,
    name: "Elegant Matching Shirt & Pant Co-ord Set",
    category: "co-ord-sets",
    categoryName: "Co-ord Sets",
    price: 2199,
    oldPrice: 3199,
    discount: 31,
    rating: 4.8,
    reviews: 124,
    badge: "Trending",
    colors: [
        { name: "Sage Green", value: "#A3B18A" },
        { name: "Burgundy", value: "#722F37" },
        { name: "Cream", value: "#E8DDC8" },
        { name: "Chocolate Brown", value: "#654321" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.openai.com/static-rsc-4/VVTeZwG-CqEh9SLfa-5bahhADN7PkiiDYLeMk07_qrDQCb6dxsAerLQVZzO4rLkPFQHjxfEhhO3l0m64rTnVK_KhC3dN4a4QBji6gETFbv_j_-_m_1ifuWomA_9gpD3y-HDSwVKyhdio_p92wHhdtWbkz1NxBWXljOxbzrJOsElH65_ZhW8lamJsRj2hIh20?purpose=fullsize",
    image2: "https://images.openai.com/static-rsc-4/VVTeZwG-CqEh9SLfa-5bahhADN7PkiiDYLeMk07_qrDQCb6dxsAerLQVZzO4rLkPFQHjxfEhhO3l0m64rTnVK_KhC3dN4a4QBji6gETFbv_j_-_m_1ifuWomA_9gpD3y-HDSwVKyhdio_p92wHhdtWbkz1NxBWXljOxbzrJOsElH65_ZhW8lamJsRj2hIh20?purpose=fullsize",
    description: "A coordinated two-piece outfit featuring a matching shirt-style top and trousers. Designed for an elegant, modern look, perfect for brunch, shopping and casual outings.",
    material: "Linen Blend",
    fit: "Relaxed Fit",
    care: "Gentle machine wash",
    tags: ["trending", "new", "co-ord-sets"]
},


{
    id: 10,
    name: "Trending Elegant Co-ord Set",
    category: "co-ord-sets",
    categoryName: "Co-ord Sets",
    price: 1999,
    oldPrice: 2999,
    discount: 33,
    rating: 4.8,
    reviews: 136,
    badge: "Trending",
    colors: [
        { name: "Burgundy", value: "#701C36" },
        { name: "Sage Green", value: "#A3B18A" },
        { name: "Chocolate Brown", value: "#654321" },
        { name: "Cream", value: "#E8DDC8" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.openai.com/static-rsc-4/NKJ7OK77ONhC1xvKbB5mPAW_Ex0vSq2xatyBJdPzjQklU8Z-POyB03Jouyd4w4yTXozOHfMG_IB8RM97-ostc95CuO5MbKw0G43NxPhlLN4rSAQlESZce5xajObBnbpfrdWHhOVZFu8O_JR0mgEV6YHgl92QuE9_ejCHRwATXXZctFDfE-esTSJLTvGASNd9?purpose=fullsize",
    image2: "https://images.openai.com/static-rsc-4/NKJ7OK77ONhC1xvKbB5mPAW_Ex0vSq2xatyBJdPzjQklU8Z-POyB03Jouyd4w4yTXozOHfMG_IB8RM97-ostc95CuO5MbKw0G43NxPhlLN4rSAQlESZce5xajObBnbpfrdWHhOVZFu8O_JR0mgEV6YHgl92QuE9_ejCHRwATXXZctFDfE-esTSJLTvGASNd9?purpose=fullsize",
    description: "A stylish two-piece co-ord set featuring a coordinated top and bottom. Designed for a polished, contemporary look, perfect for brunch, casual outings and everyday fashion.",
    material: "Soft Crepe Blend",
    fit: "Relaxed Fit",
    care: "Gentle machine wash",
    tags: ["trending", "new", "co-ord-sets"]
},


{
    id: 11,
    name: "Classic White Shirt & Black Formal Pants",
    category: "co-ord-sets",
    categoryName: "Co-ord Sets",
    price: 2299,
    oldPrice: 3299,
    discount: 30,
    rating: 4.8,
    reviews: 118,
    badge: "Office Wear",
    colors: [
        { name: "White & Black", value: "#252525" },
        { name: "Cream & Brown", value: "#C19A6B" },
        { name: "White & Charcoal", value: "#414141" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://plus.unsplash.com/premium_photo-1740409497402-b0e4931e6a05?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    image2: "https://plus.unsplash.com/premium_photo-1740409497402-b0e4931e6a05?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "A classic white shirt paired with black formal trousers for a smart, polished look. Perfect for office wear, presentations and everyday professional styling.",
    material: "Cotton Blend",
    fit: "Regular Fit",
    care: "Gentle machine wash",
    tags: ["formal", "office-wear", "co-ord-sets"]
},


    {
        id: 12,
        name: "Satin Slip Skirt",
        category: "skirts",
        categoryName: "Skirts",
        price: 1199,
        oldPrice: 1999,
        discount: 40,
        rating: 4.5,
        reviews: 69,
        badge: "Trending",
        colors: [
            { name: "Champagne", value: "#d4c0a7" },
            { name: "Black", value: "#171717" },
            { name: "Rose", value: "#bb8989" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
        image2: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?auto=format&fit=crop&w=900&q=85",
        description: "A silky slip skirt with a fluid drape and elegant finish.",
        material: "Satin",
        fit: "Regular Fit",
        care: "Dry clean",
        tags: ["trending", "sale"]
    },

    {
        id: 13,
        name: "Oversized Blazer",
        category: "outerwear",
        categoryName: "Outerwear",
        price: 2299,
        oldPrice: 3799,
        discount: 39,
        rating: 4.9,
        reviews: 188,
        badge: "Editor's Pick",
        colors: [
            { name: "Black", value: "#171717" },
            { name: "Grey", value: "#777777" },
            { name: "Beige", value: "#c4ad92" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
        image2: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=85",
        description: "A modern oversized blazer designed to instantly elevate everyday outfits.",
        material: "Premium Suiting",
        fit: "Oversized",
        care: "Dry clean only",
        tags: ["trending", "new"]
    },

    {
        id: 14,
        name: "Cotton Poplin Dress",
        category: "dresses",
        categoryName: "Dresses",
        price: 1699,
        oldPrice: 2799,
        discount: 39,
        rating: 4.7,
        reviews: 91,
        badge: "New",
        colors: [
            { name: "White", value: "#f4f2ed" },
            { name: "Blue", value: "#7f9db5" },
            { name: "Black", value: "#181818" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85",
        image2: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=85",
        description: "A crisp cotton poplin dress with a clean silhouette and feminine details.",
        material: "100% Cotton",
        fit: "Relaxed Fit",
        care: "Machine wash cold",
        tags: ["new"]
    },


{
id: 15,
name: "Professional Beige Blazer & Trouser Set",
category: "co-ord-sets",
categoryName: "Co-ord Sets",
price: 3499,
oldPrice: 4999,
discount: 30,
rating: 4.7,
reviews: 73,
badge: "Trending",
colors: [
{ name: "Beige", value: "#D8C7B2" },
{ name: "White", value: "#F5F3EF" },
{ name: "Grey", value: "#808080" }
],
sizes: ["S", "M", "L", "XL"],
image: "https://plus.unsplash.com/premium_photo-1683140908202-a8741a87045a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
image2: "https://plus.unsplash.com/premium_photo-1683140908202-a8741a87045a?auto=format&fit=crop&fm=jpg&ixid=M3wxA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",

description: "An elegant professional outfit inspired by modern office fashion, perfect for meetings, workwear, business events, and formal occasions.",
material: "Polyester Blend",
fit: "Regular Fit",
care: "Dry clean recommended",
tags: ["formal", "office-wear", "trending"]

},


    {
        id: 16,
        name: "Relaxed Cotton Co-ord",
        category: "co-ords",
        categoryName: "Co-ords",
        price: 1999,
        oldPrice: 3199,
        discount: 38,
        rating: 4.8,
        reviews: 105,
        badge: "Bestseller",
        colors: [
            { name: "Ivory", value: "#e8e0d4" },
            { name: "Olive", value: "#74755e" },
            { name: "Black", value: "#171717" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85",
        image2: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
        description: "A relaxed coordinated set crafted for comfortable everyday dressing.",
        material: "Cotton Blend",
        fit: "Relaxed Fit",
        care: "Machine wash cold",
        tags: ["trending", "sale"]
    },


        {
id: 17,
name: "Elegant White Fitted Top",
category: "tops",
categoryName: "Tops",
price: 799,
oldPrice: 1199,
discount: 33,
rating: 4.5,
reviews: 198,
badge: "Bestseller",
colors: [
{ name: "White", value: "#F6F6F2" },
{ name: "Black", value: "#171717" },
{ name: "Cream", value: "#E8DDCC" }
],
sizes: ["XS", "S", "M", "L", "XL"],
image: "https://images.openai.com/static-rsc-4/jUYSZGov52nTr7z6ECaOz3ci1LyQXM5HLYfEvKGVlXXdlyk6ce6ZWo5jnwXHnx8y-ZmhtIYcO7T3dlSqZKWfBY12NMK5qz1BIMlv4YujYYf9thzQ2FMu_W4iN6tokSvYOcp9CaN6yWSsGfUh0eL-gCAUFaXz0kpHlaq-YkPRaETkohe2GJHviFmqRTqafiz0?purpose=fullsize",
image2: "https://images.openai.com/static-rsc-4/jUYSZGov52nTr7z6ECaOz3ci1LyQXM5HLYfEvKGVlXXdlyk6ce6ZWo5jnwXHnx8y-ZmhtIYcO7T3dlSqZKWfBY12NMK5qz1BIMlv4YujYYf9thzQ2FMu_W4iN6tokSvYOcp9CaN6yWSsGfUh0eL-gCAUFaXz0kpHlaq-YkPRaETkohe2GJHviFmqRTqafiz0?purpose=fullsize",
description: "A versatile white fitted top with a clean, timeless design, perfect for everyday wear, casual outings, and effortless layering.",
material: "Cotton Blend",
fit: "Fitted",
care: "Machine wash cold",
tags: ["trending", "everyday", "bestseller"]
},


    {
    id: 18,
    name: "High Rise Wide Leg Pleated Korean Pant",
    category: "bottom",
    categoryName: "bottom",
    price: 1499,
    oldPrice: 1999,
    discount: 25,
    rating: 4.6,
    reviews: 124,
    badge: "New",
    colors: [
        { name: "Cream Beige", value: "#D8C7A8" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant1.jpg",
    image2: "images/pants/pant1.jpg",
    description: "A sophisticated high rise wide leg pant featuring elegant pleated detailing and a relaxed Korean-inspired silhouette.",
    material: "Polyester Blend",
    fit: "Wide Leg",
    care: "Machine wash cold",
    tags: ["new", "trending"]
},

{
    id: 19,
    name: "High Waist Flared Pants",
    category: "bottom",
    categoryName: "bottom",
    price: 1399,
    oldPrice: 1899,
    discount: 26,
    rating: 4.5,
    reviews: 96,
    badge: "Trending",
    colors: [
        { name: "Slate Blue", value: "#3F5268" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant2.jpg",
    image2: "images/pants/pant2.jpg",
    description: "A sleek high waist silhouette with a fitted shape and elegant flared hem for a modern statement look.",
    material: "Stretch Fabric",
    fit: "Flared",
    care: "Machine wash cold",
    tags: ["trending"]
},

{
    id: 20,
    name: "Women Regular Fit Pants",
    category: "bottom",
    categoryName: "bottom",
    price: 1299,
    oldPrice: 1799,
    discount: 28,
    rating: 4.5,
    reviews: 84,
    badge: "New",
    colors: [
        { name: "Cream", value: "#F3E9D2" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant3.webp",
    image2: "images/pants/pant3.webp",
    description: "A versatile women’s regular fit pant in a soft cream shade, designed for a clean and comfortable everyday look.",
    material: "Cotton Blend",
    fit: "Regular Fit",
    care: "Machine wash cold",
    tags: ["new", "pants"]
},

{
    id: 21,
    name: "Wide Leg Cargo Pants",
    category: "bottom",
    categoryName: "bottom",
    price: 1499,
    oldPrice: 1999,
    discount: 25,
    rating: 4.6,
    reviews: 72,
    badge: "Trending",
    colors: [
        { name: "Cream", value: "#F3E9D2"}
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant4.jpg",
    image2: "images/pants/pant4.jpg",
    description: "A relaxed wide leg cargo pant in a versatile khaki shade, featuring a comfortable fit and utility-inspired design for a modern casual look.",
    material: "Cotton Blend",
    fit: "Wide Leg",
    care: "Machine wash cold",
    tags: ["trending", "cargo", "pants"]
},
 
{
    id: 22,
    name: "High Waist Trousers",
    category: "bottom",
    categoryName: "bottom",
    price: 1399,
    oldPrice: 1899,
    discount: 26,
    rating: 4.5,
    reviews: 88,
    badge: "New",
    colors: [
        { name: "Caramel", value: "#B87945" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant5.webp",
    image2: "images/pants/pant5.webp",
    description: "Elegant high waist trousers in a rich caramel shade, designed with a polished silhouette for a sophisticated and versatile look.",
    material: "Polyester Blend",
    fit: "Regular Fit",
    care: "Machine wash cold",
    tags: ["new", "trousers", "pants"]
},

{
    id: 23,
    name: "Solid High Waist Straight Korean Loose Pleated Pants",
    category: "bottom",
    categoryName: "bottom",
    price: 1499,
    oldPrice: 1999,
    discount: 25,
    rating: 4.6,
    reviews: 91,
    badge: "Trending",
    colors: [
        { name: "Black", value: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant6.jpg",
    image2: "images/pants/pant6.jpg",
    description: "A stylish solid black high waist pant with a straight, loose Korean-inspired silhouette and pleated detailing for a polished modern look.",
    material: "Polyester Blend",
    fit: "Straight Loose Fit",
    care: "Machine wash cold",
    tags: ["trending", "korean", "pleated", "pants"]
},

 {

    id: 24,
    name: "Women's High Waist Wide Leg Trousers with Pockets",
    category: "bottom",
    categoryName: "bottom",
    price: 1499,
    oldPrice: 1999,
    discount: 25,
    rating: 4.6,
    reviews: 79,
    badge: "New",
    colors: [
        { name: "Black", value: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant7.jpg",
    image2: "images/pants/pant7.jpg",
    description: "A chic high waist wide leg trouser in classic black, featuring practical pockets and a relaxed silhouette for a polished modern look.",
    material: "Polyester Blend",
    fit: "Wide Leg",
    care: "Machine wash cold",
    tags: ["new", "wide-leg", "trousers", "pants"]

},

{
    id: 25,
    name: "Grey Straight Baggy Fit Pants",
    category: "bottom",
    categoryName: "bottom",
    price: 1399,
    oldPrice: 1899,
    discount: 26,
    rating: 4.5,
    reviews: 76,
    badge: "Trending",
    colors: [
        { name: "Grey", value: "#808080" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant8.webp",
    image2: "images/pants/pant8.webp",
    description: "A stylish grey pant featuring a straight baggy fit for a relaxed and comfortable silhouette with a modern casual look.",
    material: "Cotton Blend",
    fit: "Straight Baggy Fit",
    care: "Machine wash cold",
    tags: ["trending", "baggy", "straight", "pants"]
},

{
    id: 26,
    name: "Women Loose Fit Mid-Rise Parachute Trouser",
    category: "bottom",
    categoryName: "bottom",
    price: 1499,
    oldPrice: 1999,
    discount: 25,
    rating: 4.6,
    reviews: 83,
    badge: "Trending",
    colors: [
        { name: "Bright Grey", value: "#A6A6A6" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant9.jpg",
    image2: "images/pants/pant9.jpg",
    description: "A relaxed mid-rise parachute trouser in bright grey, featuring a loose fit for a comfortable and effortlessly stylish modern look.",
    material: "Polyester Blend",
    fit: "Loose Fit",
    care: "Machine wash cold",
    tags: ["trending", "parachute", "loose-fit", "pants"]
},

{
    id: 27,
    name: "Elastic Flare Bootcut Pants",
    category: "bottom",
    categoryName: "bottom",
    price: 1399,
    oldPrice: 1899,
    discount: 26,
    rating: 4.5,
    reviews: 81,
    badge: "Trending",
    colors: [
        { name: "Black", value: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant10.webp",
    image2: "images/pants/pant10.webp",
    description: "A comfortable black bootcut pant with an elastic waist and flared silhouette, perfect for a stylish and relaxed everyday look.",
    material: "Stretch Fabric",
    fit: "Flare Bootcut",
    care: "Machine wash cold",
    tags: ["trending", "bootcut", "flare", "pants"]
},

{
    id: 28,
    name: "Straight Fit Stretchable Pants",
    category: "bottom",
    categoryName: "bottom",
    price: 1399,
    oldPrice: 1899,
    discount: 26,
    rating: 4.5,
    reviews: 74,
    badge: "New",
    colors: [
         { name: "Brownish Green", value: "#6B6A45" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/pants/pant11.webp",
    image2: "images/pants/pant11.webp",
    description: "A versatile taupe straight fit pant with a comfortable stretchable fabric, designed for an effortless and polished everyday look.",
    material: "Stretch Fabric",
    fit: "Straight Fit",
    care: "Machine wash cold",
    tags: ["new", "stretchable", "straight", "pants"]
},

{
    id: 29,
    name: "Flowy Top",
    category: "tops",
    categoryName: "tops",
    price: 999,
    oldPrice: 1499,
    discount: 33,
    rating: 4.5,
    reviews: 68,
    badge: "New",
    colors: [
        { name: "Brown", value: "#8B5E3C" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/tops/top1.webp",
    image2: "images/tops/top1.webp",
    description: "A stylish flowy top in a rich brown shade, designed with a relaxed silhouette for a comfortable and effortlessly elegant everyday look.",
    material: "Soft Flowing Fabric",
    fit: "Relaxed Fit",
    care: "Machine wash cold",
    tags: ["new", "flowy", "brown", "tops"]

},

{
    id: 30,
    name: "Polo Top",
    category: "tops",
    categoryName: "tops",
    price: 1099,
    oldPrice: 1599,
    discount: 31,
    rating: 4.5,
    reviews: 82,
    badge: "New",
    colors: [
        { name: "Brown", value: "#8B5E3C" },
        { name: "Black", value: "#000000" },
        { name: "White", value: "#FFFFFF" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/tops/top2.webp",
    image2: "images/tops/top2.webp",
    description: "A stylish polo top featuring a combination of brown, black, and white tones, designed for a smart and versatile everyday look.",
    material: "Soft Cotton Blend",
    fit: "Regular Fit",
    care: "Machine wash cold",
    tags: ["new", "polo", "brown", "black", "white", "tops"]
},

{
    id: 31,
    name: "Beach Top",
    category: "tops",
    categoryName: "tops",
    price: 899,
    oldPrice: 1399,
    discount: 36,
    rating: 4.5,
    reviews: 63,
    badge: "New",
    colors: [
        { name: "White", value: "#FFFFFF" },
        { name: "Black", value: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "images/tops/top3.webp",
    image2: "images/tops/top3.webp",
    description: "A stylish beach top featuring a classic combination of white and black, designed for a relaxed and effortless summer look.",
    material: "Lightweight Fabric",
    fit: "Relaxed Fit",
    care: "Machine wash cold",
    tags: ["new", "beach", "white", "black", "tops"]
},

{
id: 32,    
name: "Elegant Lantern Sleeve Cinched Waist Top",
category: "tops",
categoryName: "tops",
price: 1299,
oldPrice: 1899,
discount: 32,
rating: 4.6,
reviews: 71,
badge: "New",
colors: [
    { name: "Burgundy", value: "#800020" }
],
sizes: ["S", "M", "L", "XL"],
image: "images/tops/top4.jpg",
image2: "images/tops/top4.jpg",
description: "An elegant burgundy top featuring voluminous lantern sleeves and a cinched waist for a refined and stylish silhouette.",
material: "Soft Woven Fabric",
fit: "Cinched Waist",
care: "Machine wash cold",
tags: ["new", "elegant", "lantern-sleeve", "burgundy", "tops"]
},

{
id: 33,
name: " Embroidered Blouse Party Wear Top",
category: "tops",
categoryName: "tops",
price: 1499,
oldPrice: 1999,
discount: 25,
rating: 4.5,
reviews: 76,
badge: "New",
colors: [
    { name: "White", value: "#FFFFFF" }
],
sizes: ["S", "M", "L", "XL"],
image: "images/tops/top5.webp",
image2: "images/tops/top5.webp",
description: "An elegant white net full sleeve party wear top designed with a delicate sheer texture and a stylish silhouette, perfect for parties, evening outings, and special occasions.",
material: "Net Fabric",
fit: "Regular Fit",
care: "Hand wash gently",
tags: ["party-wear", "full-sleeve", "white", "net", "tops"]
},

{
id: 34,
name: "Classic Denim Top",
category: "tops",
categoryName: "tops",
price: 1299,
oldPrice: 1799,
discount: 28,
rating: 4.5,
reviews: 64,
badge: "New",
colors: [
    { name: "Denim Blue", value: "#416788" }
],
sizes: ["S", "M", "L", "XL"],
image: "images/tops/top6.jpg",
image2: "images/tops/top6.jpg",
description: "A classic denim top designed with a timeless style and a comfortable silhouette, perfect for casual outings, everyday wear, and effortless chic looks.",
material: "Denim Cotton Blend",
fit: "Regular Fit",
care: "Machine wash cold",
tags: ["classic", "denim", "blue", "casual", "tops"]
},

{
id: 35,
name: "Casual polyster Ribbed Zip-Neck Top",
category: "tops",
categoryName: "tops",
price: 999,
oldPrice: 1499,
discount: 33,
rating: 4.4,
reviews: 58,
badge: "Trending",
colors: [
    { name: "Black", value: "#000000" }
],
sizes: ["S", "M", "L", "XL"],
image: "images/tops/top7.webp",
image2: "images/tops/top7.webp",
description: "A stylish black ribbed top featuring a round zipper neckline and half sleeves, crafted for a comfortable fit and a modern casual look. Perfect for everyday wear, outings, and effortless styling.",
material: "Polyester Ribbed Blend",
fit: "Regular Fit",
care: "Machine wash cold",
tags: ["casual", "black", "ribbed", "zip-neck", "half-sleeve", "tops"]
},

{
id: 36,
name: "Women Oversized Cotton Jersey Tshirt Loose Fit Streetwear Casual Top ",
category: "tops",
categoryName: "tops",
price: 1099,
oldPrice: 1599,
discount: 31,
rating: 4.5,
reviews: 68,
badge: "Trending",
colors: [
    { name: "Cream & Brown", value: "#D8C7A5" }
],
sizes: ["S", "M", "L", "XL"],
image: "images/tops/top8.webp",
image2: "images/tops/top8.webp",
description: "A trendy oversized cotton jersey T-shirt featuring a stylish two-tone cream and brown color combination. Designed with a relaxed silhouette and half sleeves, it is perfect for casual outings, streetwear looks, and everyday comfort.",
material: "Cotton Jersey",
fit: "Oversized Fit",
care: "Machine wash cold",
tags: ["oversized", "two-tone", "cream", "brown", "streetwear", "t-shirt", "tops"]
},

{
id: 37,
name: "Classic Grey Button-Down Shirt",
category: "tops",
categoryName: "tops",
price: 1199,
oldPrice: 1699,
discount: 29,
rating: 4.5,
reviews: 62,
badge: "New",
colors: [
    { name: "Grey", value: "#808080" }
],
sizes: ["S", "M", "L", "XL"],
image: "images/tops/top9.jpg",
image2: "images/tops/top9.jpg",
description: "A classic grey women's shirt designed with a timeless silhouette and a versatile look, perfect for casual outings, office wear, and everyday styling.",
material: "Cotton Blend",
fit: "Regular Fit",
care: "Machine wash cold",
tags: ["grey", "shirt", "button-down", "casual", "women", "tops"]
},

{

id: 38,
name: "Long Sleeve Top",
category: "tops",
categoryName: "tops",
price: 1199,
oldPrice: 1699,
discount: 29,
rating: 4.5,
reviews: 76,
badge: "New",
colors: [
    { name: "Brown", value: "#8B5E3C" }
],
sizes: ["S", "M", "L", "XL"],
image: "images/tops/top10.webp",
image2: "images/tops/top10.webp",
description: "A stylish brown long sleeve top designed with a comfortable silhouette for a polished and versatile everyday look.",
material: "Soft Cotton Blend",
fit: "Regular Fit",
care: "Machine wash cold",
tags: ["new", "long-sleeve", "brown", "tops"]
},

{
id: 39,
name: "Sunset Orange Ribbed Tube Crop Top",
category: "tops",
categoryName: "tops",
price: 799,
oldPrice: 1199,
discount: 33,
rating: 4.4,
reviews: 54,
badge: "Trending",
colors: [
    { name: "Orange", value: "#F28C28" }
],
sizes: ["S", "M", "L", "XL"],
image: "images/tops/top11.webp",
image2: "images/tops/top11.webp",
description: "A trendy orange ribbed strapless tube crop top featuring a sleek, minimal design and a comfortable fit. Perfect for casual outings, summer styling, and fashionable layered looks.",
material: "Ribbed Stretch Fabric",
fit: "Slim Fit",
care: "Hand wash gently",
tags: ["orange", "ribbed", "strapless", "tube-top", "crop-top", "trendy", "tops"]
},

{
id: 40,
name: "Ivory Bloom Floral Puff Sleeve Top",
category: "tops",
categoryName: "tops",
price: 1099,
oldPrice: 1599,
discount: 31,
rating: 4.5,
reviews: 67,
badge: "New",
colors: [
    { name: "Cream", value: "#F5F0E6" }
],
sizes: ["S", "M", "L", "XL"],
image: "images/tops/top12.webp",
image2: "images/tops/top12.webp",
description: "A charming cream cotton top featuring delicate small floral prints and elegant puff sleeves. Designed for a soft, feminine look, it is perfect for casual outings, brunch dates, and everyday styling.",
material: "Cotton",
fit: "Regular Fit",
care: "Machine wash cold",
tags: ["floral", "cream", "puff-sleeve", "cotton", "printed", "tops"]
},

{
id: 41,
name: "Elegant Top & Pant Set",
category: "co-ord-sets",
categoryName: "Co-ord Sets",
price: 2499,
oldPrice: 3499,
discount: 29,
rating: 4.7,
reviews: 64,
badge: "New Arrival",
colors: [
{ name: "Beige", value: "#D8C7B2" },
{ name: "Black", value: "#171717" },
{ name: "White", value: "#F5F3EF" }
],
sizes: ["S", "M", "L", "XL"],
image: "https://images.openai.com/static-rsc-4/jUYSZGov52nTr7z6ECaOz3ci1LyQXM5HLYfEvKGVlXXdlyk6ce6ZWo5jnwXHnx8y-ZmhtIYcO7T3dlSqZKWfBY12NMK5qz1BIMlv4YujYYf9thzQ2FMu_W4iN6tokSvYOcp9CaN6yWSsGfUh0eL-gCAUFaXz0kpHlaq-YkPRaETkohe2GJHviFmqRTqafiz0?purpose=fullsize",
image2: "https://images.openai.com/static-rsc-4/jUYSZGov52nTr7z6ECaOz3ci1LyQXM5HLYfEvKGVlXXdlyk6ce6ZWo5jnwXHnx8y-ZmhtIYcO7T3dlSqZKWfBY12NMK5qz1BIMlv4YujYYf9thzQ2FMu_W4iN6tokSvYOcp9CaN6yWSsGfUh0eL-gCAUFaXz0kpHlaq-YkPRaETkohe2GJHviFmqRTqafiz0?purpose=fullsize",
description: "A stylish matching top and pant set designed for casual outings, everyday wear, and modern minimal styling.",
material: "Polyester Blend",
fit: "Regular Fit",
care: "Follow garment care label",
tags: ["co-ord-sets", "casual", "trending"]
},

{
id: 42,
name: "Classic Long Coat",
category: "jackets-coats",
categoryName: "Jackets & Coats",
price: 3299,
oldPrice: 4599,
discount: 28,
rating: 4.8,
reviews: 52,
badge: "Bestseller",
colors: [
{ name: "Camel", value: "#C19A6B" },
{ name: "Black", value: "#171717" },
{ name: "Cream", value: "#E8DDCC" }
],
sizes: ["S", "M", "L", "XL"],
image: "https://images.openai.com/static-rsc-4/gT-rF0VtUuJFHpskSW3duILCeH0tH_fmrF9S_k-2dmBP-mdDU9CiMl7IMhRyVKSvskLiXwMKRjTPSCg_-S52s634nTs5GS89M8C4EbfADSpcccTTQm5HiKEs1vzGeXkeU6u7pZ0crhjmp1lp6NYSeOyuN3cUAyv0NJVdsIFveMi34scusX9TFF6r1obkpFsb?purpose=fullsize",
image2: "https://images.openai.com/static-rsc-4/gT-rF0VtUuJFHpskSW3duILCeH0tH_fmrF9S_k-2dmBP-mdDU9CiMl7IMhRyVKSvskLiXwMKRjTPSCg_-S52s634nTs5GS89M8C4EbfADSpcccTTQm5HiKEs1vzGeXkeU6u7pZ0crhjmp1lp6NYSeOyuN3cUAyv0NJVdsIFveMi34scusX9TFF6r1obkpFsb?purpose=fullsize",
description: "A timeless long coat with an elegant silhouette, perfect for layering over formal outfits and everyday winter looks.",
material: "Wool Blend",
fit: "Regular Fit",
care: "Dry clean recommended",
tags: ["outerwear", "formal", "winter"]
},


];


/* =========================================================
   LOCAL STORAGE
========================================================= */

const STORAGE_KEYS = {
    cart: "lumiere_cart",
    wishlist: "lumiere_wishlist"
};

let cart = loadStorage(STORAGE_KEYS.cart, []);
let wishlist = loadStorage(STORAGE_KEYS.wishlist, []);


/* Make sure old localStorage values are numbers */
cart = Array.isArray(cart) ? cart : [];
wishlist = Array.isArray(wishlist)
    ? wishlist.map(Number)
    : [];


function loadStorage(key, fallback) {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch (error) {
        return fallback;
    }
}


function saveStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


/* =========================================================
   HELPERS
========================================================= */

function formatPrice(price) {
    return "₹" + Number(price).toLocaleString("en-IN");
}


function getProduct(id) {
    return products.find(product => product.id === Number(id));
}


function getCartCount() {
    return cart.reduce((total, item) => {
        return total + Number(item.quantity || 0);
    }, 0);
}


function getCartTotal() {
    return cart.reduce((total, item) => {
        const product = getProduct(item.id);

        if (!product) {
            return total;
        }

        return total + product.price * Number(item.quantity || 0);
    }, 0);
}


function getWishlistCount() {
    return wishlist.length;
}


/* =========================================================
   HEADER COUNTS
========================================================= */

function updateHeaderCounts() {
    document.querySelectorAll(".cart-count").forEach(element => {
        element.textContent = getCartCount();
    });

    document.querySelectorAll(".wishlist-count").forEach(element => {
        element.textContent = getWishlistCount();
    });
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product, index = 0) {
    const isWishlisted = wishlist.includes(product.id);

    const colorsHTML = product.colors
        .slice(0, 4)
        .map(color => {
            return `
                <span
                    class="color-dot"
                    title="${color.name}"
                    style="background:${color.value}">
                </span>
            `;
        })
        .join("");

    let badgeClass = "";

    if (product.badge) {
        const badge = product.badge.toLowerCase();

        if (badge.includes("sale")) {
            badgeClass = "sale";
        } else if (badge.includes("new")) {
            badgeClass = "new";
        }
    }

    return `
        <article
            class="product-card"
            data-product-id="${product.id}"
            style="animation-delay:${index * 0.06}s">

            <div class="product-image-wrapper">

                <img
                    class="product-image-primary"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy">

                <img
                    class="product-image-secondary"
                    src="${product.image2}"
                    alt="${product.name}"
                    loading="lazy">

                ${
                    product.badge
                        ? `
                            <span class="product-badge ${badgeClass}">
                                ${product.badge}
                            </span>
                        `
                        : ""
                }

                <button
                    class="product-wishlist ${isWishlisted ? "active" : ""}"
                    data-wishlist="${product.id}"
                    aria-label="Add to wishlist">

                    <i class="${
                        isWishlisted
                            ? "fa-solid fa-heart"
                            : "fa-regular fa-heart"
                    }"></i>

                </button>

                <button
                    class="product-quick-add"
                    data-quick-add="${product.id}">

                    <i class="fa-solid fa-bag-shopping"></i>
                    Quick Add

                </button>

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.categoryName}
                </span>

                <a
                    href="product.html?id=${product.id}"
                    class="product-name">

                    ${product.name}

                </a>

                <div class="product-rating">

                    <span class="product-rating-stars">
                        ${createStars(product.rating)}
                    </span>

                    <span class="product-rating-number">
                        ${product.rating} (${product.reviews})
                    </span>

                </div>

                <div class="product-price">

                    <span class="current-price">
                        ${formatPrice(product.price)}
                    </span>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                    <span class="discount">
                        ${product.discount}% OFF
                    </span>

                </div>

                <div class="product-colors">
                    ${colorsHTML}
                </div>

            </div>

        </article>
    `;
}


function createStars(rating) {
    let html = "";

    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fa-solid fa-star"></i>';
    }

    if (hasHalf) {
        html += '<i class="fa-solid fa-star-half-stroke"></i>';
    }

    return html;
}


/* =========================================================
   HOME PRODUCTS
========================================================= */

function renderHomeProducts() {
    const arrivalsContainer =
        document.getElementById("homeNewArrivals");

    const trendingContainer =
        document.getElementById("homeTrending");


    if (arrivalsContainer) {
        const arrivals = products
            .filter(product => product.tags.includes("new"))
            .slice(0, 8);

        arrivalsContainer.innerHTML = arrivals
            .map((product, index) => {
                return createProductCard(product, index);
            })
            .join("");
    }


    if (trendingContainer) {
        const trending = products
            .filter(product => product.tags.includes("trending"))
            .slice(0, 8);

        trendingContainer.innerHTML = trending
            .map((product, index) => {
                return createProductCard(product, index);
            })
            .join("");
    }
}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(productId) {
    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const id = Number(productId);
    const existingIndex = wishlist.indexOf(id);

    if (existingIndex !== -1) {
        wishlist.splice(existingIndex, 1);

        showToast(
            product.name + " removed from wishlist."
        );
    } else {
        wishlist.push(id);

        showToast(
            product.name + " added to wishlist.",
            "success"
        );
    }

    saveStorage(STORAGE_KEYS.wishlist, wishlist);

    updateHeaderCounts();
    refreshProductCards();
    renderWishlistPage();
}


function refreshProductCards() {
    const containers = [
        document.getElementById("homeNewArrivals"),
        document.getElementById("homeTrending"),
        document.getElementById("shopProductGrid"),
        document.getElementById("wishlistProducts"),
        document.getElementById("relatedProducts")
    ];

    containers
        .filter(Boolean)
        .forEach(container => {
            container
                .querySelectorAll("[data-product-id]")
                .forEach(card => {
                    const id = Number(
                        card.dataset.productId
                    );

                    const button =
                        card.querySelector("[data-wishlist]");

                    if (!button) {
                        return;
                    }

                    const active =
                        wishlist.includes(id);

                    button.classList.toggle(
                        "active",
                        active
                    );

                    button.innerHTML = active
                        ? '<i class="fa-solid fa-heart"></i>'
                        : '<i class="fa-regular fa-heart"></i>';
                });
        });
}


/* =========================================================
   CART
========================================================= */

function addToCart(
    productId,
    quantity = 1,
    color = null,
    size = null
) {
    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const finalColor =
        color || product.colors[0]?.name || "";

    const finalSize =
        size || product.sizes[0] || "";

    const existing = cart.find(item => {
        return (
            Number(item.id) === Number(productId) &&
            item.color === finalColor &&
            item.size === finalSize
        );
    });


    if (existing) {
        existing.quantity += Number(quantity);
    } else {
        cart.push({
            id: Number(productId),
            quantity: Number(quantity),
            color: finalColor,
            size: finalSize
        });
    }


    saveStorage(STORAGE_KEYS.cart, cart);

    updateHeaderCounts();

    showToast(
        product.name + " added to your bag.",
        "success"
    );
}


function removeFromCart(index) {
    if (!cart[index]) {
        return;
    }

    cart.splice(index, 1);

    saveStorage(STORAGE_KEYS.cart, cart);

    updateHeaderCounts();
    renderCartPage();

    showToast("Item removed from your bag.");
}


function changeCartQuantity(index, change) {
    if (!cart[index]) {
        return;
    }

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveStorage(STORAGE_KEYS.cart, cart);

    updateHeaderCounts();
    renderCartPage();
}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {
    const searchToggle =
        document.getElementById("searchToggle");

    const searchPanel =
        document.getElementById("searchPanel");

    const closeSearch =
        document.getElementById("closeSearch");

    const globalSearch =
        document.getElementById("globalSearch");

    const searchSuggestions =
        document.getElementById("searchSuggestions");


    searchToggle?.addEventListener("click", () => {
        searchPanel?.classList.toggle("active");

        if (searchPanel?.classList.contains("active")) {
            setTimeout(() => {
                globalSearch?.focus();
            }, 250);
        }
    });


    closeSearch?.addEventListener("click", () => {
        searchPanel?.classList.remove("active");

        if (globalSearch) {
            globalSearch.value = "";
        }

        if (searchSuggestions) {
            searchSuggestions.innerHTML = "";
        }
    });


    globalSearch?.addEventListener("input", () => {
        const query =
            globalSearch.value.trim().toLowerCase();

        if (!searchSuggestions) {
            return;
        }

        if (!query) {
            searchSuggestions.innerHTML = "";
            return;
        }


        const matches = products
            .filter(product => {
                return (
                    product.name
                        .toLowerCase()
                        .includes(query) ||

                    product.category
                        .toLowerCase()
                        .includes(query) ||

                    product.categoryName
                        .toLowerCase()
                        .includes(query)
                );
            })
            .slice(0, 6);


        if (!matches.length) {
            searchSuggestions.innerHTML = `
                <div class="search-suggestion">
                    No products found for "${query}"
                </div>
            `;

            return;
        }


        searchSuggestions.innerHTML = matches
            .map(product => {
                return `
                    <a
                        href="product.html?id=${product.id}"
                        class="search-suggestion">

                        <span>
                            ${product.name}
                        </span>

                        <small>
                            ${formatPrice(product.price)}
                        </small>

                    </a>
                `;
            })
            .join("");
    });
}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {
    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileNavigation =
        document.getElementById("mobileNavigation");

    const closeMobileMenu =
        document.getElementById("closeMobileMenu");

    const mobileMenuOverlay =
        document.getElementById("mobileMenuOverlay");


    function openMenu() {
        mobileNavigation?.classList.add("active");
        mobileMenuOverlay?.classList.add("active");
        document.body.classList.add("menu-open");
    }


    function closeMenu() {
        mobileNavigation?.classList.remove("active");
        mobileMenuOverlay?.classList.remove("active");
        document.body.classList.remove("menu-open");
    }


    mobileMenuBtn?.addEventListener(
        "click",
        openMenu
    );

    closeMobileMenu?.addEventListener(
        "click",
        closeMenu
    );

    mobileMenuOverlay?.addEventListener(
        "click",
        closeMenu
    );
}


/* =========================================================
   HEADER SCROLL
========================================================= */

function setupScrollHeader() {
    const siteHeader =
        document.getElementById("siteHeader");

    const backToTop =
        document.getElementById("backToTop");


    window.addEventListener(
        "scroll",
        () => {
            const scrollY = window.scrollY;

            siteHeader?.classList.toggle(
                "scrolled",
                scrollY > 120
            );

            backToTop?.classList.toggle(
                "visible",
                scrollY > 500
            );
        },
        { passive: true }
    );


    backToTop?.addEventListener(
        "click",
        () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* =========================================================
   NEWSLETTER
========================================================= */

function setupNewsletter() {
    const newsletterForm =
        document.getElementById("newsletterForm");

    newsletterForm?.addEventListener(
        "submit",
        event => {
            event.preventDefault();

            const emailInput =
                document.getElementById("newsletterEmail");

            const email =
                emailInput?.value.trim();

            if (!email) {
                return;
            }

            showToast(
                "Thank you for subscribing to LUMIÈRE!",
                "success"
            );

            newsletterForm.reset();
        }
    );
}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    type = "default"
) {
    const container =
        document.getElementById("toastContainer");

    if (!container) {
        return;
    }


    const toast =
        document.createElement("div");

    toast.className =
        "toast " + type;


    toast.innerHTML = `
        <i class="${
            type === "error"
                ? "fa-solid fa-circle-exclamation"
                : "fa-solid fa-circle-check"
        }"></i>

        <span>${message}</span>
    `;


    container.appendChild(toast);


    setTimeout(() => {
        toast.classList.add("hide");

        setTimeout(() => {
            toast.remove();
        }, 350);
    }, 2800);
}


/* =========================================================
   URL PARAMETER
========================================================= */

function getURLParameter(parameter) {
    const params =
        new URLSearchParams(
            window.location.search
        );

    return params.get(parameter);
}


/* =========================================================
   PRODUCT PAGE
========================================================= */

function renderProductPage() {
    const productContainer =
        document.getElementById("productDetails");

    if (!productContainer) {
        return;
    }


    const id =
        Number(getURLParameter("id"));

    const product =
        getProduct(id);


    if (!product) {
        productContainer.innerHTML = `
            <div class="empty-state">

                <i class="fa-regular fa-face-frown"></i>

                <h3>Product not found</h3>

                <p>
                    The product you're looking for doesn't exist.
                </p>

                <a
                    href="shop.html"
                    class="btn btn-dark">

                    Back To Shop

                </a>

            </div>
        `;

        return;
    }


    productContainer.innerHTML = `
        <div class="product-detail-layout">

            <div class="product-detail-gallery">

                <div class="product-main-image">

                    <img
                        id="detailMainImage"
                        src="${product.image}"
                        alt="${product.name}">

                </div>

                <div class="product-thumbnails">

                    <button
                        class="detail-thumbnail active"
                        data-image="${product.image}">

                        <img
                            src="${product.image}"
                            alt="${product.name}">

                    </button>

                    <button
                        class="detail-thumbnail"
                        data-image="${product.image2}">

                        <img
                            src="${product.image2}"
                            alt="${product.name}">

                    </button>

                </div>

            </div>


            <div class="product-detail-info">

                <span class="product-category">
                    ${product.categoryName}
                </span>

                <h1>
                    ${product.name}
                </h1>

                <div class="detail-rating">

                    <span>
                        ${createStars(product.rating)}
                    </span>

                    <span>
                        ${product.rating}
                        (${product.reviews} reviews)
                    </span>

                </div>

                <div class="detail-price">

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                    <del>
                        ${formatPrice(product.oldPrice)}
                    </del>

                    <span>
                        ${product.discount}% OFF
                    </span>

                </div>

                <p class="detail-description">
                    ${product.description}
                </p>


                <div class="detail-option">

                    <div class="detail-option-heading">

                        <strong>
                            Color
                        </strong>

                        <span id="selectedColor">
                            ${product.colors[0].name}
                        </span>

                    </div>

                    <div class="detail-colors">

                        ${product.colors
                            .map((color, index) => {
                                return `
                                    <button
                                        class="detail-color ${
                                            index === 0
                                                ? "selected"
                                                : ""
                                        }"
                                        data-color="${color.name}"
                                        title="${color.name}"
                                        style="background:${color.value}">
                                    </button>
                                `;
                            })
                            .join("")}

                    </div>

                </div>


                <div class="detail-option">

                    <div class="detail-option-heading">

                        <strong>
                            Size
                        </strong>

                        <a href="#">
                            Size Guide
                        </a>

                    </div>

                    <div class="detail-sizes">

                        ${product.sizes
                            .map((size, index) => {
                                return `
                                    <button
                                        class="detail-size ${
                                            index === 0
                                                ? "selected"
                                                : ""
                                        }"
                                        data-size="${size}">

                                        ${size}

                                    </button>
                                `;
                            })
                            .join("")}

                    </div>

                </div>


                <div class="detail-quantity">

                    <button id="detailMinus">
                        −
                    </button>

                    <span id="detailQuantity">
                        1
                    </span>

                    <button id="detailPlus">
                        +
                    </button>

                </div>


                <button
                    class="btn btn-dark detail-add-cart"
                    id="detailAddCart">

                    <i class="fa-solid fa-bag-shopping"></i>

                    Add To Bag

                </button>


                <button
                    class="detail-wishlist-button"
                    id="detailWishlist">

                    <i class="${
                        wishlist.includes(product.id)
                            ? "fa-solid"
                            : "fa-regular"
                    } fa-heart"></i>

                    ${
                        wishlist.includes(product.id)
                            ? "Saved To Wishlist"
                            : "Add To Wishlist"
                    }

                </button>


                <div class="detail-features">

                    <div>
                        <i class="fa-solid fa-truck-fast"></i>
                        <span>
                            Free shipping over ₹999
                        </span>
                    </div>

                    <div>
                        <i class="fa-solid fa-arrow-rotate-left"></i>
                        <span>
                            Easy 7-day returns
                        </span>
                    </div>

                    <div>
                        <i class="fa-solid fa-shield-halved"></i>
                        <span>
                            Secure checkout
                        </span>
                    </div>

                </div>


                <div class="detail-meta">

                    <p>
                        <strong>
                            Material:
                        </strong>

                        ${product.material}
                    </p>

                    <p>
                        <strong>
                            Fit:
                        </strong>

                        ${product.fit}
                    </p>

                    <p>
                        <strong>
                            Care:
                        </strong>

                        ${product.care}
                    </p>

                </div>

            </div>

        </div>
    `;


    setupProductDetailInteractions(product);
    renderRelatedProducts(product);
}


/* =========================================================
   PRODUCT DETAIL INTERACTIONS
========================================================= */

function setupProductDetailInteractions(product) {
    let quantity = 1;

    let selectedColor =
        product.colors[0]?.name || "";

    let selectedSize =
        product.sizes[0] || "";


    const quantityElement =
        document.getElementById("detailQuantity");


    document
        .getElementById("detailPlus")
        ?.addEventListener(
            "click",
            () => {
                quantity++;

                if (quantityElement) {
                    quantityElement.textContent =
                        quantity;
                }
            }
        );


    document
        .getElementById("detailMinus")
        ?.addEventListener(
            "click",
            () => {
                if (quantity > 1) {
                    quantity--;

                    if (quantityElement) {
                        quantityElement.textContent =
                            quantity;
                    }
                }
            }
        );


    document
        .querySelectorAll(".detail-color")
        .forEach(button => {
            button.addEventListener(
                "click",
                () => {
                    document
                        .querySelectorAll(
                            ".detail-color"
                        )
                        .forEach(item => {
                            item.classList.remove(
                                "selected"
                            );
                        });

                    button.classList.add(
                        "selected"
                    );

                    selectedColor =
                        button.dataset.color;

                    const colorText =
                        document.getElementById(
                            "selectedColor"
                        );

                    if (colorText) {
                        colorText.textContent =
                            selectedColor;
                    }
                }
            );
        });


    document
        .querySelectorAll(".detail-size")
        .forEach(button => {
            button.addEventListener(
                "click",
                () => {
                    document
                        .querySelectorAll(
                            ".detail-size"
                        )
                        .forEach(item => {
                            item.classList.remove(
                                "selected"
                            );
                        });

                    button.classList.add(
                        "selected"
                    );

                    selectedSize =
                        button.dataset.size;
                }
            );
        });


    document
        .querySelectorAll(".detail-thumbnail")
        .forEach(button => {
            button.addEventListener(
                "click",
                () => {
                    document
                        .querySelectorAll(
                            ".detail-thumbnail"
                        )
                        .forEach(item => {
                            item.classList.remove(
                                "active"
                            );
                        });

                    button.classList.add(
                        "active"
                    );

                    const image =
                        document.getElementById(
                            "detailMainImage"
                        );

                    if (image) {
                        image.src =
                            button.dataset.image;
                    }
                }
            );
        });


    document
        .getElementById("detailAddCart")
        ?.addEventListener(
            "click",
            () => {
                addToCart(
                    product.id,
                    quantity,
                    selectedColor,
                    selectedSize
                );
            }
        );


    document
        .getElementById("detailWishlist")
        ?.addEventListener(
            "click",
            () => {
                toggleWishlist(product.id);

                const button =
                    document.getElementById(
                        "detailWishlist"
                    );

                const active =
                    wishlist.includes(
                        product.id
                    );

                if (button) {
                    button.innerHTML = `
                        <i class="${
                            active
                                ? "fa-solid"
                                : "fa-regular"
                        } fa-heart"></i>

                        ${
                            active
                                ? "Saved To Wishlist"
                                : "Add To Wishlist"
                        }
                    `;
                }
            }
        );
}


/* =========================================================
   RELATED PRODUCTS
========================================================= */

function renderRelatedProducts(currentProduct) {
    const container =
        document.getElementById(
            "relatedProducts"
        );

    if (!container) {
        return;
    }


    const related = products
        .filter(product => {
            return (
                product.id !== currentProduct.id &&
                product.category ===
                    currentProduct.category
            );
        })
        .slice(0, 4);


    container.innerHTML = related
        .map((product, index) => {
            return createProductCard(
                product,
                index
            );
        })
        .join("");
}


/* =========================================================
   SHOP
========================================================= */

let shopState = {
    products: [...products],
    category: "all",
    search: "",
    sort: "featured",
    minPrice: 0,
    maxPrice: 5000
};


function renderShopPage() {
    const grid =
        document.getElementById(
            "shopProductGrid"
        );

    if (!grid) {
        return;
    }


    const filtered =
        applyShopFilters();


    const count =
        document.getElementById(
            "shopProductCount"
        );


    if (count) {
        count.textContent =
            filtered.length + " products";
    }


    if (!filtered.length) {
        grid.innerHTML = `
            <div
                class="empty-state"
                style="grid-column:1/-1">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>
                    No products found
                </h3>

                <p>
                    Try changing your filters or search.
                </p>

            </div>
        `;

        return;
    }


    grid.innerHTML = filtered
        .map((product, index) => {
            return createProductCard(
                product,
                index
            );
        })
        .join("");
}


function applyShopFilters() {
    let result =
        [...shopState.products];


    if (shopState.category !== "all") {
        result = result.filter(product => {
            return (
                product.category ===
                shopState.category
            );
        });
    }


    if (shopState.search) {
        const query =
            shopState.search.toLowerCase();

        result = result.filter(product => {
            return (
                product.name
                    .toLowerCase()
                    .includes(query) ||

                product.category
                    .toLowerCase()
                    .includes(query) ||

                product.categoryName
                    .toLowerCase()
                    .includes(query)
            );
        });
    }


    result = result.filter(product => {
        return (
            product.price >= shopState.minPrice &&
            product.price <= shopState.maxPrice
        );
    });


    switch (shopState.sort) {
        case "price-low":
            result.sort((a, b) => {
                return a.price - b.price;
            });
            break;

        case "price-high":
            result.sort((a, b) => {
                return b.price - a.price;
            });
            break;

        case "rating":
            result.sort((a, b) => {
                return b.rating - a.rating;
            });
            break;

        case "discount":
            result.sort((a, b) => {
                return b.discount - a.discount;
            });
            break;

        case "newest":
            result = result.filter(product => {
                return product.tags.includes("new");
            });
            break;

        case "trending":
            result = result.filter(product => {
                return product.tags.includes("trending");
            });
            break;
    }


    return result;
}


/* =========================================================
   SHOP CONTROLS
========================================================= */

function setupShopControls() {
    document
        .querySelectorAll(
            "[data-category-filter]"
        )
        .forEach(link => {
            link.addEventListener(
                "click",
                event => {
                    event.preventDefault();

                    shopState.category =
                        link.dataset.categoryFilter;

                    renderShopPage();
                }
            );
        });


    document
        .getElementById("shopSort")
        ?.addEventListener(
            "change",
            event => {
                shopState.sort =
                    event.target.value;

                renderShopPage();
            }
        );


    document
        .getElementById("shopSearch")
        ?.addEventListener(
            "input",
            event => {
                shopState.search =
                    event.target.value;

                renderShopPage();
            }
        );


    document
        .getElementById("minPrice")
        ?.addEventListener(
            "input",
            event => {
                shopState.minPrice =
                    Number(event.target.value);

                renderShopPage();
            }
        );


    document
        .getElementById("maxPrice")
        ?.addEventListener(
            "input",
            event => {
                shopState.maxPrice =
                    Number(event.target.value);

                renderShopPage();
            }
        );
}


/* =========================================================
   SHOP URL
========================================================= */

function initializeShopFromURL() {
    const category =
        getURLParameter("category");

    const sort =
        getURLParameter("sort");

    const search =
        getURLParameter("search");

    const discount =
        getURLParameter("discount");


    if (category) {
        shopState.category =
            category;
    }

    if (sort) {
        shopState.sort =
            sort;
    }

    if (search) {
        shopState.search =
            search;
    }

    if (discount === "sale") {
        shopState.products =
            products.filter(product => {
                return product.discount >= 35;
            });
    }
}


/* =========================================================
   WISHLIST PAGE
========================================================= */

function renderWishlistPage() {
    const container =
        document.getElementById(
            "wishlistProducts"
        );

    if (!container) {
        return;
    }


    const wishlistProducts =
        wishlist
            .map(id => getProduct(id))
            .filter(Boolean);


    if (!wishlistProducts.length) {
        container.innerHTML = `
            <div
                class="empty-state"
                style="grid-column:1/-1">

                <i class="fa-regular fa-heart"></i>

                <h3>
                    Your wishlist is empty
                </h3>

                <p>
                    Save the pieces you love
                    and find them here later.
                </p>

                <a
                    href="shop.html"
                    class="btn btn-dark">

                    Explore Shop

                </a>

            </div>
        `;

        return;
    }


    container.innerHTML =
        wishlistProducts
            .map((product, index) => {
                return createProductCard(
                    product,
                    index
                );
            })
            .join("");
}


/* =========================================================
   CART PAGE
========================================================= */

function renderCartPage() {
    const container =
        document.getElementById(
            "cartItems"
        );

    if (!container) {
        return;
    }


    const emptyCart =
        document.getElementById(
            "emptyCart"
        );

    const cartSummary =
        document.getElementById(
            "cartSummary"
        );


    if (!cart.length) {
        if (emptyCart) {
            emptyCart.style.display =
                "block";
        }

        if (cartSummary) {
            cartSummary.style.display =
                "none";
        }

        container.innerHTML = "";

        return;
    }


    if (emptyCart) {
        emptyCart.style.display =
            "none";
    }

    if (cartSummary) {
        cartSummary.style.display =
            "block";
    }


    container.innerHTML = cart
        .map((item, index) => {
            const product =
                getProduct(item.id);

            if (!product) {
                return "";
            }

            return `
                <div
                    class="cart-item"
                    data-cart-index="${index}">

                    <a
                        href="product.html?id=${product.id}"
                        class="cart-item-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}">

                    </a>


                    <div class="cart-item-info">

                        <span class="product-category">
                            ${product.categoryName}
                        </span>

                        <a
                            href="product.html?id=${product.id}"
                            class="product-name">

                            ${product.name}

                        </a>

                        <p class="cart-variant">

                            Color: ${item.color}

                            <br>

                            Size: ${item.size}

                        </p>

                        <strong class="cart-item-price">
                            ${formatPrice(product.price)}
                        </strong>


                        <div class="cart-quantity">

                            <button
                                data-cart-minus="${index}">

                                −

                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                data-cart-plus="${index}">

                                +

                            </button>

                        </div>

                    </div>


                    <button
                        class="cart-remove"
                        data-cart-remove="${index}"
                        aria-label="Remove item">

                        <i class="fa-solid fa-xmark"></i>

                    </button>

                </div>
            `;
        })
        .join("");


    updateCartSummary();
}


function updateCartSummary() {
    const subtotal =
        getCartTotal();


    const shipping =
        subtotal >= 999 || subtotal === 0
            ? 0
            : 99;


    const total =
        subtotal + shipping;


    const subtotalElement =
        document.getElementById(
            "cartSubtotal"
        );

    const shippingElement =
        document.getElementById(
            "cartShipping"
        );

    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (subtotalElement) {
        subtotalElement.textContent =
            formatPrice(subtotal);
    }


    if (shippingElement) {
        shippingElement.textContent =
            shipping === 0
                ? "FREE"
                : formatPrice(shipping);
    }


    if (totalElement) {
        totalElement.textContent =
            formatPrice(total);
    }
}


/* =========================================================
   CART EVENTS
========================================================= */

function setupCartEvents() {
    document.addEventListener(
        "click",
        event => {
            const plus =
                event.target.closest(
                    "[data-cart-plus]"
                );

            if (plus) {
                changeCartQuantity(
                    Number(
                        plus.dataset.cartPlus
                    ),
                    1
                );

                return;
            }


            const minus =
                event.target.closest(
                    "[data-cart-minus]"
                );

            if (minus) {
                changeCartQuantity(
                    Number(
                        minus.dataset.cartMinus
                    ),
                    -1
                );

                return;
            }


            const remove =
                event.target.closest(
                    "[data-cart-remove]"
                );

            if (remove) {
                removeFromCart(
                    Number(
                        remove.dataset.cartRemove
                    )
                );
            }
        }
    );
}


/* =========================================================
   CHECKOUT
========================================================= */

function renderCheckout() {
    const checkoutItems =
        document.getElementById(
            "checkoutItems"
        );

    if (!checkoutItems) {
        return;
    }


    if (!cart.length) {
        checkoutItems.innerHTML = `
            <div class="empty-state">

                <i class="fa-solid fa-bag-shopping"></i>

                <h3>
                    Your bag is empty
                </h3>

                <a
                    href="shop.html"
                    class="btn btn-dark">

                    Start Shopping

                </a>

            </div>
        `;

        return;
    }


    checkoutItems.innerHTML = cart
        .map(item => {
            const product =
                getProduct(item.id);

            if (!product) {
                return "";
            }

            return `
                <div class="checkout-item">

                    <div class="checkout-item-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}">

                        <span>
                            ${item.quantity}
                        </span>

                    </div>


                    <div>

                        <strong>
                            ${product.name}
                        </strong>

                        <small>
                            ${item.color} / ${item.size}
                        </small>

                    </div>


                    <strong>
                        ${formatPrice(
                            product.price *
                            item.quantity
                        )}
                    </strong>

                </div>
            `;
        })
        .join("");


    const subtotal =
        getCartTotal();


    const shipping =
        subtotal >= 999
            ? 0
            : 99;


    const checkoutSubtotal =
        document.getElementById(
            "checkoutSubtotal"
        );

    const checkoutShipping =
        document.getElementById(
            "checkoutShipping"
        );

    const checkoutTotal =
        document.getElementById(
            "checkoutTotal"
        );


    if (checkoutSubtotal) {
        checkoutSubtotal.textContent =
            formatPrice(subtotal);
    }


    if (checkoutShipping) {
        checkoutShipping.textContent =
            shipping === 0
                ? "FREE"
                : formatPrice(shipping);
    }


    if (checkoutTotal) {
        checkoutTotal.textContent =
            formatPrice(
                subtotal + shipping
            );
    }
}


function setupCheckoutForm() {
    const checkoutForm =
        document.getElementById(
            "checkoutForm"
        );

    checkoutForm?.addEventListener(
        "submit",
        event => {
            event.preventDefault();


            if (!cart.length) {
                showToast(
                    "Your bag is empty.",
                    "error"
                );

                return;
            }


            showToast(
                "Order placed successfully! Thank you for shopping with LUMIÈRE.",
                "success"
            );


            cart = [];

            saveStorage(
                STORAGE_KEYS.cart,
                cart
            );

            updateHeaderCounts();


            setTimeout(() => {
                window.location.href =
                    "index.html";
            }, 1800);
        }
    );
}


/* =========================================================
   CATEGORY COUNTS
========================================================= */

function renderCategoryCounts() {
    document
        .querySelectorAll(
            "[data-category-count]"
        )
        .forEach(element => {
            const category =
                element.dataset.categoryCount;

            const count =
                products.filter(product => {
                    return (
                        product.category ===
                        category
                    );
                }).length;

            element.textContent =
                count + " Products";
        });
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function setupScrollReveal() {
    const elements =
        document.querySelectorAll(
            ".section-padding, .feature-strip, .editorial-section, .promo-section, .newsletter-section"
        );


    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => {
            element.classList.add(
                "visible"
            );
        });

        return;
    }


    elements.forEach(element => {
        element.classList.add("reveal");
    });


    const observer =
        new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: 0.08
            }
        );


    elements.forEach(element => {
        observer.observe(element);
    });
}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

document.addEventListener(
    "error",
    event => {
        if (
            event.target &&
            event.target.tagName === "IMG"
        ) {
            event.target.style.opacity =
                "0.4";
        }
    },
    true
);


/* =========================================================
   GLOBAL PRODUCT EVENTS
========================================================= */

function setupProductEvents() {
    document.addEventListener(
        "click",
        event => {
            const wishlistButton =
                event.target.closest(
                    "[data-wishlist]"
                );


            if (wishlistButton) {
                event.preventDefault();

                toggleWishlist(
                    Number(
                        wishlistButton.dataset.wishlist
                    )
                );

                return;
            }


            const quickAdd =
                event.target.closest(
                    "[data-quick-add]"
                );


            if (quickAdd) {
                event.preventDefault();

                addToCart(
                    Number(
                        quickAdd.dataset.quickAdd
                    ),
                    1
                );
            }
        }
    );
}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        updateHeaderCounts();

        renderHomeProducts();

        renderProductPage();

        initializeShopFromURL();

        setupShopControls();

        renderShopPage();

        renderWishlistPage();

        renderCartPage();

        renderCheckout();

        renderCategoryCounts();

        setupSearch();

        setupMobileMenu();

        setupScrollHeader();

        setupNewsletter();

        setupCartEvents();

        setupCheckoutForm();

        setupProductEvents();

        setupScrollReveal();
    }
);


/* =========================================================
   GLOBAL ACCESS
========================================================= */

window.Lumiere = {
    products,
    addToCart,
    toggleWishlist,
    formatPrice,
    getProduct
};