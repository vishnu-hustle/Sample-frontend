'use strict';
const dateDisplay = (document.querySelector('#date').textContent = new Date().getFullYear());
const header = document.querySelector('.header');
const headerContact = document.querySelector('#header-contact');
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const sidebarLink = document.querySelectorAll('.sidebar-link');
const secWhoWeAre = document.querySelector('#whoweare');
const secWhatWeDo = document.querySelector('#whatwedo');
const secWhoWeServe = document.querySelector('#whoweserve');
const secWhyUs = document.querySelector('#whyus');
const secContactUs = document.querySelector('#contactus');


//remove phone and mail from navigation after scroll
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 150) {
        headerContact.classList.add('hidden')
    } else {
        headerContact.classList.remove('hidden')
    }
});

//show/hide nav-links and nav-button on window resize
window.addEventListener("resize", function() {
    if (window.innerWidth >= 769) {
        navLinks.classList.remove('hidden');
        navBtn.style.display = 'none';
    } else {
        navLinks.classList.add('hidden');
        navBtn.style.display = 'block';
    }
})

//show/hide nav-links and nav-button on screen load
window.addEventListener("load", function() {
    if (window.innerWidth >= 769) {
        navLinks.classList.remove('hidden');
        navBtn.style.display = 'none';
    } else {
        navLinks.classList.add('hidden');
        navBtn.style.display = 'block';
    }
})

function loadIndex() {
    whatwedosubHide(); //WHAT WE DO CHANGE
    whatwedosubHideMobile(); //WHAT WE DO CHANGE
}
//show sidebar in mobile/tablet mode
navBtn.addEventListener('click', function() {
    sidebar.classList.add('show-sidebar');
})


//hide navbar in mobile/tablet mode
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
})


//add event listner to hide sidebar when clicked on link in mobile/tablet mode
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
=======================================================
Active Navigation tab under Home
=========================================================
*/
window.addEventListener('scroll', function() {
    document.querySelector("#whowearelink").classList.remove("active-link");
    document.querySelector("#whatwedolink").classList.remove("active-link");
    document.querySelector("#whoweservelink").classList.remove("active-link");
    document.querySelector("#whyuslink").classList.remove("active-link");
    document.querySelector("#contactuslink").classList.remove("active-link");

    if (window.pageYOffset >= secWhoWeAre.offsetTop - 100 && window.pageYOffset < secWhatWeDo.offsetTop - 100) {
        document.querySelector("#whowearelink").classList.add("active-link");
        document.querySelector("#whatwedolink").classList.remove("active-link");
        document.querySelector("#whoweservelink").classList.remove("active-link");
        document.querySelector("#whyuslink").classList.remove("active-link");
        document.querySelector("#contactuslink").classList.remove("active-link");
    } else if (window.pageYOffset >= secWhatWeDo.offsetTop - 100 && window.pageYOffset < secWhoWeServe.offsetTop - 100) {
        document.querySelector("#whowearelink").classList.remove("active-link");
        document.querySelector("#whatwedolink").classList.add("active-link");
        document.querySelector("#whoweservelink").classList.remove("active-link");
        document.querySelector("#whyuslink").classList.remove("active-link");
        document.querySelector("#contactuslink").classList.remove("active-link");
    } else if (window.pageYOffset >= secWhoWeServe.offsetTop - 100 && window.pageYOffset < secWhyUs.offsetTop - 100) {
        document.querySelector("#whowearelink").classList.remove("active-link");
        document.querySelector("#whatwedolink").classList.remove("active-link");
        document.querySelector("#whoweservelink").classList.add("active-link");
        document.querySelector("#whyuslink").classList.remove("active-link");
        document.querySelector("#contactuslink").classList.remove("active-link");
    } else if (window.pageYOffset >= secWhyUs.offsetTop - 100 && window.pageYOffset < secContactUs.offsetTop - 100) {
        document.querySelector("#whowearelink").classList.remove("active-link");
        document.querySelector("#whatwedolink").classList.remove("active-link");
        document.querySelector("#whoweservelink").classList.remove("active-link");
        document.querySelector("#whyuslink").classList.add("active-link");
        document.querySelector("#contactuslink").classList.remove("active-link");
    } else if (window.pageYOffset >= secContactUs.offsetTop - 100) {
        document.querySelector("#whowearelink").classList.remove("active-link");
        document.querySelector("#whatwedolink").classList.remove("active-link");
        document.querySelector("#whoweservelink").classList.remove("active-link");
        document.querySelector("#whyuslink").classList.remove("active-link");
        document.querySelector("#contactuslink").classList.add("active-link");
    }
})


/*
===============================================================
End of Active Navigation tab under Home and Animation on Scroll
===============================================================
*/


/*
WHAT WE DO SECTION
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
END of WHAT WE DO SECTION
*/

// who we server

function popupindustry1msg() {

    document.querySelector(".industry1-msg-bg").style.display = "flex";
    document.querySelector(".industry1-msg").style.display = "flex";
    document.querySelector(".industry2-msg").style.display = "none";
    document.querySelector(".industry3-msg").style.display = "none";
    document.querySelector(".industry4-msg").style.display = "none";

}

function popupindustry2msg() {

    document.querySelector(".industry1-msg-bg").style.display = "flex";
    document.querySelector(".industry1-msg").style.display = "none";
    document.querySelector(".industry2-msg").style.display = "flex";
    document.querySelector(".industry3-msg").style.display = "none";
    document.querySelector(".industry4-msg").style.display = "none";

}

function popupindustry3msg() {

    document.querySelector(".industry1-msg-bg").style.display = "flex";
    document.querySelector(".industry1-msg").style.display = "none";
    document.querySelector(".industry2-msg").style.display = "none";
    document.querySelector(".industry3-msg").style.display = "flex";
    document.querySelector(".industry4-msg").style.display = "none";

}

function popupindustry4msg() {

    document.querySelector(".industry1-msg-bg").style.display = "flex";
    document.querySelector(".industry1-msg").style.display = "none";
    document.querySelector(".industry2-msg").style.display = "none";
    document.querySelector(".industry3-msg").style.display = "none";
    document.querySelector(".industry4-msg").style.display = "flex";
}

function closepopup() {

    document.querySelector(".industry1-msg-bg").style.display = "none"
    document.querySelector(".industry1-msg").style.display = "none";
    document.querySelector(".industry2-msg").style.display = "none";
    document.querySelector(".industry3-msg").style.display = "none";
    document.querySelector(".industry4-msg").style.display = "none";

}



// End of who we server



/*
WHY US STARTS
*/


/*
================================
New Array Declaration
================================
*/

let newsArray = new Array();
newsArray.push("Our organization is about scale and quality. We take great care to deliver the best to our customers by understanding their needs. Focus, agility and flexibility from our side are always paramount as we go the extra mile to drive success for our customers.");
newsArray.push("We at Limsons IT Services LLC are Building the next Innovative IT job search website Dollar Dream Jobs (www.dollardreamjobs.com). The fastest way to find the right IT job USA and All over world.");
newsArray.push("We are accepting investment Capitol to develop this project. Raising a Target capital of $2 million with family and friends. $ 200,000 Committed so far by near and dear...");
newsArray.push("Minimum Investment $ 2500. preferred is 12,000 per investor. Reach Invest@limsons.com for More details about Investment plan ROI Etc.");


/*
===========================
News Banner
===========================
*/
let newsIndex = 0;

function loadleft() {
    newsIndex = (newsIndex - 1) % 4
    if (newsIndex < 0) {
        newsIndex = newsArray.length - 1;
    }
    console.log(newsIndex)
    document.getElementById('newsUpdate').innerText = newsArray[newsIndex];
}

function loadright() {
    newsIndex = (newsIndex + 1) % 4
    console.log(newsIndex)
    document.getElementById('newsUpdate').innerText = newsArray[newsIndex];
}


/*
WHY US ENDS
*/

/*
===========================
Animation
===========================
*/

const whoweareTimeline = new TimelineLite();


//Who we are animation
whoweareTimeline.fromTo('.whoweare-intro', 2, {
    opacity: 0,
    y: -30,
    // ease: Power3.easeout
}, {
    opacity: 1,
    y: 0
}).fromTo('.aboutus', 3, {
    opacity: 0,
    x: -50,
    // ease: step
}, {
    opacity: 1,
    x: 0
}, "-=1").fromTo('.vision', 3, {
    opacity: 0,
    x: +50,
    // ease: Power1
}, {
    opacity: 1,
    x: 0,
}, "-= 3");


const controller = new ScrollMagic.Controller();

const sceneWhoweare = new ScrollMagic.Scene({
        triggerElement: '.whoweare',
        // duration: 280,
        triggerHook: 0.8
    })
    .setTween(whoweareTimeline)
    //.addIndicators()
    .addTo(controller);


// What we do  --desktop
const whatwedoTimeline = new TimelineLite();

whatwedoTimeline.fromTo('#grid-item-what-we-do-1', 0.5, {
    opacity: 0,
    x: -50
}, {
    opacity: 1,
    x: 0
}).fromTo('#grid-item-what-we-do-2', 0.5, {
    opacity: 0,
    x: -50
}, {
    opacity: 1,
    x: 0
}).fromTo('#grid-item-what-we-do-3', 0.5, {
    opacity: 0,
    x: 50
}, {
    opacity: 1,
    x: 0
}).fromTo('#grid-item-what-we-do-4', 0.5, {
    opacity: 0,
    x: 50
}, {
    opacity: 1,
    x: 0
})

const sceneWhatwedo = new ScrollMagic.Scene({
        triggerElement: '.whatwedo-title'
    })
    .setTween(whatwedoTimeline)
    //.addIndicators()
    .addTo(controller);

//Who we serve
const whoweserveTimeline = new TimelineLite();
whoweserveTimeline.fromTo('.industry1', 1, {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}).fromTo('.industry2', 1, {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "+=0.1").fromTo('.industry3', 1, {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "+=0.1").fromTo('.industry4', 1, {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "+=0.1")


const sceneWhoweserve = new ScrollMagic.Scene({
        triggerElement: '.whoweserve'
    })
    .setTween(whoweserveTimeline)
    //.addIndicators()
    .addTo(controller);


// Why us
const whyusTimeline = new TimelineLite();

whyusTimeline.fromTo('.top-right h4', 1, {
    opacity: 0
}, {
    opacity: 1
}, "+=0.3").fromTo('.top-right p', 1, {
    opacity: 0
}, {
    opacity: 1
}, "+=0.3")

const sceneWhyus = new ScrollMagic.Scene({
        triggerElement: '.why-us h3'
    }).setTween(whyusTimeline)
    //.addIndicators()
    .addTo(controller);

//Values

//honesty

const honestyTimeline = new TimelineLite();

honestyTimeline.fromTo('#value1 .v1', 1, {
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1
}).fromTo('#value1 .v2', 1, {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "-=1");

const sceneHonesty = new ScrollMagic.Scene({
        triggerElement: ".values-heading"
    }).setTween(honestyTimeline)
    //.addIndicators()
    .addTo(controller);

const teamworkTimeline = new TimelineLite();

teamworkTimeline.fromTo('#value2 .v1', 1, {
    x: 100,
    opacity: 0
}, {
    x: 0,
    opacity: 1
}).fromTo('#value2 .v2', 1, {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "-=1")

const sceneTeamwork = new ScrollMagic.Scene({
        triggerElement: ".values-heading",
        triggerHook: 0.1
    }).setTween(teamworkTimeline)
    //.addIndicators()
    .addTo(controller);

// Challenger
const challengerTimeline = new TimelineLite();

challengerTimeline.fromTo('#value3 .v1', 1, {
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1
}).fromTo('#value3 .v2', 1, {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "-=1");

const sceneChallenger = new ScrollMagic.Scene({
        triggerElement: "#value2",
        triggerHook: 0.3
    }).setTween(challengerTimeline)
    //.addIndicators()
    .addTo(controller);


//engaged

const engagedTimeline = new TimelineLite();

engagedTimeline.fromTo('#value4 .v1', 1, {
    x: 100,
    opacity: 0
}, {
    x: 0,
    opacity: 1
}).fromTo('#value4 .v2', 1, {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, "-=1");

const sceneEngaged = new ScrollMagic.Scene({
        triggerElement: "#value3",
        triggerHook: 0.2
    }).setTween(engagedTimeline)
    //.addIndicators()
    .addTo(controller);


// What we do  --mobile
const whatwedoMobileTimeline = new TimelineLite();

whatwedoMobileTimeline.fromTo('#what-we-do-mobile #grid-item-what-we-do-1', 0.5, {
    opacity: 0,
    x: -50
}, {
    opacity: 1,
    x: 0
}).fromTo('#what-we-do-mobile #grid-item-what-we-do-2', 0.5, {
    opacity: 0,
    x: -50
}, {
    opacity: 1,
    x: 0
}).fromTo('#what-we-do-mobile #grid-item-what-we-do-3', 0.5, {
    opacity: 0,
    x: 50
}, {
    opacity: 1,
    x: 0
}).fromTo('#what-we-do-mobile #grid-item-what-we-do-4', 0.5, {
    opacity: 0,
    x: 50
}, {
    opacity: 1,
    x: 0
})

const sceneWhatwedoMobile = new ScrollMagic.Scene({
        triggerElement: '#whatwedo'
    })
    .setTween(whatwedoMobileTimeline)
    //.addIndicators()
    .addTo(controller);