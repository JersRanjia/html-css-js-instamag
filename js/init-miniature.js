
var list_firstImg = document.querySelectorAll(".mini-content img")

img_prev.src = list_firstImg[0].src
img_main.src = list_firstImg[1].src
img_next.src = list_firstImg[2].src

var selected = 1 //2eme

function select_mini(nbr) {



}

function mod(x, n) {
    var m = (( x % n) + n) % n;
    return m < 0 ? m + Math.abs(n) : m;
};
