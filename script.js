// Selected All elements
const trigger = document.querySelectorAll(".cool > li");
const dropdown = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handelenter(){
    this.classList.add("trigger-enter");
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    dropdown.classList.add("open");

    const dropdownBg = this.querySelector(".dropdown");
    const dropdowncoords = dropdownBg.getBoundingClientRect();
    const navcoods = nav.getBoundingClientRect();

    const coords = {
        width: dropdowncoords.width,
        height:  dropdowncoords.height,
        top: dropdowncoords.top - navcoods.top,
        left: dropdowncoords.left - navcoods.left,
    }
    dropdown.style.setProperty('width', `${coords.width}px`)
    dropdown.style.setProperty('height', `${coords.height}px`)
    dropdown.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}
function handelleave(){
    this.classList.remove("trigger-enter");
    this.classList.remove("trigger-enter-active");
    dropdown.classList.remove("open");
}
trigger.forEach(trigger => trigger.addEventListener("mouseenter", handelenter));
trigger.forEach(trigger => trigger.addEventListener("mouseleave", handelleave));