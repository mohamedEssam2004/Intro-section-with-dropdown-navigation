const feature = document.getElementById("feature");
const company = document.getElementById("company");
const featureArrow = document.querySelector("#feature img");
const companyArrow = document.querySelector("#company img");
const company_menu = document.querySelector(".company-menu");
const feature_menu = document.querySelector(".feature-menu");


feature.addEventListener("click", (e) => {
    e.preventDefault();
    feature_menu.classList.toggle("open");
    if(feature_menu.classList.contains("open")) {
        featureArrow.src = "images/icon-arrow-up.svg";
    } else {
        featureArrow.src = "images/icon-arrow-down.svg";
    }
});
company.addEventListener("click", (e) => {
    e.preventDefault();
    company_menu.classList.toggle("open");
    if (company_menu.classList.contains("open")) {
        companyArrow.src = "images/icon-arrow-up.svg";
    } else {
        companyArrow.src = "images/icon-arrow-down.svg";
    }
});


const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const overlay = document.querySelector(".overlay");
const mobMenu = document.querySelector(".mob-menu");


menuBtn.onclick = function () {
    overlay.style.display = "block";
    mobMenu.style.display = "block";
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
};
closeBtn.onclick = function () {
    overlay.style.display = "none";
    mobMenu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
};


const mob_feature = document.getElementById("mob-feature");
const mob_company = document.getElementById("mob-company");
const mob_featureArrow = document.querySelector("#mob-feature img");
const mob_companyArrow = document.querySelector("#mob-company img");
const mob_company_menu = document.querySelector(".mob-company-menu");
const mob_feature_menu = document.querySelector(".mob-feature-menu");


mob_feature.addEventListener("click", (e) => {
    e.preventDefault();
    mob_feature_menu.classList.toggle("open");
    if(mob_feature_menu.classList.contains("open")) {
        mob_featureArrow.src = "images/icon-arrow-up.svg";
    } else {
        mob_featureArrow.src = "images/icon-arrow-down.svg";
    }
});
mob_company.addEventListener("click", (e) => {
    e.preventDefault();
    mob_company_menu.classList.toggle("open");
    if (mob_company_menu.classList.contains("open")) {
        mob_companyArrow.src = "images/icon-arrow-up.svg";
    } else {
        mob_companyArrow.src = "images/icon-arrow-down.svg";
    }
});
