let line_menu = document.querySelector(".line_menu")
let menu = document.querySelector(".menu")
line_menu.onclick = function () {
    menu.classList.toggle ("active_line_menu")
    line_menu.classList.toggle ("line_menu_open")
}
