$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Java Back-End Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Java Back-End Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
document.getElementById("pr111").addEventListener("click", ()=> window.open('https://wondrous-marigold-ae1bc8.netlify.app/','_blank') );
document.getElementById("pr11").addEventListener("click", ()=> window.open('https://github.com/chanchal-soni98/direful-order','_blank') );
document.getElementById("pr211").addEventListener("click", ()=> window.open('https://capable-dragon-d91ac8.netlify.app/','_blank') );
document.getElementById("pr21").addEventListener("click", ()=> window.open('https://github.com/chanchal-soni98/outgoing-mine-4990','_blank') );
document.getElementById("pr311").addEventListener("click", ()=> window.open('https://drive.google.com/file/d/10Cr57JWXcCiNq8mJxUKGvDtKXWGiMSwd/view?usp=share_link','_blank') );
document.getElementById("pr31").addEventListener("click", ()=> window.open('https://github.com/Amitvaghamshi/brief-toes-9591','_blank') );
document.getElementById("pr41").addEventListener("click", ()=> window.open('https://github.com/chanchal-soni98/Online-Banking-System','_blank') );
document.getElementById("pr411").addEventListener("click", ()=> window.open('https://drive.google.com/file/d/1vW3fjx2-Fw8kViYAgq0uGB36PsR6LA0h/view?usp=share_link','_blank') );
document.getElementById("drive").addEventListener("click", ()=> window.open('https://drive.google.com/uc?id=15TrxNUIXH-NJU65Nx4MzPAXTw_gJrWPS&authuser=0&export=download','_blank') );


