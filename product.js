/* =========================================================
   LUMIÈRE — PRODUCT PAGE JAVASCRIPT
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DOM READY
       ===================================================== */

    document.addEventListener("DOMContentLoaded", function () {

        initializeProductPage();

    });


    /* =====================================================
       INITIALIZE
       ===================================================== */

    function initializeProductPage() {

        const productContainer =
            document.getElementById("productDetails");

        if (!productContainer) {
            return;
        }

        renderProductPage();

        setupProductInteractions();

    }


    /* =====================================================
       GET PRODUCTS FROM MAIN SCRIPT
       ===================================================== */

    function getProducts() {

        if (
            window.Lumiere &&
            Array.isArray(window.Lumiere.products)
        ) {
            return window.Lumiere.products;
        }

        if (
            typeof products !== "undefined" &&
            Array.isArray(products)
        ) {
            return products;
        }

        return [];

    }


    /* =====================================================
       GET PRODUCT ID FROM URL
       ===================================================== */

    function getProductId() {

        const params =
            new URLSearchParams(window.location.search);

        const id =
            params.get("id");

        return Number(id);

    }


    /* =====================================================
       GET PRODUCT
       ===================================================== */

    function findProduct(id) {

        const allProducts = getProducts();

        return allProducts.find(function (product) {

            return Number(product.id) === Number(id);

        });

    }


    /* =====================================================
       FORMAT PRICE
       ===================================================== */

    function formatPrice(price) {

        if (
            window.Lumiere &&
            typeof window.Lumiere.formatPrice === "function"
        ) {
            return window.Lumiere.formatPrice(price);
        }

        return "₹" +
            Number(price || 0).toLocaleString("en-IN");

    }


    /* =====================================================
       GET WISHLIST
       ===================================================== */

    function getWishlist() {

        try {

            const saved =
                localStorage.getItem("lumiere_wishlist");

            if (!saved) {
                return [];
            }

            const data =
                JSON.parse(saved);

            return Array.isArray(data)
                ? data
                : [];

        } catch (error) {

            return [];

        }

    }


    /* =====================================================
       CHECK WISHLIST
       ===================================================== */

    function isInWishlist(id) {

        return getWishlist().some(function (item) {

            return Number(item.id) === Number(id);

        });

    }


    /* =====================================================
       RENDER PRODUCT PAGE
       ===================================================== */

    function renderProductPage() {

        const container =
            document.getElementById("productDetails");

        if (!container) {
            return;
        }

        const productId =
            getProductId();

        const product =
            findProduct(productId);


        /* PRODUCT NOT FOUND */

        if (!product) {

            container.innerHTML = `

                <div class="product-not-found">

                    <h2>
                        Product Not Found
                    </h2>

                    <p>
                        The product you're looking for may have
                        been removed or is no longer available.
                    </p>

                    <a href="shop.html">
                        Continue Shopping
                    </a>

                </div>

            `;

            return;

        }


        /* UPDATE PAGE TITLE */

        document.title =
            `${product.name} | LUMIÈRE`;


        /* IMAGES */

        const images =
            getProductImages(product);


        /* BADGE */

        let badgeHTML = "";

        if (product.badge) {

            const badgeClass =
                getBadgeClass(product.badge);

            badgeHTML = `

                <span class="product-image-badge ${badgeClass}">
                    ${escapeHTML(product.badge)}
                </span>

            `;

        }


        /* OLD PRICE */

        let oldPriceHTML = "";

        if (
            product.oldPrice &&
            Number(product.oldPrice) > Number(product.price)
        ) {

            oldPriceHTML = `

                <span class="product-old-price">
                    ${formatPrice(product.oldPrice)}
                </span>

            `;

        }


        /* DISCOUNT */

        let discountHTML = "";

        if (product.discount) {

            discountHTML = `

                <span class="product-discount">
                    ${product.discount}% OFF
                </span>

            `;

        }


        /* COLORS */

        const colors =
            Array.isArray(product.colors)
                ? product.colors
                : [];


        const colorHTML =
            colors.length
                ? colors.map(function (color, index) {

                    const colorName =
                        typeof color === "string"
                            ? color
                            : color.name;

                    const colorValue =
                        typeof color === "string"
                            ? getColorValue(color)
                            : color.value || getColorValue(color.name);

                    return `

                        <button
                            type="button"
                            class="color-option ${index === 0 ? "active" : ""}"
                            data-color="${escapeHTML(colorName)}"
                            title="${escapeHTML(colorName)}"
                            style="background:${escapeHTML(colorValue)}"
                            aria-label="${escapeHTML(colorName)}"
                        ></button>

                    `;

                }).join("")
                : `

                    <button
                        type="button"
                        class="color-option active"
                        style="background:#d8c7b8"
                        aria-label="Default color"
                    ></button>

                `;


        /* SIZES */

        const sizes =
            Array.isArray(product.sizes)
                ? product.sizes
                : ["XS", "S", "M", "L", "XL"];


        const sizeHTML =
            sizes.map(function (size, index) {

                return `

                    <button
                        type="button"
                        class="size-option ${index === 0 ? "active" : ""}"
                        data-size="${escapeHTML(size)}"
                    >
                        ${escapeHTML(size)}
                    </button>

                `;

            }).join("");


        /* WISHLIST STATE */

        const wishlistActive =
            isInWishlist(product.id);


        /* PRODUCT HTML */

        container.innerHTML = `

            <!-- PRODUCT GALLERY -->

            <div class="product-gallery">

                <div class="product-thumbnails">

                    ${images.map(function (image, index) {

                        return `

                            <button
                                type="button"
                                class="product-thumbnail ${index === 0 ? "active" : ""}"
                                data-product-image="${index}"
                            >

                                <img
                                    src="${image}"
                                    alt="${escapeHTML(product.name)} view ${index + 1}"
                                >

                            </button>

                        `;

                    }).join("")}

                </div>


                <div class="product-main-image">

                    <img
                        id="mainProductImage"
                        src="${images[0]}"
                        alt="${escapeHTML(product.name)}"
                    >

                    ${badgeHTML}

                </div>

            </div>


            <!-- PRODUCT INFORMATION -->

            <div class="product-info">

                <p class="product-category">
                    ${escapeHTML(
                        product.categoryName ||
                        product.category ||
                        "LUMIÈRE Collection"
                    )}
                </p>


                <h1 class="product-title">
                    ${escapeHTML(product.name)}
                </h1>


                <!-- RATING -->

                <div class="product-rating-row">

                    <span class="product-stars">
                        ${createStars(product.rating || 0)}
                    </span>

                    <span class="product-reviews">
                        ${Number(product.rating || 0).toFixed(1)}
                        ·
                        ${Number(product.reviews || 0)}
                        reviews
                    </span>

                </div>


                <!-- PRICE -->

                <div class="product-price-row">

                    <span class="product-price">
                        ${formatPrice(product.price)}
                    </span>

                    ${oldPriceHTML}

                    ${discountHTML}

                </div>


                <!-- DESCRIPTION -->

                <p class="product-description">
                    ${escapeHTML(
                        product.description ||
                        "A beautifully designed LUMIÈRE piece created to bring effortless elegance to your wardrobe."
                    )}
                </p>


                <!-- COLOR -->

                <div class="product-option">

                    <div class="product-option-header">

                        <span class="product-option-label">
                            Color
                        </span>

                        <span
                            class="product-option-value"
                            id="selectedColor"
                        >
                            ${colors.length
                                ? escapeHTML(
                                    typeof colors[0] === "string"
                                        ? colors[0]
                                        : colors[0].name
                                )
                                : "Default"}
                        </span>

                    </div>

                    <div class="color-options">

                        ${colorHTML}

                    </div>

                </div>


                <!-- SIZE -->

                <div class="product-option">

                    <div class="product-option-header">

                        <span class="product-option-label">
                            Size
                        </span>

                        <a
                            href="#"
                            class="size-guide"
                            id="sizeGuide"
                        >
                            Size Guide
                        </a>

                    </div>

                    <div class="size-options">

                        ${sizeHTML}

                    </div>

                </div>


                <!-- QUANTITY -->

                <div class="product-option">

                    <div class="product-option-header">

                        <span class="product-option-label">
                            Quantity
                        </span>

                    </div>

                    <div class="quantity-wrapper">

                        <button
                            type="button"
                            class="quantity-button"
                            data-quantity-minus
                            aria-label="Decrease quantity"
                        >
                            −
                        </button>

                        <input
                            type="number"
                            class="quantity-input"
                            id="productQuantity"
                            value="1"
                            min="1"
                            max="10"
                        >

                        <button
                            type="button"
                            class="quantity-button"
                            data-quantity-plus
                            aria-label="Increase quantity"
                        >
                            +
                        </button>

                    </div>

                </div>


                <!-- ACTIONS -->

                <div class="product-actions">

                    <button
                        type="button"
                        class="add-to-cart-button"
                        id="addProductToCart"
                        data-product-id="${product.id}"
                    >
                        Add to Cart
                    </button>

                    <button
                        type="button"
                        class="product-wishlist-button ${wishlistActive ? "active" : ""}"
                        id="productWishlistButton"
                        data-product-id="${product.id}"
                        aria-label="Add to wishlist"
                    >
                        ${wishlistActive ? "♥" : "♡"}
                    </button>

                </div>


                <!-- SERVICE INFORMATION -->

                <div class="product-service-info">

                    <div class="product-service-item">

                        <div class="product-service-icon">
                            ✓
                        </div>

                        <div>

                            <h4>
                                Quality Assured
                            </h4>

                            <p>
                                Carefully selected materials and
                                thoughtful craftsmanship.
                            </p>

                        </div>

                    </div>


                    <div class="product-service-item">

                        <div class="product-service-icon">
                            ↗
                        </div>

                        <div>

                            <h4>
                                Easy Delivery
                            </h4>

                            <p>
                                Reliable delivery to your doorstep.
                            </p>

                        </div>

                    </div>


                    <div class="product-service-item">

                        <div class="product-service-icon">
                            ↺
                        </div>

                        <div>

                            <h4>
                                Easy Returns
                            </h4>

                            <p>
                                Simple returns on eligible products.
                            </p>

                        </div>

                    </div>

                </div>


                <!-- PRODUCT INFORMATION -->

                <div class="product-information">

                    <div class="product-info-row">

                        <button
                            type="button"
                            class="product-info-toggle"
                        >
                            <span>
                                Description
                            </span>

                            <span>
                                +
                            </span>

                        </button>

                        <div class="product-info-content">

                            ${escapeHTML(
                                product.description ||
                                "Designed with a focus on comfort, quality and timeless style."
                            )}

                        </div>

                    </div>


                    <div class="product-info-row">

                        <button
                            type="button"
                            class="product-info-toggle"
                        >
                            <span>
                                Material & Fit
                            </span>

                            <span>
                                +
                            </span>

                        </button>

                        <div class="product-info-content">

                            <strong>Material:</strong>
                            ${escapeHTML(
                                product.material ||
                                "Premium fabric"
                            )}

                            <br>

                            <strong>Fit:</strong>
                            ${escapeHTML(
                                product.fit ||
                                "Comfortable fit"
                            )}

                        </div>

                    </div>


                    <div class="product-info-row">

                        <button
                            type="button"
                            class="product-info-toggle"
                        >
                            <span>
                                Care
                            </span>

                            <span>
                                +
                            </span>

                        </button>

                        <div class="product-info-content">

                            ${escapeHTML(
                                product.care ||
                                "Follow the garment care instructions for best results."
                            )}

                        </div>

                    </div>

                </div>

            </div>

        `;


        renderRelatedProducts(product);

        setupDynamicProductEvents(product);

    }


    /* =====================================================
       PRODUCT IMAGES
       ===================================================== */

    function getProductImages(product) {

        if (
            Array.isArray(product.images) &&
            product.images.length
        ) {

            return product.images;

        }

        if (product.image) {

            return [
                product.image,
                product.image,
                product.image
            ];

        }

        return [

            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85"

        ];

    }


    /* =====================================================
       BADGE
       ===================================================== */

    function getBadgeClass(badge) {

        const value =
            String(badge || "").toLowerCase();

        if (
            value.includes("sale") ||
            value.includes("off")
        ) {
            return "sale";
        }

        if (
            value.includes("new") ||
            value.includes("arrival") ||
            value.includes("latest")
        ) {
            return "new";
        }

        return "";

    }


    /* =====================================================
       STARS
       ===================================================== */

    function createStars(rating) {

        const rounded =
            Math.round(Number(rating) || 0);

        let result = "";

        for (let i = 1; i <= 5; i++) {

            result +=
                i <= rounded
                    ? "★"
                    : "☆";

        }

        return result;

    }


    /* =====================================================
       COLORS
       ===================================================== */

    function getColorValue(color) {

        const name =
            String(color || "").toLowerCase().trim();

        const colors = {

            black: "#171615",
            white: "#f5f3ef",
            ivory: "#eee6d6",
            cream: "#e7dcc9",
            beige: "#cbb79d",
            brown: "#765b49",
            chocolate: "#4a3025",
            camel: "#b48b62",
            tan: "#b99570",
            grey: "#96918c",
            gray: "#96918c",
            silver: "#c4c2bd",
            gold: "#c8a96b",
            pink: "#d8aaa9",
            rose: "#bd7e83",
            red: "#a84d50",
            burgundy: "#632c35",
            maroon: "#5b2930",
            green: "#697660",
            olive: "#777454",
            blue: "#647a92",
            navy: "#26384c",
            lavender: "#a89bb3",
            purple: "#77617e",
            orange: "#c77c55",
            yellow: "#d5b56c"

        };

        return colors[name] || "#c8b9aa";

    }


    /* =====================================================
       DYNAMIC PRODUCT EVENTS
       ===================================================== */

    function setupDynamicProductEvents(product) {

        /* IMAGE THUMBNAILS */

        document
            .querySelectorAll("[data-product-image]")
            .forEach(function (thumbnail) {

                thumbnail.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                thumbnail.dataset.productImage
                            );

                        const images =
                            getProductImages(product);

                        const mainImage =
                            document.getElementById(
                                "mainProductImage"
                            );

                        if (mainImage && images[index]) {

                            mainImage.src =
                                images[index];

                        }


                        document
                            .querySelectorAll(
                                ".product-thumbnail"
                            )
                            .forEach(function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            });


                        thumbnail.classList.add(
                            "active"
                        );

                    }
                );

            });


        /* COLORS */

        document
            .querySelectorAll(".color-option")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                ".color-option"
                            )
                            .forEach(function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            });


                        button.classList.add(
                            "active"
                        );


                        const selectedColor =
                            document.getElementById(
                                "selectedColor"
                            );

                        if (selectedColor) {

                            selectedColor.textContent =
                                button.dataset.color ||
                                "Selected";

                        }

                    }
                );

            });


        /* SIZES */

        document
            .querySelectorAll(".size-option")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                ".size-option"
                            )
                            .forEach(function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            });


                        button.classList.add(
                            "active"
                        );

                    }
                );

            });


        /* QUANTITY MINUS */

        const minusButton =
            document.querySelector(
                "[data-quantity-minus]"
            );

        if (minusButton) {

            minusButton.addEventListener(
                "click",
                function () {

                    changeQuantity(-1);

                }
            );

        }


        /* QUANTITY PLUS */

        const plusButton =
            document.querySelector(
                "[data-quantity-plus]"
            );

        if (plusButton) {

            plusButton.addEventListener(
                "click",
                function () {

                    changeQuantity(1);

                }
            );

        }


        /* QUANTITY INPUT */

        const quantityInput =
            document.getElementById(
                "productQuantity"
            );

        if (quantityInput) {

            quantityInput.addEventListener(
                "change",
                function () {

                    let value =
                        Number(quantityInput.value);

                    if (!Number.isFinite(value)) {
                        value = 1;
                    }

                    value =
                        Math.max(
                            1,
                            Math.min(10, Math.floor(value))
                        );

                    quantityInput.value =
                        value;

                }
            );

        }


        /* ADD TO CART */

        const addButton =
            document.getElementById(
                "addProductToCart"
            );

        if (addButton) {

            addButton.addEventListener(
                "click",
                function () {

                    const quantityInput =
                        document.getElementById(
                            "productQuantity"
                        );

                    const quantity =
                        quantityInput
                            ? Number(quantityInput.value) || 1
                            : 1;


                    if (
                        window.Lumiere &&
                        typeof window.Lumiere.addToCart ===
                            "function"
                    ) {

                        window.Lumiere.addToCart(
                            product.id,
                            quantity
                        );

                    } else {

                        addToCartFallback(
                            product,
                            quantity
                        );

                    }


                    const originalText =
                        addButton.textContent;

                    addButton.textContent =
                        "Added to Cart ✓";

                    setTimeout(function () {

                        addButton.textContent =
                            originalText;

                    }, 1500);

                }
            );

        }


        /* WISHLIST */

        const wishlistButton =
            document.getElementById(
                "productWishlistButton"
            );

        if (wishlistButton) {

            wishlistButton.addEventListener(
                "click",
                function () {

                    if (
                        window.Lumiere &&
                        typeof window.Lumiere.toggleWishlist ===
                            "function"
                    ) {

                        window.Lumiere.toggleWishlist(
                            product.id
                        );

                    } else {

                        toggleWishlistFallback(
                            product
                        );

                    }


                    setTimeout(function () {

                        const active =
                            isInWishlist(
                                product.id
                            );

                        wishlistButton.classList.toggle(
                            "active",
                            active
                        );

                        wishlistButton.textContent =
                            active
                                ? "♥"
                                : "♡";

                    }, 30);

                }
            );

        }


        /* ACCORDIONS */

        document
            .querySelectorAll(
                ".product-info-toggle"
            )
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const row =
                            button.closest(
                                ".product-info-row"
                            );

                        if (!row) {
                            return;
                        }

                        row.classList.toggle(
                            "open"
                        );

                    }
                );

            });


        /* SIZE GUIDE */

        const sizeGuide =
            document.getElementById(
                "sizeGuide"
            );

        if (sizeGuide) {

            sizeGuide.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    showToast(
                        "Choose your usual size for the best fit."
                    );

                }
            );

        }

    }


    /* =====================================================
       CHANGE QUANTITY
       ===================================================== */

    function changeQuantity(change) {

        const input =
            document.getElementById(
                "productQuantity"
            );

        if (!input) {
            return;
        }

        let value =
            Number(input.value) || 1;

        value += change;

        value =
            Math.max(
                1,
                Math.min(10, value)
            );

        input.value =
            value;

    }


    /* =====================================================
       FALLBACK CART
       ===================================================== */

    function addToCartFallback(product, quantity) {

        let cart = [];

        try {

            cart =
                JSON.parse(
                    localStorage.getItem(
                        "lumiere_cart"
                    ) || "[]"
                );

            if (!Array.isArray(cart)) {
                cart = [];
            }

        } catch (error) {

            cart = [];

        }


        const existing =
            cart.find(function (item) {

                return Number(item.id) ===
                    Number(product.id);

            });


        if (existing) {

            existing.quantity =
                Number(existing.quantity || 0) +
                Number(quantity);

        } else {

            cart.push({

                ...product,

                quantity: Number(quantity)

            });

        }


        localStorage.setItem(
            "lumiere_cart",
            JSON.stringify(cart)
        );


        updateCartCountFallback();

    }


    /* =====================================================
       FALLBACK WISHLIST
       ===================================================== */

    function toggleWishlistFallback(product) {

        let wishlist =
            getWishlist();

        const index =
            wishlist.findIndex(function (item) {

                return Number(item.id) ===
                    Number(product.id);

            });


        if (index >= 0) {

            wishlist.splice(
                index,
                1
            );

        } else {

            wishlist.push(
                product
            );

        }


        localStorage.setItem(
            "lumiere_wishlist",
            JSON.stringify(wishlist)
        );


        updateWishlistCountFallback();

    }


    /* =====================================================
       COUNTS
       ===================================================== */

    function updateCartCountFallback() {

        let cart = [];

        try {

            cart =
                JSON.parse(
                    localStorage.getItem(
                        "lumiere_cart"
                    ) || "[]"
                );

        } catch (error) {

            cart = [];

        }


        if (!Array.isArray(cart)) {
            cart = [];
        }


        const count =
            cart.reduce(function (
                total,
                item
            ) {

                return total +
                    Number(item.quantity || 0);

            }, 0);


        document
            .querySelectorAll(".cart-count")
            .forEach(function (element) {

                element.textContent =
                    count;

            });

    }


    function updateWishlistCountFallback() {

        const wishlist =
            getWishlist();

        document
            .querySelectorAll(".wishlist-count")
            .forEach(function (element) {

                element.textContent =
                    wishlist.length;

            });

    }


    /* =====================================================
       RELATED PRODUCTS
       ===================================================== */

    function renderRelatedProducts(currentProduct) {

        const container =
            document.getElementById(
                "relatedProducts"
            );

        if (!container) {
            return;
        }


        const allProducts =
            getProducts();


        let related =
            allProducts.filter(function (product) {

                return (
                    Number(product.id) !==
                        Number(currentProduct.id)
                ) &&
                (
                    String(product.category || "").toLowerCase() ===
                    String(currentProduct.category || "").toLowerCase()
                );

            });


        /* If fewer than 4 products in category,
           fill from remaining products */

        if (related.length < 4) {

            const additional =
                allProducts.filter(function (product) {

                    return (
                        Number(product.id) !==
                            Number(currentProduct.id)
                    ) &&
                    !related.some(function (item) {

                        return Number(item.id) ===
                            Number(product.id);

                    });

                });


            related =
                related.concat(
                    additional
                );

        }


        related =
            related.slice(0, 4);


        if (!related.length) {

            container.innerHTML = `
                <p>
                    More beautiful pieces are coming soon.
                </p>
            `;

            return;

        }


        container.innerHTML =
            related.map(function (product) {

                const active =
                    isInWishlist(product.id);


                const image =
                    getProductImages(product)[0];


                return `

                    <article class="related-product-card">

                        <div class="related-product-image">

                            <a
                                href="product.html?id=${product.id}"
                            >

                                <img
                                    src="${image}"
                                    alt="${escapeHTML(product.name)}"
                                    loading="lazy"
                                >

                            </a>


                            <button
                                type="button"
                                class="related-product-wishlist ${active ? "active" : ""}"
                                data-related-wishlist="${product.id}"
                                aria-label="Add to wishlist"
                            >
                                ${active ? "♥" : "♡"}
                            </button>

                        </div>


                        <div class="related-product-info">

                            <p class="related-product-category">
                                ${escapeHTML(
                                    product.categoryName ||
                                    product.category ||
                                    "Collection"
                                )}
                            </p>


                            <h3 class="related-product-name">

                                <a
                                    href="product.html?id=${product.id}"
                                >
                                    ${escapeHTML(product.name)}
                                </a>

                            </h3>


                            <div class="related-product-price">
                                ${formatPrice(product.price)}
                            </div>

                        </div>

                    </article>

                `;

            }).join("");


        setupRelatedWishlistEvents();

    }


    /* =====================================================
       RELATED WISHLIST
       ===================================================== */

    function setupRelatedWishlistEvents() {

        document
            .querySelectorAll(
                "[data-related-wishlist]"
            )
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const id =
                            Number(
                                button.dataset.relatedWishlist
                            );


                        if (
                            window.Lumiere &&
                            typeof window.Lumiere.toggleWishlist ===
                                "function"
                        ) {

                            window.Lumiere.toggleWishlist(
                                id
                            );

                        } else {

                            const product =
                                findProduct(id);

                            if (product) {

                                toggleWishlistFallback(
                                    product
                                );

                            }

                        }


                        setTimeout(function () {

                            const active =
                                isInWishlist(id);

                            button.classList.toggle(
                                "active",
                                active
                            );

                            button.textContent =
                                active
                                    ? "♥"
                                    : "♡";

                        }, 30);

                    }
                );

            });

    }


    /* =====================================================
       GENERAL PRODUCT INTERACTIONS
       ===================================================== */

    function setupProductInteractions() {

        /* Nothing global is required here currently.
           Main site interactions are handled by script.js. */

    }


    /* =====================================================
       TOAST
       ===================================================== */

    function showToast(message) {

        let container =
            document.getElementById(
                "toastContainer"
            );


        if (!container) {

            container =
                document.createElement(
                    "div"
                );

            container.id =
                "toastContainer";

            container.className =
                "toast-container";

            document.body.appendChild(
                container
            );

        }


        const toast =
            document.createElement(
                "div"
            );

        toast.className =
            "toast";

        toast.textContent =
            message;


        container.appendChild(
            toast
        );


        setTimeout(function () {

            toast.classList.add(
                "show"
            );

        }, 20);


        setTimeout(function () {

            toast.classList.remove(
                "show"
            );

            setTimeout(function () {

                toast.remove();

            }, 300);

        }, 2500);

    }


    /* =====================================================
       ESCAPE HTML
       ===================================================== */

    function escapeHTML(value) {

        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

})();