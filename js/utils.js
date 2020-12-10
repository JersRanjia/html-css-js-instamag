var view_main = document.getElementById("view-main");
var view_prev = document.getElementById("view-prev");
var view_next = document.getElementById("view-next");

var img_next = view_next.getElementsByTagName("img")[0];
var img_main = view_main.getElementsByTagName("img")[0];
var img_prev = view_prev.getElementsByTagName("img")[0];

var menu = document.getElementById("menu-categs")

var list_firstImg = document.querySelectorAll(".mini-content img")

var selected = 1 //2eme

function mod(x, n) {
    let m = (( x % n) + n) % n;
    return m < 0 ? m + Math.abs(n) : m;
};

function modL(x) {
    return mod(x, list_firstImg.length)
};
