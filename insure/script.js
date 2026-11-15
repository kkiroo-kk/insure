const menu = document.getElementById("menu");
const menux = document.getElementById("menux");
const muneShow = document.querySelector(".mune-show");

// Open menu
menu.addEventListener("click", function () {
    muneShow.style.display = "block";
    menu.style.display = "none";
    menux.style.display = "block";

    menu.setAttribute("aria-expanded", "true");
    menux.setAttribute("aria-expanded", "true");

});

// Close menu
menux.addEventListener("click", function () {
    muneShow.style.display = "none";
    menu.style.display = "block";
    menux.style.display = "none";

    menu.setAttribute("aria-expanded", "false");
    menux.setAttribute("aria-expanded", "false");

});