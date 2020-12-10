function change_album_to_vacs() {

    let path = "img/vacances/"
    let imgs = document.querySelectorAll(".mini-content img")
    imgs[0].src = path.concat("livres.jpg")
    imgs[1].src = path.concat("panorama.jpg")
    imgs[2].src = path.concat("sables.jpg")
    imgs[3].src = path.concat("voiture.jpg")

    reload_mini_tab()
    init_view_by_mini()
    reinit_select_index()

}

function change_album_to_trav() {

    let path = "img/travaux/"
    let imgs = document.querySelectorAll(".mini-content img")
    imgs[0].src = path.concat("directeur.jpg")
    imgs[1].src = path.concat("engins.jpg")
    imgs[2].src = path.concat("micall.jpg")
    imgs[3].src = path.concat("toit.jpg")

    reload_mini_tab()
    init_view_by_mini()
    reinit_select_index()

}


function reload_mini_tab() {

    list_firstImg = document.querySelectorAll(".mini-content img")

}

function reinit_select_index() {

    selected = 1 //2eme

}