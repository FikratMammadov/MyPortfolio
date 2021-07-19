// Sticky Navigation Bar On Scroll
window.addEventListener("scroll", function () {
    let navbar = this.document.querySelector('nav')
    navbar.classList.toggle("sticky", window.scrollY > 0);
})

// Responsive Navbar Button
let navbar = document.querySelector('.navbar');
let navBtn = document.querySelector('.navbar-toggler');
let navLists = document.querySelector('.nav-lists');

function navbarResize(){
    if(window.innerWidth>768){
        navLists.style.display = "flex";
        navBtn.style.display = "none"
    }
    else{
        navLists.style.display = "none";
        navBtn.style.display = "flex"
    }
}
 
navBtn.addEventListener('click', function () {
    if (navLists.style.display == "none") {
        navLists.style.display = "flex";
        let navbar = document.querySelector("nav");
        navbar.classList.add('sticky')
    }
    else{
        navbar.classList.remove('sticky')
        navLists.style.display = "none";
    }
     
})

