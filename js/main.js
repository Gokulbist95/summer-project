const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
burger.addEventListener("click",() => {
    nav.classList.toggle('show');
});


// pop-up

// document.querySelector("#show-login").addEventListener("click",()=>{
//     document.querySelector(".popup").classList.add("active");
// });

// document.querySelector(".popup .closebtn").addEventListener("click",()=>{
//     document.querySelector(".popup").classList.remove("active");
// });