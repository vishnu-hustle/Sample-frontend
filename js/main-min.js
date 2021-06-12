'use strict';
const dateDisplay = (document.querySelector('#date').textContent = new Date().getFullYear());
const header = document.querySelector('.header');
const headerContact = document.querySelector('#header-contact');
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const sidebarLink = document.querySelectorAll('.sidebar-link');
const navContactDeatils = document.querySelector('#header-contact');


// add contact details in navigation bar
navContactDeatils.innerHTML =
    `<div class="header-contactDetails">
          <a href="telno:+918888888888">
            <i class="fas fa-phone"></i> + 91 888-888-8888
          </a >
          <span> | </span>
          <a href="mailto:abc@abc.com">
            <i class="fas fa-envelope"></i> inquiry@abc.com
          </a>
        </div >`

//remove phone and mail from navigation after scroll
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 150) {
        headerContact.classList.add('hidden')
    } else {
        headerContact.classList.remove('hidden')
    }
});

//show/hide nav-links and nav-button on window resize
window.addEventListener("resize", function () {
    if (window.innerWidth >= 769) {
        navLinks.classList.remove('hidden');
        navBtn.style.display = 'none';
    } else {
        navLinks.classList.add('hidden');
        navBtn.style.display = 'block';
    }
})

//show/hide nav-links and nav-button on screen load
window.addEventListener("load", function () {
    if (window.innerWidth >= 769) {
        navLinks.classList.remove('hidden');
        navBtn.style.display = 'none';
    } else {
        navLinks.classList.add('hidden');
        navBtn.style.display = 'block';
    }
})

//show sidebar in mobile/tablet mode
navBtn.addEventListener('click', function () {
    sidebar.classList.add('show-sidebar');
})


//hide navbar in mobile/tablet mode
closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
})

//add event listner to hide sidebar when clicked on link in mobile/tablet mode
for (let i = 0; i < sidebarLink.length; i++) {
    sidebarLink[i].addEventListener('click', function () {
        sidebar.classList.remove('show-sidebar');
    })
}
