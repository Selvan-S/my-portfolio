document.getElementById("myform").reset();

const hamburger = document.getElementById('nav-toggle');
let navMenu = document.getElementById('nav-menu');
let navList = document.querySelectorAll('.nav__link');

function show_menu(){
    // To close the menu using hamburger icon.
    hamburger.addEventListener('click', () =>{
        navMenu.classList.toggle('show');
    });
    // To close the menu, after clicking any link in the menu.
    navList.forEach(element => {
       element.addEventListener('click', ()=>{
        navMenu.classList.toggle('show');
       }) 
    });
}
show_menu();
