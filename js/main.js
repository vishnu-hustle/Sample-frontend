'use strict';
const dateDisplay = (document.querySelector('#date').textContent = new Date().getFullYear());
const header = document.querySelector('.header');
const headerContact = document.querySelector('#header-contact');
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const sidebarLink = document.querySelectorAll('.sidebar-link')

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 150) {
        headerContact.classList.add('hidden')
    } else {
        headerContact.classList.remove('hidden')
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth >= 769) {
        navLinks.classList.remove('hidden');
        navBtn.style.display = 'none';
    } else {
        navLinks.classList.add('hidden');
        navBtn.style.display = 'block';
    }
})

window.addEventListener("load", function () {
    if (window.innerWidth >= 769) {
        navLinks.classList.remove('hidden');
        navBtn.style.display = 'none';
    } else {
        navLinks.classList.add('hidden');
        navBtn.style.display = 'block';
    }
})

navBtn.addEventListener('click', function () {
    sidebar.classList.add('show-sidebar');
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
})

for (let i = 0; i < sidebarLink.length; i++) {
    sidebarLink[i].addEventListener('click', function () {
        sidebar.classList.remove('show-sidebar');
    })
}


// aboutus-info and vision-info display/hide on click
$(document).ready(function () {
    $(".aboutus-btn").click(function () {
        $(".aboutus-details").animate({
            height: 'toggle'
        });
    });
    $(".vision-btn").click(function () {
        $(".vision-details").animate({
            height: 'toggle'
        });
    })
});
