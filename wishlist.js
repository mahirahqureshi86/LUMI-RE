"use strict";

/* =========================================================
   LUMIÈRE - WISHLIST PAGE JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    setupWishlistPage();

});


/* =========================================================
   WISHLIST PAGE SETUP
   ========================================================= */

function setupWishlistPage() {

    /*
     * The main script.js already renders the wishlist
     * into #wishlistGrid.
     */

    updateWishlistPageState();

    setupWishlistObserver();

}


/* =========================================================
   UPDATE WISHLIST PAGE STATE
   ========================================================= */

function updateWishlistPageState() {

    const grid = document.getElementById(
        "wishlistGrid"
    );

    const emptyMessage = document.getElementById(
        "wishlistEmpty"
    );

    const itemCount = document.getElementById(
        "wishlistItemCount"
    );


    if (!grid) {
        return;
    }


    /*
     * Give the main script a moment to render the
     * wishlist products.
     */

    setTimeout(function () {

        const products = grid.querySelectorAll(
            ".product-card"
        );


        /* ---------------------------------------------
           Update item count
           --------------------------------------------- */

        if (itemCount) {

            const count = products.length;

            itemCount.textContent =
                count +
                (count === 1 ? " item" : " items");

        }


        /* ---------------------------------------------
           Show / hide empty wishlist
           --------------------------------------------- */

        if (emptyMessage) {

            if (products.length === 0) {

                emptyMessage.style.display = "block";

                grid.style.display = "none";

            } else {

                emptyMessage.style.display = "none";

                grid.style.display = "grid";

            }

        }


    }, 50);

}


/* =========================================================
   WATCH FOR WISHLIST CHANGES
   ========================================================= */

function setupWishlistObserver() {

    const grid = document.getElementById(
        "wishlistGrid"
    );

    if (!grid || !("MutationObserver" in window)) {
        return;
    }


    const observer = new MutationObserver(
        function () {

            updateWishlistPageState();

        }
    );


    observer.observe(grid, {
        childList: true,
        subtree: true
    });

}


/* =========================================================
   REFRESH AFTER WISHLIST ACTION
   ========================================================= */

window.addEventListener(
    "storage",
    function (event) {

        if (
            event.key === "lumiere_wishlist"
        ) {

            updateWishlistPageState();

        }

    }
);