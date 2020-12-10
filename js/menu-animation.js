function hide_show_menu() {

    let menu_to_none = "menu_to_none"
    let menu_to_show = "menu_to_show"

    if (menu.display === "none") {

        menu.display = "block"
        menu.style.animationName = menu_to_show

    } else {

        menu.onanimationend = function(ev) {
            menu.display = "none"
            menu.onanimationend = null
        }

        menu.style.animationName = menu_to_none

    }


}