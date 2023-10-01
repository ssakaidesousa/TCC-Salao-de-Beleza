const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");
const headerEl = document.querySelector('.header')
const navEl = document.querySelector('.nav')
const mobileEl = document.querySelector('.mobile')

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});



window.addEventListener('scroll', () => {
    if(window.scrollY > 20){
        headerEl.classList.add('header-scrolled')
        navEl.classList.add('nav-scrolled')
    } else if (window.scrollY <= 20){
         headerEl.classList.remove('header-scrolled')
         navEl.classList.remove('nav-scrolled')
    }
})

mobileEl.addEventListener('click', () =>{
    navEl.classList.toggle("nav-open")
    mobileEl.classList.toggle("mobile-open")
})

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    CSSUnparsedValue.classList.toggle("expanded-card")
  });
});