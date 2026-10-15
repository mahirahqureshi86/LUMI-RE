/* =========================================================
   LUMIÈRE — CART PAGE JAVASCRIPT
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       INITIALIZE
       ===================================================== */

    document.addEventListener("DOMContentLoaded", function () {

        initializeCartPage();

    });


    function initializeCartPage() {

        renderCartPage();

        renderRecommendedProducts();

        setupCartEvents();

    }


    /* =====================================================
       CART STORAGE
       ===================================================== */

    function getCart() {

        try {

            const storedCart = localStorage.getItem("lumiere_cart");

            if (!storedCart) {
                return [];
            }

            const parsedCart = JSON.parse(storedCart);

            if (!Array.isArray(parsedCart)) {
                return [];
            }

            return parsedCart;

        } catch (error) {

            console.error("Unable to load cart:", error);

            return [];

        }

    }


    function saveCart(cart) {

        localStorage.setItem(
            "lumiere_cart",
            JSON.stringify(cart)
        );

    }


    /* =====================================================
       GET PRODUCTS
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


    function getProductById(productId) {

        const allProducts = getProducts();

        return allProducts.find(function (product) {

            return String(product.id) === String(productId);

        });

    }


    /* =====================================================
       PRICE FORMAT
       ===================================================== */

    function formatCartPrice(price) {

        const number = Number(price) || 0;

        return "₹" + number.toLocaleString("en-IN");

    }


    /* =====================================================
       RENDER CART
       ===================================================== */

    function renderCartPage() {

        const cartLayout =
            document.getElementById("cartLayout");

        const cartEmpty =
            document.getElementById("cartEmpty");

        const cartItems =
            document.getElementById("cartItems");

        const cartSummary =
            document.getElementById("cartItemSummary");

        const subtotalElement =
            document.getElementById("cartSubtotal");

        const shippingElement =
            document.getElementById("cartShipping");

        const discountElement =
            document.getElementById("cartDiscount");

        const totalElement =
            document.getElementById("cartTotal");

        const checkoutButton =
            document.getElementById("checkoutButton");


        if (!cartItems) {
            return;
        }


        const cart = getCart();


        /* ---------------------------------------------
           EMPTY CART
           --------------------------------------------- */

        if (cart.length === 0) {

            cartItems.innerHTML = "";

            if (cartLayout) {
                cartLayout.classList.add("hidden");
            }

            if (cartEmpty) {
                cartEmpty.classList.add("show");
            }

            if (cartSummary) {
                cartSummary.textContent = "0 items";
            }

            if (subtotalElement) {
                subtotalElement.textContent = "₹0";
            }

            if (shippingElement) {
                shippingElement.textContent = "FREE";
            }

            if (discountElement) {
                discountElement.textContent = "₹0";
            }

            if (totalElement) {
                totalElement.textContent = "₹0";
            }

            if (checkoutButton) {
                checkoutButton.classList.add("disabled");
            }

            return;

        }


        /* ---------------------------------------------
           SHOW CART
           --------------------------------------------- */

        if (cartLayout) {
            cartLayout.classList.remove("hidden");
        }

        if (cartEmpty) {
            cartEmpty.classList.remove("show");
        }

        if (checkoutButton) {
            checkoutButton.classList.remove("disabled");
        }


        /* ---------------------------------------------
           BUILD CART ITEMS
           --------------------------------------------- */

        let subtotal = 0;

        let totalQuantity = 0;

        let totalDiscount = 0;


        const html = cart.map(function (cartItem) {

            const product =
                getProductById(cartItem.id);


            if (!product) {
                return "";
            }


            const quantity =
                Math.max(
                    1,
                    Number(cartItem.quantity) || 1
                );


            const price =
                Number(product.price) || 0;


            const oldPrice =
                Number(product.oldPrice) || 0;


            const itemTotal =
                price * quantity;


            subtotal += itemTotal;

            totalQuantity += quantity;


            if (oldPrice > price) {

                totalDiscount +=
                    (oldPrice - price) * quantity;

            }


            const selectedColor =
                cartItem.color ||
                (
                    Array.isArray(product.colors)
                        ? product.colors[0]
                        : ""
                );


            const selectedSize =
                cartItem.size ||
                (
                    Array.isArray(product.sizes)
                        ? product.sizes[0]
                        : ""
                );


            return `
                <article
                    class="cart-item"
                    data-product-id="${product.id}"
                >

                    <div class="cart-product">

                        <a
                            href="product.html?id=${product.id}"
                            class="cart-product-image"
                            aria-label="${product.name}"
                        >

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                loading="lazy"
                            >

                        </a>


                        <div class="cart-product-info">

                            <span class="cart-product-category">
                                ${product.category || "Collection"}
                            </span>


                            <a
                                href="product.html?id=${product.id}"
                                class="cart-product-name"
                            >
                                ${product.name}
                            </a>


                            <div class="cart-product-meta">

                                ${
                                    selectedColor
                                        ? `<span>Color: ${selectedColor}</span>`
                                        : ""
                                }

                                ${
                                    selectedSize
                                        ? `<span>Size: ${selectedSize}</span>`
                                        : ""
                                }

                            </div>


                            <button
                                type="button"
                                class="cart-remove"
                                data-action="remove"
                                data-product-id="${product.id}"
                            >
                                Remove
                            </button>

                        </div>

                    </div>


                    <div class="cart-item-price">

                        <span>
                            ${formatCartPrice(price)}
                        </span>

                        ${
                            oldPrice > price
                                ? `
                                    <span class="cart-old-price">
                                        ${formatCartPrice(oldPrice)}
                                    </span>
                                `
                                : ""
                        }

                    </div>


                    <div
                        class="cart-quantity"
                        data-product-id="${product.id}"
                    >

                        <button
                            type="button"
                            class="quantity-btn"
                            data-action="decrease"
                            data-product-id="${product.id}"
                            aria-label="Decrease quantity"
                        >
                            −
                        </button>


                        <span class="quantity-value">
                            ${quantity}
                        </span>


                        <button
                            type="button"
                            class="quantity-btn"
                            data-action="increase"
                            data-product-id="${product.id}"
                            aria-label="Increase quantity"
                        >
                            +
                        </button>

                    </div>


                    <div class="cart-item-total">

                        ${formatCartPrice(itemTotal)}

                    </div>

                </article>
            `;

        }).join("");


        cartItems.innerHTML = html;


        /* ---------------------------------------------
           SUMMARY
           --------------------------------------------- */

        const shipping = 0;

        const total =
            subtotal + shipping;


        if (cartSummary) {

            cartSummary.textContent =
                totalQuantity +
                (
                    totalQuantity === 1
                        ? " item"
                        : " items"
                );

        }


        if (subtotalElement) {

            subtotalElement.textContent =
                formatCartPrice(subtotal);

        }


        if (shippingElement) {

            shippingElement.textContent =
                shipping === 0
                    ? "FREE"
                    : formatCartPrice(shipping);

        }


        if (discountElement) {

            discountElement.textContent =
                totalDiscount > 0
                    ? "−" + formatCartPrice(totalDiscount)
                    : "₹0";

        }


        if (totalElement) {

            totalElement.textContent =
                formatCartPrice(total);

        }


        /* ---------------------------------------------
           IMAGE FALLBACK
           --------------------------------------------- */

        const images =
            cartItems.querySelectorAll("img");


        images.forEach(function (image) {

            image.addEventListener(
                "error",
                function () {

                    image.style.opacity = "0.35";

                },
                {
                    once: true
                }
            );

        });


        updateCartHeaderCount(totalQuantity);

    }


    /* =====================================================
       CHANGE QUANTITY
       ===================================================== */

    function changeQuantity(productId, change) {

        const cart = getCart();

        const item =
            cart.find(function (cartItem) {

                return String(cartItem.id) === String(productId);

            });


        if (!item) {
            return;
        }


        let currentQuantity =
            Number(item.quantity) || 1;


        currentQuantity += change;


        if (currentQuantity <= 0) {

            removeFromCart(productId);

            return;

        }


        item.quantity = currentQuantity;


        saveCart(cart);


        renderCartPage();

        updateCartHeaderCount();


        showCartToast(
            "Cart updated"
        );

    }


    /* =====================================================
       REMOVE ITEM
       ===================================================== */

    function removeFromCart(productId) {

        let cart = getCart();


        cart = cart.filter(function (cartItem) {

            return String(cartItem.id) !== String(productId);

        });


        saveCart(cart);


        renderCartPage();

        updateCartHeaderCount();


        showCartToast(
            "Item removed from cart"
        );

    }


    /* =====================================================
       HEADER COUNT
       ===================================================== */

    function updateCartHeaderCount(forceQuantity) {

        let quantity = 0;


        if (typeof forceQuantity === "number") {

            quantity = forceQuantity;

        } else {

            const cart = getCart();

            quantity = cart.reduce(
                function (total, item) {

                    return total +
                        (
                            Number(item.quantity) || 1
                        );

                },
                0
            );

        }


        document
            .querySelectorAll(".cart-count")
            .forEach(function (element) {

                element.textContent = quantity;

            });

    }


    /* =====================================================
       CART EVENTS
       ===================================================== */

    function setupCartEvents() {

        const cartItems =
            document.getElementById("cartItems");


        if (!cartItems) {
            return;
        }


        cartItems.addEventListener(
            "click",
            function (event) {

                const button =
                    event.target.closest(
                        "[data-action]"
                    );


                if (!button) {
                    return;
                }


                const action =
                    button.dataset.action;


                const productId =
                    button.dataset.productId;


                if (!productId) {
                    return;
                }


                if (action === "increase") {

                    changeQuantity(
                        productId,
                        1
                    );

                }


                if (action === "decrease") {

                    changeQuantity(
                        productId,
                        -1
                    );

                }


                if (action === "remove") {

                    removeFromCart(
                        productId
                    );

                }

            }
        );


        /* ---------------------------------------------
           CHECKOUT BUTTON
           --------------------------------------------- */

        const checkoutButton =
            document.getElementById(
                "checkoutButton"
            );


        if (checkoutButton) {

            checkoutButton.addEventListener(
                "click",
                function (event) {

                    const cart = getCart();


                    if (cart.length === 0) {

                        event.preventDefault();

                        showCartToast(
                            "Your cart is empty"
                        );

                    }

                }
            );

        }

    }


    /* =====================================================
       RECOMMENDED PRODUCTS
       ===================================================== */

    function renderRecommendedProducts() {

        const container =
            document.getElementById(
                "cartRecommendedProducts"
            );


        if (!container) {
            return;
        }


        const allProducts = getProducts();

        const cart = getCart();


        if (
            !Array.isArray(allProducts) ||
            allProducts.length === 0
        ) {

            container.innerHTML = "";

            return;

        }


        const cartIds =
            cart.map(function (item) {

                return String(item.id);

            });


        let recommendations =
            allProducts.filter(function (product) {

                return !cartIds.includes(
                    String(product.id)
                );

            });


        recommendations =
            recommendations.slice(0, 4);


        if (recommendations.length === 0) {

            container.innerHTML = "";

            return;

        }


        container.innerHTML =
            recommendations
                .map(createRecommendedCard)
                .join("");


        container
            .querySelectorAll("img")
            .forEach(function (image) {

                image.addEventListener(
                    "error",
                    function () {

                        image.style.opacity = "0.35";

                    },
                    {
                        once: true
                    }
                );

            });

    }


    /* =====================================================
       RECOMMENDED CARD
       ===================================================== */

    function createRecommendedCard(product) {

        const price =
            Number(product.price) || 0;


        const oldPrice =
            Number(product.oldPrice) || 0;


        return `
            <article class="product-card">

                <a
                    href="product.html?id=${product.id}"
                    class="product-image"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                </a>


                <div class="product-info">

                    <span class="product-category">
                        ${product.category || "Collection"}
                    </span>


                    <a
                        href="product.html?id=${product.id}"
                        class="product-name"
                    >
                        ${product.name}
                    </a>


                    <div class="product-price">

                        ${formatCartPrice(price)}

                        ${
                            oldPrice > price
                                ? `
                                    <span class="product-old-price">
                                        ${formatCartPrice(oldPrice)}
                                    </span>
                                `
                                : ""
                        }

                    </div>

                </div>

            </article>
        `;

    }


    /* =====================================================
       TOAST
       ===================================================== */

    function showCartToast(message) {

        const toastContainer =
            document.getElementById(
                "toastContainer"
            );


        if (!toastContainer) {
            return;
        }


        const toast =
            document.createElement("div");


        toast.className = "toast";

        toast.textContent = message;


        toastContainer.appendChild(toast);


        requestAnimationFrame(function () {

            toast.classList.add("show");

        });


        setTimeout(function () {

            toast.classList.remove("show");


            setTimeout(function () {

                toast.remove();

            }, 300);

        }, 2200);

    }


    /* =====================================================
       PUBLIC CART API
       ===================================================== */

    window.LumiereCart = {

        refresh: renderCartPage,

        getCart: getCart,

        remove: removeFromCart,

        changeQuantity: changeQuantity

    };


})();