
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

function mod(x, n) {
    var m = (( x % n) + n) % n;
    return m < 0 ? m + Math.abs(n) : m;
};
