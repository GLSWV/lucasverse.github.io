function switchImage() {
  var tmp = this.getAttribute('data-img2');
  this.setAttribute('data-img2', this.src);
  this.src = tmp;
}

var imgs = document.querySelectorAll('#timeline img');

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('mouseover', switchImage, false);
  imgs[i].addEventListener('mouseout', switchImage, false);
}
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('touchstart', switchImage, false);
  imgs[i].addEventListener('touchend', switchImage, false);
}

function myMenu() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

window.oncontextmenu = function(event) {
     return false;
};