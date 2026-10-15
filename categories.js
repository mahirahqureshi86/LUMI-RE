"use strict";

/* =========================================================
   LUMIÈRE - CATEGORIES PAGE JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       Update category card counts
       ----------------------------------------------------- */

    updateCategoryCounts();


    /* -----------------------------------------------------
       Add subtle reveal animation
       ----------------------------------------------------- */

    setupCategoryReveal();


    /* -----------------------------------------------------
       Make category cards keyboard accessible
       ----------------------------------------------------- */

    setupCategoryCards();

});


/* =========================================================
   CATEGORY COUNTS
   ========================================================= */

function updateCategoryCounts() {

    /*
       The main script.js already contains the complete
       product database as:

       window.Lumiere.products

       We use that database here instead of creating a
       second product database.
    */

    if (
        !window.Lumiere ||
        !Array.isArray(window.Lumiere.products)
    ) {
        return;
    }

    const products = window.Lumiere.products;

    const countElements = document.querySelectorAll(
        "[data-category-count]"
    );

    countElements.forEach(function (element) {

        const category = element.getAttribute(
            "data-category-count"
        );

        const count = products.filter(function (product) {

            return (
                String(product.category).toLowerCase() ===
                String(category).toLowerCase()
            );

        }).length;

        element.textContent =
            count + (count === 1 ? " Piece" : " Pieces");

    });

}


/* =========================================================
   CATEGORY CARD REVEAL
   ========================================================= */

function setupCategoryReveal() {

    const cards = document.querySelectorAll(
        ".category-card"
    );

    if (!cards.length) {
        return;
    }

    /*
       Use IntersectionObserver when available.
       The cards simply fade/slide into view.
    */

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observerInstance) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "category-visible"
                        );

                        observerInstance.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        cards.forEach(function (card) {

            card.classList.add(
                "category-hidden"
            );

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.classList.add(
                "category-visible"
            );

        });

    }

}


/* =========================================================
   CATEGORY CARD INTERACTION
   ========================================================= */

function setupCategoryCards() {

    const cards = document.querySelectorAll(
        ".category-card"
    );

    cards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.classList.add(
                    "category-hover"
                );

            }
        );

        card.addEventListener(
            "mouseleave",
            function () {

                card.classList.remove(
                    "category-hover"
                );

            }
        );

    });

}


/* =========================================================
   ADD REVEAL STYLES DYNAMICALLY
   ========================================================= */

(function addCategoryAnimationStyles() {

    const style = document.createElement("style");

    style.textContent = `
        .category-hidden {
            opacity: 0;
            transform: translateY(25px);
        }

        .category-visible {
            opacity: 1;
            transform: translateY(0);
            transition:
                opacity 0.8s ease,
                transform 0.8s ease;
        }
    `;

    document.head.appendChild(style);

})();