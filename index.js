// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("social-item_container");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }


var label = document.getElementById('menu');

label.onclick = function() {
  console.log('show-nav')
    var div = document.getElementById('show-nav');
    if (div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

// const mobileNavHandler = document.getElementById("menu")
// mobileNavHandler.addEventListener('click', function(){
//   document.getElementById("show-nav").classList.toggle('mobile-toggle')
// })