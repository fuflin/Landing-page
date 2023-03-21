
// scroll to up

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


//menu burger

var sidenav = document.getElementById("navbar");
var openBtn = document.getElementById("openBtn");

const navEl = sidenav.querySelectorAll("li");

navEl.forEach(item => {
  item.addEventListener('click', function() {
    sidenav.classList.remove('active')
  })
});


openBtn.addEventListener('click', function() {
  sidenav.classList.toggle("active");
})
