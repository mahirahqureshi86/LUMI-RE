"use strict";

/* =========================================================
   LUMIÈRE - CHECKOUT PAGE JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    setupCheckoutPage();

});


/* =========================================================
   CHECKOUT PAGE SETUP
   ========================================================= */

function setupCheckoutPage() {

    setupPaymentMethods();

    setupPostalCode();

    setupCheckoutValidation();

    updateCheckoutButton();

}


/* =========================================================
   PAYMENT METHOD UI
   ========================================================= */

function setupPaymentMethods() {

    const paymentOptions = document.querySelectorAll(
        ".payment-option"
    );

    if (!paymentOptions.length) {
        return;
    }

    paymentOptions.forEach(function (option) {

        const radio = option.querySelector(
            'input[type="radio"]'
        );

        if (!radio) {
            return;
        }

        option.addEventListener("click", function () {

            radio.checked = true;

            updatePaymentStyles();

        });

    });

    updatePaymentStyles();

}


/* =========================================================
   UPDATE PAYMENT STYLES
   ========================================================= */

function updatePaymentStyles() {

    const options = document.querySelectorAll(
        ".payment-option"
    );

    options.forEach(function (option) {

        const radio = option.querySelector(
            'input[type="radio"]'
        );

        if (!radio) {
            return;
        }

        if (radio.checked) {

            option.classList.add(
                "payment-selected"
            );

        } else {

            option.classList.remove(
                "payment-selected"
            );

        }

    });

}


/* =========================================================
   PIN CODE
   ========================================================= */

function setupPostalCode() {

    const postalCode = document.getElementById(
        "postalCode"
    );

    if (!postalCode) {
        return;
    }

    postalCode.addEventListener(
        "input",
        function () {

            /*
             * Allow numbers only.
             */

            this.value = this.value.replace(
                /[^0-9]/g,
                ""
            );

        }
    );

}


/* =========================================================
   CHECKOUT VALIDATION
   ========================================================= */

function setupCheckoutValidation() {

    const form = document.getElementById(
        "checkoutForm"
    );

    if (!form) {
        return;
    }

    const inputs = form.querySelectorAll(
        "input[required]"
    );

    inputs.forEach(function (input) {

        input.addEventListener(
            "blur",
            function () {

                validateInput(input);

            }
        );

        input.addEventListener(
            "input",
            function () {

                if (input.classList.contains(
                    "input-error"
                )) {

                    validateInput(input);

                }

            }
        );

    });

}


/* =========================================================
   VALIDATE SINGLE INPUT
   ========================================================= */

function validateInput(input) {

    if (!input.value.trim()) {

        input.classList.add(
            "input-error"
        );

        return false;

    }


    if (
        input.type === "email" &&
        !isValidEmail(input.value)
    ) {

        input.classList.add(
            "input-error"
        );

        return false;

    }


    if (
        input.id === "postalCode" &&
        input.value.length !== 6
    ) {

        input.classList.add(
            "input-error"
        );

        return false;

    }


    input.classList.remove(
        "input-error"
    );

    return true;

}


/* =========================================================
   EMAIL VALIDATION
   ========================================================= */

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
    );

}


/* =========================================================
   CHECKOUT BUTTON STATE
   ========================================================= */

function updateCheckoutButton() {

    const button = document.querySelector(
        ".place-order-btn"
    );

    const items = document.getElementById(
        "checkoutItems"
    );

    if (!button || !items) {
        return;
    }

    /*
     * If the cart is empty, the main script will normally
     * display the empty-cart message.
     */

    const hasItems =
        items.querySelector(".checkout-item") !== null;

    if (!hasItems) {

        button.disabled = true;

    } else {

        button.disabled = false;

    }

}


/* =========================================================
   ADD CHECKOUT-SPECIFIC STYLES
   ========================================================= */

(function addCheckoutInteractionStyles() {

    const style = document.createElement(
        "style"
    );

    style.textContent = `

        .payment-option.payment-selected {
            background: rgba(255, 255, 255, 0.55);
        }

        .form-group input.input-error {
            border-color: #8c7760;
            box-shadow: 0 0 0 1px #8c7760;
        }

        .place-order-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

    `;

    document.head.appendChild(style);

})();