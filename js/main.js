// navbar
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Remove "active" class from all nav items
      navLinks.forEach(link => link.classList.remove("active"));
      // add active to link that i clicked 
      link.classList.add("active");
    });
  });
});
let scrollbutton = document.querySelector('.scroll-top');
window.onscroll = function() {
  if (window.scrollY >= 100) { 
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
};
scrollbutton.onclick=function(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}