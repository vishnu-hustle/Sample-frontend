'use strict';
const dateDisplay = (document.querySelector('#date').textContent = new Date().getFullYear());
const header = document.querySelector('.header');
const headerContact = document.querySelector('#header-contact');
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const sidebarLink = document.querySelectorAll('.sidebar-link')

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 150) {
        headerContact.classList.add('hidden')
    } else {
        headerContact.classList.remove('hidden')
    }
});

window.addEventListener("resize", function() {
    if (window.innerWidth >= 769) {
        navLinks.classList.remove('hidden');
        navBtn.style.display = 'none';
    } else {
        navLinks.classList.add('hidden');
        navBtn.style.display = 'block';
    }
})

window.addEventListener("load", function() {
    if (window.innerWidth >= 769) {
        navLinks.classList.remove('hidden');
        navBtn.style.display = 'none';
    } else {
        navLinks.classList.add('hidden');
        navBtn.style.display = 'block';
    }
    whatwedosubHide(); //WHAT WE DO CHANGE
    whatwedosubHideMobile(); //WHAT WE DO CHANGE
})

navBtn.addEventListener('click', function() {
    sidebar.classList.add('show-sidebar');
})

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
})

for (let i = 0; i < sidebarLink.length; i++) {
    sidebarLink[i].addEventListener('click', function() {
        sidebar.classList.remove('show-sidebar');
    })
}


// aboutus-info and vision-info display/hide on click
$(document).ready(function() {
    $(".aboutus-btn").click(function() {
        $(".aboutus-details").animate({
            height: 'toggle'
        });
    });
    $(".vision-btn").click(function() {
        $(".vision-details").animate({
            height: 'toggle'
        });
    })
});


/*
WHAT WE DO SECTION STARTS
*/
function whatwedosubShow() {
    document.getElementById("triangle-up").hidden = false;
    document.getElementById("what-we-do-sub-container").hidden = false;
}

function whatwedosubHide() {
    document.getElementById("triangle-up").hidden = true;
    document.getElementById("what-we-do-sub-container").hidden = true;
}

function triangleFor1() {
    document.getElementById("triangle-up").style.marginLeft = "13.25%";
    document.getElementById("what-we-do-sub-container-img").src = "images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg";
    document.getElementById("what-we-do-sub-container-text").innerText = "We develop wide spectrum of business applications ranging from accounting, groupware, customer relationship management, and human resource management systems, outsourcing relationship management, loan origination software, shopping cart software, field service software, and other productivity enhancing applications";
}

function triangleFor2() {
    document.getElementById("triangle-up").style.marginLeft = "38.625%";
    document.getElementById("what-we-do-sub-container-img").src = "images/christian-wiediger-WkfDrhxDMC8-unsplash.jpg";
    document.getElementById("what-we-do-sub-container-text").innerText = "Our Independent Testing Practice (TaaS) framework comprises strategic assets such as process, people, and technology dedicated to the testing needs of businesses focused on increasing efficiency to create value for our customers. Our service offerings are differentiated into four core areas which cater to each requirement that a business may have.";
}

function triangleFor3() {
    document.getElementById("triangle-up").style.marginLeft = "63.25%";
    document.getElementById("what-we-do-sub-container-img").src = "images/markus-spiske-Skf7HxARcoc-unsplash.jpg";
    document.getElementById("what-we-do-sub-container-text").innerText = "Our Infrastructure and Cloud Technology Services feature innovative solutions to attain the right mix between delivering an excellent user experience and proactively reducing overhead cost.Key focus areas: Workplace Productivity, ZeroTouch Endpoint Management & Migration, Cloud Migration, DR & Backup, Digital Support Services, Network Services, Cloud Management Platform, Cloud Spend Management. Our Workplace Productivity As-A-Service is an integrated and unified zero touch management solution. Coupled with Click-to-Connect, it addresses the need for flexibility, affordability, and ease of use.";
}

function triangleFor4() {
    document.getElementById("triangle-up").style.marginLeft = "86.125%";
    document.getElementById("what-we-do-sub-container-img").src = "images/neonbrand-1-aA2Fadydc-unsplash.jpg";
    document.getElementById("what-we-do-sub-container-text").innerText = "we provide Online training to our consultants in different technologies to meet the Industry needs. Our training and mentoring services help you to build the right skills to support various IT and network related projects. We have certified professionals to provide training, support and guidance. Our training programs are designed by combining real world scenarios and our experiences over years of hands on experience and research. Our online courses presented through the Internet provide technical training in multiple technologies.";

}

function whatwedosubShowMobile() {

}


function whatwedosubHideMobile() {
    document.getElementById("message-box-1").hidden = true
    document.getElementById("message-box-2").hidden = true
    document.getElementById("message-box-3").hidden = true
    document.getElementById("message-box-4").hidden = true
}

function triangleForMobile1() {
    document.getElementById("triangle-up-1").style.marginLeft = "48%";
    document.getElementById("what-we-do-sub-container-img-1").src = "images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg";
    document.getElementById("what-we-do-sub-container-text-1").innerText = "We develop wide spectrum of business applications ranging from accounting, groupware, customer relationship management, and human resource management systems, outsourcing relationship management, loan origination software, shopping cart software, field service software, and other productivity enhancing applications";
    document.getElementById("message-box-1").hidden = false
    document.getElementById("message-box-2").hidden = true
    document.getElementById("message-box-3").hidden = true
    document.getElementById("message-box-4").hidden = true
}

function triangleForMobile2() {
    document.getElementById("triangle-up-2").style.marginLeft = "48%";
    document.getElementById("what-we-do-sub-container-img-2").src = "images/christian-wiediger-WkfDrhxDMC8-unsplash.jpg";
    document.getElementById("what-we-do-sub-container-text-2").innerText = "Our Independent Testing Practice (TaaS) framework comprises strategic assets such as process, people, and technology dedicated to the testing needs of businesses focused on increasing efficiency to create value for our customers. Our service offerings are differentiated into four core areas which cater to each requirement that a business may have.";
    document.getElementById("message-box-1").hidden = true
    document.getElementById("message-box-2").hidden = false
    document.getElementById("message-box-3").hidden = true
    document.getElementById("message-box-4").hidden = true
}

function triangleForMobile3() {
    document.getElementById("triangle-up-3").style.marginLeft = "48%";
    document.getElementById("what-we-do-sub-container-img-3").src = "images/markus-spiske-Skf7HxARcoc-unsplash.jpg";
    document.getElementById("what-we-do-sub-container-text-3").innerText = "Our Infrastructure and Cloud Technology Services feature innovative solutions to attain the right mix between delivering an excellent user experience and proactively reducing overhead cost.Key focus areas: Workplace Productivity, ZeroTouch Endpoint Management & Migration, Cloud Migration, DR & Backup, Digital Support Services, Network Services, Cloud Management Platform, Cloud Spend Management. Our Workplace Productivity As-A-Service is an integrated and unified zero touch management solution. Coupled with Click-to-Connect, it addresses the need for flexibility, affordability, and ease of use.";

    document.getElementById("message-box-1").hidden = true
    document.getElementById("message-box-2").hidden = true
    document.getElementById("message-box-3").hidden = false
    document.getElementById("message-box-4").hidden = true
}

function triangleForMobile4() {
    document.getElementById("triangle-up-4").style.marginLeft = "48%";
    document.getElementById("what-we-do-sub-container-img-4").src = "images/neonbrand-1-aA2Fadydc-unsplash.jpg";
    document.getElementById("what-we-do-sub-container-text-4").innerText = "we provide Online training to our consultants in different technologies to meet the Industry needs. Our training and mentoring services help you to build the right skills to support various IT and network related projects. We have certified professionals to provide training, support and guidance. Our training programs are designed by combining real world scenarios and our experiences over years of hands on experience and research. Our online courses presented through the Internet provide technical training in multiple technologies.";

    document.getElementById("message-box-1").hidden = true
    document.getElementById("message-box-2").hidden = true
    document.getElementById("message-box-3").hidden = true
    document.getElementById("message-box-4").hidden = false
}

/*
WHAT WE DO SECTION ENDS
*/

// who we server

function popupindustry1msg(){

   document.querySelector(".industry1-msg-bg").style.display = "flex";
   document.querySelector(".industry1-msg").style.display = "flex";
   document.querySelector(".industry2-msg").style.display = "none";
   document.querySelector(".industry3-msg").style.display = "none";
   document.querySelector(".industry4-msg").style.display = "none";

}
function popupindustry2msg(){

    document.querySelector(".industry1-msg-bg").style.display = "flex";
    document.querySelector(".industry1-msg").style.display = "none";
    document.querySelector(".industry2-msg").style.display = "flex";
    document.querySelector(".industry3-msg").style.display = "none";
    document.querySelector(".industry4-msg").style.display = "none";
 
 }
 function popupindustry3msg(){

    document.querySelector(".industry1-msg-bg").style.display = "flex";
    document.querySelector(".industry1-msg").style.display = "none";
    document.querySelector(".industry2-msg").style.display = "none";
    document.querySelector(".industry3-msg").style.display = "flex";
    document.querySelector(".industry4-msg").style.display = "none";
 
 }
 function popupindustry4msg(){

    document.querySelector(".industry1-msg-bg").style.display = "flex";
    document.querySelector(".industry1-msg").style.display = "none";
    document.querySelector(".industry2-msg").style.display = "none";
    document.querySelector(".industry3-msg").style.display = "none";
    document.querySelector(".industry4-msg").style.display = "flex";
 }

function closepopup(){
    
 document.querySelector(".industry1-msg-bg").style.display = "none"
 document.querySelector(".industry1-msg").style.display = "none";
 document.querySelector(".industry2-msg").style.display = "none";
 document.querySelector(".industry3-msg").style.display = "none";
 document.querySelector(".industry4-msg").style.display = "none";
  
}


  
// End of who we server