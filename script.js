"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const translate = document.querySelectorAll(".translate");
    const bigTitle = document.querySelector(".big-title");
    const header = document.querySelector("header");
    const shadow = document.querySelector(".shadow");
    const content = document.querySelector(".content");
    const section = document.querySelector("section");
    const imageContainer = document.querySelector(".imgContainer");
    const opacity = document.querySelectorAll(".opacity");
    const border = document.querySelector(".border");
    const menu = document.querySelector(".hamburger-menu");
    const menuItem = menu.querySelector(".bar");
    console.log(menu);

    let headerHeight = header.offsetHeight; 
    let sectionHeight = section.offsetHeight;

    console.log(sectionHeight);



    window.addEventListener("scroll", () => {
        let scroll = window.pageYOffset;
        let sectionY = section.getBoundingClientRect();

        translate.forEach (item => {
            let speed = item.dataset.speed;
            item.style.transform = `translateY(${scroll * speed}px)`;
            
        }); 

        opacity.forEach(item => {
            item.style.opacity = scroll / (sectionY.top + sectionHeight);
        })

        bigTitle.style.opacity = - scroll / (headerHeight / 2) + 1;
        shadow.style.height = `${scroll * 0.5 + 300}px`;
        content.style.transform = `translateY(${scroll / (sectionHeight + sectionY.top) * 50 - 50}px)`;
        imageContainer.style.transform = `translateY(${scroll / (sectionHeight + sectionY.top) * -50 + 50}px)`;
        border.style.width = `${scroll / (sectionY.top + sectionHeight) * 30}%`;
    });

    menu.addEventListener("click", () => {
        menuItem.classList.toggle('barD');
        console.log(menuItem);
    });
});
