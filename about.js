/* =========================================================
   LUMIÈRE — ABOUT PAGE JAVASCRIPT
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DOM READY
       ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            initializeAboutPage();

        }
    );


    /* =====================================================
       INITIALIZE ABOUT PAGE
       ===================================================== */

    function initializeAboutPage() {

        setupAboutAnimations();

        setupCounterAnimation();

        setupAboutImageEffects();

    }


    /* =====================================================
       SCROLL REVEAL ANIMATIONS
       ===================================================== */

    function setupAboutAnimations() {

        const elements =
            document.querySelectorAll(
                ".about-introduction, " +
                ".about-story, " +
                ".value-card, " +
                ".about-craft, " +
                ".number-item, " +
                ".about-cta"
            );


        if (!elements.length) {
            return;
        }


        /* Intersection Observer */

        if ("IntersectionObserver" in window) {

            const observer =
                new IntersectionObserver(
                    function (entries, observerInstance) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "about-visible"
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

                    observer.observe(
                        element
                    );

                }
            );

        } else {

            elements.forEach(
                function (element) {

                    element.classList.add(
                        "about-visible"
                    );

                }
            );

        }

    }


    /* =====================================================
       COUNTER ANIMATION
       ===================================================== */

    function setupCounterAnimation() {

        const counters =
            document.querySelectorAll(
                "[data-counter]"
            );


        if (!counters.length) {
            return;
        }


        if (
            !("IntersectionObserver" in window)
        ) {

            counters.forEach(
                function (counter) {

                    setCounterValue(
                        counter
                    );

                }
            );

            return;

        }


        const observer =
            new IntersectionObserver(
                function (entries, observerInstance) {

                    entries.forEach(
                        function (entry) {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            animateCounter(
                                entry.target
                            );


                            observerInstance.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.5
                }
            );


        counters.forEach(
            function (counter) {

                observer.observe(
                    counter
                );

            }
        );

    }


    /* =====================================================
       SET COUNTER VALUE
       ===================================================== */

    function setCounterValue(counter) {

        const target =
            Number(
                counter.dataset.counter
            );


        const suffix =
            counter.dataset.suffix || "";


        counter.textContent =
            target + suffix;

    }


    /* =====================================================
       ANIMATE COUNTER
       ===================================================== */

    function animateCounter(counter) {

        const target =
            Number(
                counter.dataset.counter
            );


        const suffix =
            counter.dataset.suffix || "";


        if (
            !Number.isFinite(target)
        ) {

            counter.textContent =
                "0" + suffix;

            return;

        }


        const duration =
            1200;


        const startTime =
            performance.now();


        function updateCounter(currentTime) {

            const elapsed =
                currentTime -
                startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            /* Ease-out animation */

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const currentValue =
                Math.floor(
                    eased * target
                );


            counter.textContent =
                currentValue + suffix;


            if (
                progress < 1
            ) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    target + suffix;

            }

        }


        requestAnimationFrame(
            updateCounter
        );

    }


    /* =====================================================
       IMAGE EFFECTS
       ===================================================== */

    function setupAboutImageEffects() {

        const images =
            document.querySelectorAll(
                ".about-page img"
            );


        images.forEach(
            function (image) {

                image.addEventListener(
                    "error",
                    function () {

                        image.style.opacity =
                            "0.5";

                    }
                );

            }
        );

    }


})();