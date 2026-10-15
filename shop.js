/* =========================================================
   LUMIÈRE — SHOP PAGE JAVASCRIPT
   ========================================================= */

(function () {
    "use strict";

    /* -------------------------------------------------------
       WAIT FOR DOM
       ------------------------------------------------------- */

    document.addEventListener("DOMContentLoaded", function () {
        initializeShopPage();
    });

    /* -------------------------------------------------------
       INITIALIZE SHOP PAGE
       ------------------------------------------------------- */

    function initializeShopPage() {
        if (!document.body.classList.contains("shop-page") &&
            !document.getElementById("shopProductGrid") &&
            !document.getElementById("shopGrid")) {
            return;
        }

        setupShopFilters();
        setupShopSearch();
        setupShopSort();
        setupClearFilters();
        setupMobileFilter();
        setupShopProductEvents();

        renderShop();
    }

    /* -------------------------------------------------------
       GET PRODUCT DATA
       ------------------------------------------------------- */

    function getProducts() {
        if (window.Lumiere && Array.isArray(window.Lumiere.products)) {
            return window.Lumiere.products;
        }

        if (typeof products !== "undefined" && Array.isArray(products)) {
            return products;
        }

        return [];
    }

    /* -------------------------------------------------------
       FIND SHOP GRID
       ------------------------------------------------------- */

    function getShopGrid() {
        return document.getElementById("shopProductGrid") ||
               document.getElementById("shopGrid") ||
               document.querySelector(".shop-product-grid");
    }

    /* -------------------------------------------------------
       GET FILTER VALUES
       ------------------------------------------------------- */

    function getSelectedCategory() {
        const checked = document.querySelector(
            "[data-category-filter]:checked"
        );

        return checked ? checked.value.toLowerCase() : "all";
    }

    function getSearchValue() {
        const input = document.getElementById("shopSearch");

        return input
            ? input.value.trim().toLowerCase()
            : "";
    }

    function getSortValue() {
        const select = document.getElementById("shopSort");

        return select
            ? select.value
            : "featured";
    }

    function getMinPrice() {
        const input = document.getElementById("minPrice");

        if (!input || input.value === "") {
            return 0;
        }

        const value = Number(input.value);

        return Number.isFinite(value) ? value : 0;
    }

    function getMaxPrice() {
        const input = document.getElementById("maxPrice");

        if (!input || input.value === "") {
            return Infinity;
        }

        const value = Number(input.value);

        return Number.isFinite(value) ? value : Infinity;
    }

    /* -------------------------------------------------------
       FILTER PRODUCTS
       ------------------------------------------------------- */

    function filterProducts() {
        let filteredProducts = [...getProducts()];

        const category = getSelectedCategory();
        const search = getSearchValue();
        const minPrice = getMinPrice();
        const maxPrice = getMaxPrice();

        /* CATEGORY */

        if (category !== "all") {
            filteredProducts = filteredProducts.filter(function (product) {
                return (
                    String(product.category || "").toLowerCase() === category ||
                    String(product.categoryName || "").toLowerCase() === category
                );
            });
        }

        /* SEARCH */

        if (search) {
            filteredProducts = filteredProducts.filter(function (product) {
                const searchableText = [
                    product.name,
                    product.category,
                    product.categoryName,
                    ...(Array.isArray(product.tags) ? product.tags : [])
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                return searchableText.includes(search);
            });
        }

        /* PRICE */

        filteredProducts = filteredProducts.filter(function (product) {
            const price = Number(product.price) || 0;

            return price >= minPrice && price <= maxPrice;
        });

        /* SORT */

        filteredProducts = sortProducts(
            filteredProducts,
            getSortValue()
        );

        return filteredProducts;
    }

    /* -------------------------------------------------------
       SORT PRODUCTS
       ------------------------------------------------------- */

    function sortProducts(items, sortType) {
        const sorted = [...items];

        switch (sortType) {
            case "price-low":
            case "price-low-high":
            case "low-high":
                sorted.sort(function (a, b) {
                    return Number(a.price) - Number(b.price);
                });
                break;

            case "price-high":
            case "price-high-low":
            case "high-low":
                sorted.sort(function (a, b) {
                    return Number(b.price) - Number(a.price);
                });
                break;

            case "rating":
            case "top-rated":
                sorted.sort(function (a, b) {
                    return Number(b.rating || 0) - Number(a.rating || 0);
                });
                break;

            case "discount":
                sorted.sort(function (a, b) {
                    return Number(b.discount || 0) - Number(a.discount || 0);
                });
                break;

            case "newest":
            case "new":
                sorted.sort(function (a, b) {
                    return Number(b.id) - Number(a.id);
                });
                break;

            case "name":
            case "a-z":
                sorted.sort(function (a, b) {
                    return String(a.name || "").localeCompare(
                        String(b.name || "")
                    );
                });
                break;

            case "featured":
            default:
                /*
                 * Keep original product database order.
                 */
                break;
        }

        return sorted;
    }

    /* -------------------------------------------------------
       RENDER SHOP
       ------------------------------------------------------- */

    function renderShop() {
        const grid = getShopGrid();

        if (!grid) {
            return;
        }

        const filteredProducts = filterProducts();

        grid.innerHTML = "";

        if (filteredProducts.length === 0) {
            grid.innerHTML = `
                <div class="shop-empty">
                    <div class="shop-empty-icon">⌕</div>
                    <h3>No pieces found</h3>
                    <p>
                        We couldn't find products matching your current
                        filters. Try changing your search or filters.
                    </p>
                    <button type="button" data-clear-shop>
                        Clear Filters
                    </button>
                </div>
            `;

            updateResultCount(0);
            return;
        }

        filteredProducts.forEach(function (product) {
            const card = createShopProductCard(product);
            grid.insertAdjacentHTML("beforeend", card);
        });

        updateResultCount(filteredProducts.length);
        updateWishlistButtons();
    }

    /* -------------------------------------------------------
       CREATE PRODUCT CARD
       ------------------------------------------------------- */

    function createShopProductCard(product) {
        const wishlist =
            getWishlist().some(function (item) {
                return Number(item.id) === Number(product.id);
            });

        const image =
            product.image ||
            product.images?.[0] ||
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80";

        const oldPrice =
            product.oldPrice && Number(product.oldPrice) > Number(product.price)
                ? `
                    <span class="product-card-price-old">
                        ${formatShopPrice(product.oldPrice)}
                    </span>
                `
                : "";

        const discount =
            product.discount
                ? `
                    <span class="product-card-discount">
                        ${product.discount}% OFF
                    </span>
                `
                : "";

        const badge =
            product.badge
                ? `
                    <span class="product-card-badge ${getBadgeClass(product.badge)}">
                        ${escapeHTML(product.badge)}
                    </span>
                `
                : "";

        return `
            <article class="product-card" data-product-id="${product.id}">

                <div class="product-card-image">

                    <a href="product.html?id=${product.id}">
                        <img
                            src="${image}"
                            alt="${escapeHTML(product.name || "LUMIÈRE product")}"
                            loading="lazy"
                        >
                    </a>

                    ${badge}

                    <div class="product-card-actions">

                        <button
                            type="button"
                            class="product-card-action wishlist-btn ${wishlist ? "active" : ""}"
                            data-wishlist-id="${product.id}"
                            aria-label="Add to wishlist"
                        >
                            ${wishlist ? "♥" : "♡"}
                        </button>

                        <a
                            class="product-card-action"
                            href="product.html?id=${product.id}"
                            aria-label="View product"
                        >
                            ↗
                        </a>

                    </div>

                    <button
                        type="button"
                        class="quick-add-button"
                        data-quick-add="${product.id}"
                    >
                        Quick Add
                    </button>

                </div>

                <div class="product-card-info">

                    <p class="product-card-category">
                        ${escapeHTML(
                            product.categoryName ||
                            product.category ||
                            "Collection"
                        )}
                    </p>

                    <h3 class="product-card-name">
                        <a
                            href="product.html?id=${product.id}"
                            style="color: inherit; text-decoration: none;"
                        >
                            ${escapeHTML(product.name || "LUMIÈRE Piece")}
                        </a>
                    </h3>

                    <div class="product-card-rating">
                        <span>
                            ${createStars(product.rating || 0)}
                        </span>

                        <span>
                            (${Number(product.reviews || 0)})
                        </span>
                    </div>

                    <div class="product-card-price">
                        <span class="product-card-price-current">
                            ${formatShopPrice(product.price)}
                        </span>

                        ${oldPrice}
                        ${discount}
                    </div>

                </div>

            </article>
        `;
    }

    /* -------------------------------------------------------
       BADGE CLASS
       ------------------------------------------------------- */

    function getBadgeClass(badge) {
        const value = String(badge || "").toLowerCase();

        if (value.includes("sale") || value.includes("off")) {
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

    /* -------------------------------------------------------
       STARS
       ------------------------------------------------------- */

    function createStars(rating) {
        const rounded = Math.round(Number(rating) || 0);

        let stars = "";

        for (let i = 1; i <= 5; i++) {
            stars += i <= rounded ? "★" : "☆";
        }

        return stars;
    }

    /* -------------------------------------------------------
       PRICE FORMAT
       ------------------------------------------------------- */

    function formatShopPrice(price) {
        if (
            window.Lumiere &&
            typeof window.Lumiere.formatPrice === "function"
        ) {
            return window.Lumiere.formatPrice(price);
        }

        const number = Number(price) || 0;

        return "₹" + number.toLocaleString("en-IN");
    }

    /* -------------------------------------------------------
       WISHLIST
       ------------------------------------------------------- */

    function getWishlist() {
        try {
            const saved = localStorage.getItem("lumiere_wishlist");

            if (!saved) {
                return [];
            }

            const parsed = JSON.parse(saved);

            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    }

    function updateWishlistButtons() {
        const wishlist = getWishlist();

        document.querySelectorAll("[data-wishlist-id]").forEach(function (button) {
            const id = Number(button.dataset.wishlistId);

            const exists = wishlist.some(function (item) {
                return Number(item.id) === id;
            });

            button.classList.toggle("active", exists);
            button.innerHTML = exists ? "♥" : "♡";
        });
    }

    /* -------------------------------------------------------
       SHOP FILTER EVENTS
       ------------------------------------------------------- */

    function setupShopFilters() {
        document
            .querySelectorAll("[data-category-filter]")
            .forEach(function (filter) {
                filter.addEventListener("change", function () {
                    renderShop();
                });
            });

        const minPrice = document.getElementById("minPrice");
        const maxPrice = document.getElementById("maxPrice");

        if (minPrice) {
            minPrice.addEventListener("input", debounce(renderShop, 250));
        }

        if (maxPrice) {
            maxPrice.addEventListener("input", debounce(renderShop, 250));
        }
    }

    /* -------------------------------------------------------
       SEARCH
       ------------------------------------------------------- */

    function setupShopSearch() {
        const searchInput = document.getElementById("shopSearch");

        if (!searchInput) {
            return;
        }

        searchInput.addEventListener(
            "input",
            debounce(function () {
                renderShop();
            }, 250)
        );

        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                renderShop();
            }
        });
    }

    /* -------------------------------------------------------
       SORT
       ------------------------------------------------------- */

    function setupShopSort() {
        const sort = document.getElementById("shopSort");

        if (!sort) {
            return;
        }

        sort.addEventListener("change", function () {
            renderShop();
        });
    }

    /* -------------------------------------------------------
       CLEAR FILTERS
       ------------------------------------------------------- */

    function setupClearFilters() {
        document.addEventListener("click", function (event) {
            const clearButton = event.target.closest(
                "[data-clear-shop], .filter-clear"
            );

            if (!clearButton) {
                return;
            }

            event.preventDefault();

            clearAllFilters();
        });
    }

    function clearAllFilters() {
        document
            .querySelectorAll("[data-category-filter]")
            .forEach(function (checkbox) {
                checkbox.checked =
                    checkbox.value.toLowerCase() === "all";
            });

        const search = document.getElementById("shopSearch");
        const minPrice = document.getElementById("minPrice");
        const maxPrice = document.getElementById("maxPrice");
        const sort = document.getElementById("shopSort");

        if (search) {
            search.value = "";
        }

        if (minPrice) {
            minPrice.value = "";
        }

        if (maxPrice) {
            maxPrice.value = "";
        }

        if (sort) {
            sort.value = "featured";
        }

        renderShop();
    }

    /* -------------------------------------------------------
       MOBILE FILTER
       ------------------------------------------------------- */

    function setupMobileFilter() {
        const filterButton =
            document.querySelector(".mobile-filter-button");

        const sidebar =
            document.querySelector(".shop-sidebar");

        if (!filterButton || !sidebar) {
            return;
        }

        filterButton.addEventListener("click", function () {
            sidebar.classList.toggle("active");

            if (sidebar.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        });

        document.addEventListener("click", function (event) {
            if (
                window.innerWidth <= 992 &&
                sidebar.classList.contains("active") &&
                !sidebar.contains(event.target) &&
                event.target !== filterButton
            ) {
                sidebar.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }

    /* -------------------------------------------------------
       PRODUCT EVENTS
       ------------------------------------------------------- */

    function setupShopProductEvents() {
        document.addEventListener("click", function (event) {

            /* WISHLIST */

            const wishlistButton =
                event.target.closest("[data-wishlist-id]");

            if (wishlistButton) {
                event.preventDefault();

                const id = Number(
                    wishlistButton.dataset.wishlistId
                );

                if (
                    window.Lumiere &&
                    typeof window.Lumiere.toggleWishlist === "function"
                ) {
                    window.Lumiere.toggleWishlist(id);
                } else {
                    toggleWishlistFallback(id);
                }

                setTimeout(updateWishlistButtons, 30);

                return;
            }

            /* QUICK ADD */

            const quickAdd =
                event.target.closest("[data-quick-add]");

            if (quickAdd) {
                event.preventDefault();

                const id = Number(
                    quickAdd.dataset.quickAdd
                );

                if (
                    window.Lumiere &&
                    typeof window.Lumiere.addToCart === "function"
                ) {
                    window.Lumiere.addToCart(id, 1);
                } else {
                    addToCartFallback(id);
                }

                showQuickAddFeedback(quickAdd);

                return;
            }
        });
    }

    /* -------------------------------------------------------
       FALLBACK WISHLIST
       ------------------------------------------------------- */

    function toggleWishlistFallback(id) {
        const products = getProducts();
        const product = products.find(function (item) {
            return Number(item.id) === id;
        });

        if (!product) {
            return;
        }

        let wishlist = getWishlist();

        const index = wishlist.findIndex(function (item) {
            return Number(item.id) === id;
        });

        if (index > -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist.push(product);
        }

        localStorage.setItem(
            "lumiere_wishlist",
            JSON.stringify(wishlist)
        );

        updateWishlistButtons();
    }

    /* -------------------------------------------------------
       FALLBACK CART
       ------------------------------------------------------- */

    function addToCartFallback(id) {
        const products = getProducts();

        const product = products.find(function (item) {
            return Number(item.id) === id;
        });

        if (!product) {
            return;
        }

        let cart = [];

        try {
            cart = JSON.parse(
                localStorage.getItem("lumiere_cart") || "[]"
            );

            if (!Array.isArray(cart)) {
                cart = [];
            }
        } catch (error) {
            cart = [];
        }

        const existing = cart.find(function (item) {
            return Number(item.id) === id;
        });

        if (existing) {
            existing.quantity = Number(existing.quantity || 0) + 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        localStorage.setItem(
            "lumiere_cart",
            JSON.stringify(cart)
        );

        updateCartCountFallback();
    }

    /* -------------------------------------------------------
       CART COUNT FALLBACK
       ------------------------------------------------------- */

    function updateCartCountFallback() {
        let cart = [];

        try {
            cart = JSON.parse(
                localStorage.getItem("lumiere_cart") || "[]"
            );
        } catch (error) {
            cart = [];
        }

        if (!Array.isArray(cart)) {
            cart = [];
        }

        const count = cart.reduce(function (total, item) {
            return total + Number(item.quantity || 0);
        }, 0);

        document.querySelectorAll(".cart-count").forEach(function (element) {
            element.textContent = count;
        });
    }

    /* -------------------------------------------------------
       QUICK ADD FEEDBACK
       ------------------------------------------------------- */

    function showQuickAddFeedback(button) {
        const originalText = button.textContent;

        button.textContent = "Added ✓";
        button.classList.add("added");

        setTimeout(function () {
            button.textContent = originalText;
            button.classList.remove("added");
        }, 1200);
    }

    /* -------------------------------------------------------
       RESULT COUNT
       ------------------------------------------------------- */

    function updateResultCount(count) {
        const elements = document.querySelectorAll(
            ".shop-result-count, [data-shop-result-count]"
        );

        elements.forEach(function (element) {
            element.textContent =
                count === 1
                    ? "1 piece"
                    : `${count} pieces`;
        });
    }

    /* -------------------------------------------------------
       DEBOUNCE
       ------------------------------------------------------- */

    function debounce(callback, delay) {
        let timeout;

        return function () {
            clearTimeout(timeout);

            timeout = setTimeout(function () {
                callback();
            }, delay);
        };
    }

    /* -------------------------------------------------------
       ESCAPE HTML
       ------------------------------------------------------- */

    function escapeHTML(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /* -------------------------------------------------------
       URL CATEGORY SUPPORT
       Example:
       shop.html?category=dresses
       shop.html?category=tops
       shop.html?search=black
       ------------------------------------------------------- */

    function initializeShopFromURL() {
        const params = new URLSearchParams(window.location.search);

        const category = params.get("category");
        const search = params.get("search");
        const sort = params.get("sort");
        const discount = params.get("discount");

        if (category) {
            const categoryFilter =
                document.querySelector(
                    `[data-category-filter][value="${CSS.escape(category)}"]`
                );

            if (categoryFilter) {
                document
                    .querySelectorAll("[data-category-filter]")
                    .forEach(function (input) {
                        input.checked = false;
                    });

                categoryFilter.checked = true;
            }
        }

        if (search) {
            const searchInput =
                document.getElementById("shopSearch");

            if (searchInput) {
                searchInput.value = search;
            }
        }

        if (sort) {
            const sortSelect =
                document.getElementById("shopSort");

            if (sortSelect) {
                sortSelect.value = sort;
            }
        }

        if (discount === "true") {
            const products = getProducts();

            const grid = getShopGrid();

            if (!grid) {
                return;
            }

            const discounted = products.filter(function (product) {
                return Number(product.discount || 0) > 0;
            });

            grid.innerHTML = discounted
                .map(createShopProductCard)
                .join("");

            updateResultCount(discounted.length);
            updateWishlistButtons();
        }
    }

    /* -------------------------------------------------------
       INITIALIZE URL AFTER PAGE SETUP
       ------------------------------------------------------- */

    setTimeout(function () {
        initializeShopFromURL();
        renderShop();
    }, 0);

})();