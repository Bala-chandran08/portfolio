/* ======================================================= Toggle Icon Bar ==========================================================*/ 

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-mark');
    navbar.classList.toggle('active');
}

/* ======================================================= Scroll Section Active Link ==========================================================*/ 

let sections = document.querySelector("section");
console.log('sections: ', sections);
let navLinks = document.querySelector("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset &&  top < offset + height ) {
           navLinks.forEach.apply(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           })
        }
    })
}

/* ================================================= Sticky navbar =============================================================*/

let header = document.querySelector('header');
header.classList.toggle('sticky', window.screenY > 100);

/* ================================================= Remove toggle icon and navbar =============================================================*/

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

/* ================================================= Scroll Reveal =============================================================*/

ScrollReveal({
    distance : '80px',
    duration : 2000,
    delay : 200,
})

ScrollReveal().reveal('.home-content, heading', { origin : 'top' });
ScrollReveal().reveal('.home-img, .service-container , .portfolio-box, .contact form', { origin : 'button' });
ScrollReveal().reveal('.home-content, heading', { origin : 'top' });
ScrollReveal().reveal('.home-content, heading', { origin : 'top' });


/* ================================================= Typed JS =============================================================*/

const typed = new Typed('.multiple-text', {
    strings : ['Software Developer','Angular Developer', 'MEAN Stack Developer'],
    typeSpeed : 70,
    backSpeed : 70,
    backDelay : 1000,
    loop : true
})



/* ================= Skills Toggling Button ================================ */

const toggleBtnBox = document.querySelector('[data-toggle-box]');
const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
const skillsBox = document.querySelector('[data-skills-box]');
const elemToggleFunc = function(elem) { elem.classList.toggle('active'); }
for(let i = 0; i < toggleBtns.length; i++){
    toggleBtns[i].addEventListener('click', function(){
        elemToggleFunc(toggleBtnBox);

        for(let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
        elemToggleFunc(skillsBox);
    });
}

/* ===================== Form Section ======================================= */
(function() {
    emailjs.init("r2CTl6MqrnXAmPVj0"); // Initialize with your Public Key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send the form data using EmailJS
    console.log('this: ', this);
    emailjs.sendForm('service_bxcwdz6', 'template_gokrscp', this)
      .then(function() {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Reset the form after sending
      }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
      });
});