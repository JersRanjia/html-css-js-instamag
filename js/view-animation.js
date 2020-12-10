
function next_view() {

    console.log(selected);

    var class_mainToPrev = "main-to-prev"
    var class_nextToMain = "next-to-main"
    var class_viewFaded = "view-faded"

    var next_index = modL(selected + 2)

    view_prev.onanimationend = function (ev) {

        img_prev.src = img_main.src
        img_main.src = img_next.src

        img_next.src = list_firstImg[next_index].src

        view_next.classList.remove(class_nextToMain)
        view_main.classList.remove(class_mainToPrev)
        view_prev.classList.remove(class_viewFaded)
    };

    view_next.classList.add(class_nextToMain)
    view_main.classList.add(class_mainToPrev)
    view_prev.classList.add(class_viewFaded)

    selected = modL(selected + 1)
}

function prev_view() {

    console.log(selected);
    var class_mainToNext = "main-to-next"
    var class_prevToMain = "prev-to-main"
    var class_viewFaded = "view-faded"

    var prev_index = modL(selected - 2)

    view_next.onanimationend = function (ev) {
        
        img_next.src = img_main.src
        img_main.src = img_prev.src
        img_prev.src = list_firstImg[prev_index].src

        view_next.classList.remove(class_viewFaded)
        view_main.classList.remove(class_mainToNext)
        view_prev.classList.remove(class_prevToMain)

    };

    view_main.classList.add(class_mainToNext)
    view_prev.classList.add(class_prevToMain)
    view_next.classList.add(class_viewFaded)

    selected = modL(selected - 1)

}

