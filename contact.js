/* =========================================================
   LUMIÈRE — CONTACT PAGE JAVASCRIPT
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       INITIALIZE
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            initializeContactPage();

        }
    );


    function initializeContactPage() {

        setupContactForm();

        setupFAQ();

        setupContactAnimations();

    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    function setupContactForm() {

        const form =
            document.getElementById("contactForm");

        const successMessage =
            document.getElementById("contactSuccess");

        const formWrapper =
            document.querySelector(".contact-form-wrapper");

        const sendAnother =
            document.getElementById(
                "sendAnotherMessage"
            );


        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                clearFormErrors();


                const isValid =
                    validateContactForm();


                if (!isValid) {

                    const firstError =
                        form.querySelector(
                            ".has-error input, .has-error select, .has-error textarea"
                        );


                    if (firstError) {

                        firstError.focus();

                    }


                    return;

                }


                const submitButton =
                    form.querySelector(
                        ".contact-submit"
                    );


                if (submitButton) {

                    submitButton.classList.add(
                        "loading"
                    );

                    submitButton.querySelector(
                        "span:first-child"
                    ).textContent =
                        "Sending...";

                }


                /*
                 * Front-end demo submission.
                 * There is no backend connected yet.
                 */

                setTimeout(
                    function () {

                        if (formWrapper) {

                            formWrapper.classList.add(
                                "form-complete"
                            );

                        }


                        if (successMessage) {

                            successMessage.classList.add(
                                "show"
                            );

                        }


                        if (submitButton) {

                            submitButton.classList.remove(
                                "loading"
                            );

                        }


                        form.reset();


                        showContactToast(
                            "Your message has been sent"
                        );

                    },
                    700
                );

            }
        );


        /* ---------------------------------------------
           SEND ANOTHER MESSAGE
        --------------------------------------------- */

        if (sendAnother) {

            sendAnother.addEventListener(
                "click",
                function () {

                    if (formWrapper) {

                        formWrapper.classList.remove(
                            "form-complete"
                        );

                    }


                    if (successMessage) {

                        successMessage.classList.remove(
                            "show"
                        );

                    }


                    clearFormErrors();

                }
            );

        }


        /* ---------------------------------------------
           LIVE ERROR CLEARING
        --------------------------------------------- */

        const inputs =
            form.querySelectorAll(
                "input, select, textarea"
            );


        inputs.forEach(
            function (input) {

                input.addEventListener(
                    "input",
                    function () {

                        clearFieldError(input);

                    }
                );


                input.addEventListener(
                    "change",
                    function () {

                        clearFieldError(input);

                    }
                );

            }
        );

    }


    /* =====================================================
       VALIDATE CONTACT FORM
    ===================================================== */

    function validateContactForm() {

        let valid = true;


        const name =
            document.getElementById(
                "contactName"
            );

        const email =
            document.getElementById(
                "contactEmail"
            );

        const subject =
            document.getElementById(
                "contactSubject"
            );

        const message =
            document.getElementById(
                "contactMessage"
            );

        const consent =
            document.getElementById(
                "contactConsent"
            );


        /* ---------------------------------------------
           NAME
        --------------------------------------------- */

        if (
            !name ||
            name.value.trim().length < 2
        ) {

            setFieldError(
                name,
                "Please enter your full name."
            );

            valid = false;

        }


        /* ---------------------------------------------
           EMAIL
        --------------------------------------------- */

        if (!email || !isValidEmail(email.value)) {

            setFieldError(
                email,
                "Please enter a valid email address."
            );

            valid = false;

        }


        /* ---------------------------------------------
           SUBJECT
        --------------------------------------------- */

        if (
            !subject ||
            !subject.value
        ) {

            setFieldError(
                subject,
                "Please select a subject."
            );

            valid = false;

        }


        /* ---------------------------------------------
           MESSAGE
        --------------------------------------------- */

        if (
            !message ||
            message.value.trim().length < 10
        ) {

            setFieldError(
                message,
                "Please enter at least 10 characters."
            );

            valid = false;

        }


        /* ---------------------------------------------
           CONSENT
        --------------------------------------------- */

        if (
            !consent ||
            !consent.checked
        ) {

            const error =
                document.getElementById(
                    "contactConsentError"
                );


            if (error) {

                error.textContent =
                    "Please confirm that we may contact you.";

            }


            valid = false;

        }


        return valid;

    }


    /* =====================================================
       EMAIL VALIDATION
    ===================================================== */

    function isValidEmail(email) {

        const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return pattern.test(
            String(email).trim()
        );

    }


    /* =====================================================
       SET FIELD ERROR
    ===================================================== */

    function setFieldError(
        field,
        message
    ) {

        if (!field) {
            return;
        }


        const formGroup =
            field.closest(
                ".form-group"
            );


        if (formGroup) {

            formGroup.classList.add(
                "has-error"
            );

        }


        const errorId =
            field.id + "Error";


        const errorElement =
            document.getElementById(
                errorId
            );


        if (errorElement) {

            errorElement.textContent =
                message;

        }

    }


    /* =====================================================
       CLEAR FIELD ERROR
    ===================================================== */

    function clearFieldError(field) {

        if (!field) {
            return;
        }


        const formGroup =
            field.closest(
                ".form-group"
            );


        if (formGroup) {

            formGroup.classList.remove(
                "has-error"
            );

        }


        const errorElement =
            document.getElementById(
                field.id + "Error"
            );


        if (errorElement) {

            errorElement.textContent = "";

        }


        if (field.id === "contactConsent") {

            const consentError =
                document.getElementById(
                    "contactConsentError"
                );


            if (consentError) {

                consentError.textContent = "";

            }

        }

    }


    /* =====================================================
       CLEAR ALL FORM ERRORS
    ===================================================== */

    function clearFormErrors() {

        document
            .querySelectorAll(
                ".contact-form .has-error"
            )
            .forEach(
                function (element) {

                    element.classList.remove(
                        "has-error"
                    );

                }
            );


        document
            .querySelectorAll(
                ".contact-form .form-error"
            )
            .forEach(
                function (element) {

                    element.textContent = "";

                }
            );

    }


    /* =====================================================
       FAQ
    ===================================================== */

    function setupFAQ() {

        const questions =
            document.querySelectorAll(
                ".faq-question"
            );


        questions.forEach(
            function (question) {

                question.addEventListener(
                    "click",
                    function () {

                        const item =
                            question.closest(
                                ".faq-item"
                            );


                        if (!item) {
                            return;
                        }


                        const isOpen =
                            item.classList.contains(
                                "open"
                            );


                        /* ---------------------------------
                           CLOSE OTHER FAQ ITEMS
                        --------------------------------- */

                        document
                            .querySelectorAll(
                                ".faq-item.open"
                            )
                            .forEach(
                                function (openItem) {

                                    if (
                                        openItem !== item
                                    ) {

                                        openItem.classList.remove(
                                            "open"
                                        );


                                        const openButton =
                                            openItem.querySelector(
                                                ".faq-question"
                                            );


                                        if (openButton) {

                                            openButton.setAttribute(
                                                "aria-expanded",
                                                "false"
                                            );

                                        }

                                    }

                                }
                            );


                        /* ---------------------------------
                           TOGGLE CURRENT
                        --------------------------------- */

                        if (isOpen) {

                            item.classList.remove(
                                "open"
                            );

                            question.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        } else {

                            item.classList.add(
                                "open"
                            );

                            question.setAttribute(
                                "aria-expanded",
                                "true"
                            );

                        }

                    }
                );

            }
        );

    }


    /* =====================================================
       SCROLL ANIMATIONS
    ===================================================== */

    function setupContactAnimations() {

        const elements =
            document.querySelectorAll(
                ".contact-intro-content, .contact-information, .contact-form-wrapper, .faq-heading, .faq-list"
            );


        if (
            !("IntersectionObserver" in window)
        ) {

            elements.forEach(
                function (element) {

                    element.classList.add(
                        "contact-visible"
                    );

                }
            );

            return;

        }


        elements.forEach(
            function (element) {

                element.classList.add(
                    "contact-hidden"
                );

            }
        );


        const observer =
            new IntersectionObserver(
                function (entries, observerInstance) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.remove(
                                    "contact-hidden"
                                );

                                entry.target.classList.add(
                                    "contact-visible"
                                );

                                observerInstance.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        elements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    }


    /* =====================================================
       TOAST
    ===================================================== */

    function showContactToast(message) {

        const container =
            document.getElementById(
                "toastContainer"
            );


        if (!container) {
            return;
        }


        const toast =
            document.createElement("div");


        toast.className = "toast";

        toast.textContent = message;


        container.appendChild(toast);


        requestAnimationFrame(
            function () {

                toast.classList.add(
                    "show"
                );

            }
        );


        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );


                setTimeout(
                    function () {

                        toast.remove();

                    },
                    300
                );

            },
            2500
        );

    }


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.LumiereContact = {

        validate:
            validateContactForm,

        clearErrors:
            clearFormErrors

    };


})();