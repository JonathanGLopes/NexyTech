const $menuMobile = document.querySelector(".menu-mobile__icon");
const $navbarLinks = document.querySelector(".navbar__links");

$menuMobile.addEventListener("click", () => {
    $navbarLinks.classList.toggle("navbar__active");
    $navbarLinks.classList.toggle("wrap-nav");
})


// document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
//     $navbarLinks.classList.remove("navbar__active");
// }));