
function next_view() {

    console.log(selected);

    let class_mainToPrev = "main-to-prev"
    let class_nextToMain = "next-to-main";
    let class_viewFaded = "view-faded"

    let index_main = modL(selected + 1)
    let index_prev = modL(index_main - 1)
    let index_next = modL(index_main + 1)

    view_prev.onanimationend = function (ev) {

        img_next.src = list_firstImg[index_next].src
        img_main.src = list_firstImg[index_main].src
        img_prev.src = list_firstImg[index_prev].src

        view_next.classList.remove(class_nextToMain)
        view_main.classList.remove(class_mainToPrev)
        view_prev.classList.remove(class_viewFaded)
        view_prev.onanimationend = null

    };

    view_next.classList.add(class_nextToMain)
    view_main.classList.add(class_mainToPrev)
    view_prev.classList.add(class_viewFaded)

    selected = modL(selected + 1)

}

function prev_view() {

    console.log(selected);
    let class_mainToNext = "main-to-next"
    let class_prevToMain = "prev-to-main"
    let class_viewFaded = "view-faded"

    let index_main = modL(selected - 1)
    let index_prev = modL(index_main - 1)
    let index_next = modL(index_main + 1)

    view_next.onanimationend = function (ev) {
        
        img_next.src = list_firstImg[index_next].src
        img_main.src = list_firstImg[index_main].src
        img_prev.src = list_firstImg[index_prev].src

        view_main.classList.remove(class_mainToNext)
        view_prev.classList.remove(class_prevToMain)
        view_next.classList.remove(class_viewFaded)

        view_next.onanimationend = null

    };

    view_main.classList.add(class_mainToNext)
    view_prev.classList.add(class_prevToMain)
    view_next.classList.add(class_viewFaded)

    selected = modL(selected - 1)

}

