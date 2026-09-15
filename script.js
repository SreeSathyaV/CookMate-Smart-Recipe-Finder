/* =========================================================
   COOKMATE - MAIN JAVASCRIPT
   File: js/script.js
   ========================================================= */


/* =========================
   1. SEARCH RECIPE
   ========================= */

function searchRecipe() {

    const searchInput = document.getElementById("homeSearch");

    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value.trim();

    if (searchText === "") {

        alert("Please enter a recipe name to search.");

        searchInput.focus();

        return;
    }

    /*
        Send the search text to recipes.html.
        Example:
        recipes.html?search=chicken biryani
    */

    const searchURL =
        "recipes.html?search=" +
        encodeURIComponent(searchText);

    window.location.href = searchURL;
}


/* =========================
   2. SEARCH USING ENTER KEY
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("homeSearch");

    if (searchInput) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                searchRecipe();

            }

        });

    }

});


/* =========================
   3. CATEGORY LINKS
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const categoryCards =
        document.querySelectorAll(".category-card");

    categoryCards.forEach(function (card) {

        card.addEventListener("click", function () {

            /*
                Category navigation is already handled
                by the href in index.html.
            */

            console.log(
                "Opening recipe category..."
            );

        });

    });

});


/* =========================
   4. BUTTON CLICK FEEDBACK
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const buttons =
        document.querySelectorAll(".primary-btn, .secondary-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.classList.add("button-clicked");

            setTimeout(function () {

                button.classList.remove("button-clicked");

            }, 250);

        });

    });

});


/* =========================
   5. SCROLL ANIMATION
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const animatedElements =
        document.querySelectorAll(
            ".category-card, .recipe-card, .equipment-item, .step"
        );

    const observerOptions = {
        threshold: 0.15
    };

    const observer =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-animation"
                    );

                    observer.unobserve(entry.target);

                }

            });

        }, observerOptions);


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

});


/* =========================
   6. PREVENT EMPTY LINKS
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    const links =
        document.querySelectorAll("a[href='#']");

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

        });

    });

});


/* =========================
   7. WELCOME MESSAGE
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "🍳 Welcome to CookMate - Smart Recipe Finder!"
    );

});
/* Scroll Animation */

.category-card,
.recipe-card,
.equipment-item,
.step {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.category-card.show-animation,
.recipe-card.show-animation,
.equipment-item.show-animation,
.step.show-animation {
    opacity: 1;
    transform: translateY(0);
}
