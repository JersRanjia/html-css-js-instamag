
function init_view_by_mini() {
    img_prev.src = list_firstImg[0].src
    img_main.src = list_firstImg[1].src
    img_next.src = list_firstImg[2].src
}

function select_mini(nbr) {

    setSelected(nbr)

    let nb_prev = nbr - 1
    let nb_next = nbr + 1
    let len = list_firstImg.length
    nb_prev = mod(nb_prev, len)
    nb_next = mod(nb_next, len)

    img_prev.src = list_firstImg[nb_prev].src
    img_main.src = list_firstImg[nbr].src
    img_next.src = list_firstImg[nb_next].src

}

init_view_by_mini()