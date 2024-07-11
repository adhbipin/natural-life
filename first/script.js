var navlinks = document.getElementById("navLinks");
        function showMenu(){
            navlinks.style.right = "0";
        }
        function hideMenu(){
            navlinks.style.right = "-200px";
        }



const form = document.querySelector('.form');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=>{
    form.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    form.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    form.classList.add('active-popup');
});

