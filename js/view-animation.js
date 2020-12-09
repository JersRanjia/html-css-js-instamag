var view_main = document.getElementById("view-main");
var view_prev = document.getElementById("view-prev");
var view_next = document.getElementById("view-next");

var img_next = view_next.getElementsByTagName("img")[0];
var img_main = view_main.getElementsByTagName("img")[0];
var img_prev = view_prev.getElementsByTagName("img")[0];

function next_view() {

    var class_mainToPrev = "main-to-prev"
    var class_nextToMain = "next-to-main"
    var class_viewFaded = "view-faded"

    view_prev.onanimationend = function (ev) {

        img_prev.src = img_main.src
        img_main.src = img_next.src

        view_next.classList.remove(class_nextToMain)
        view_main.classList.remove(class_mainToPrev)
        view_prev.classList.remove(class_viewFaded)
    };

    view_next.classList.add(class_nextToMain)
    view_main.classList.add(class_mainToPrev)
    view_prev.classList.add(class_viewFaded)

}

function prev_view() {

    var class_mainToNext = "main-to-next"
    var class_prevToMain = "prev-to-main"
    var class_viewFaded = "view-faded"

    view_next.onanimationend = function (ev) {
        
        img_next.src = img_main.src
        img_main.src = img_prev.src

        view_next.classList.remove(class_viewFaded)
        view_main.classList.remove(class_mainToNext)
        view_prev.classList.remove(class_prevToMain)

    };

    view_main.classList.add(class_mainToNext)
    view_prev.classList.add(class_prevToMain)
    view_next.classList.add(class_viewFaded)

}