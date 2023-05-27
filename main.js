// ==== Header Toggle START ==== //
let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('menuActive')
    MenuBtn.classList.toggle('fa-xmark')
})

// ==== Header Toggle END ==== //

// <========================-------------------------------=========================> //

// ==== Typing Animation START ==== //

let type = new Typed('.auto-input', {
    strings: ['Front-End Developer..!', 'Freelancer..!', 'UI Designer..!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})

// ==== Typing Animation END ==== //
// <========================-------------------------------=========================> //


// ======= Skill Section Animation START ======= //

// Get All Progress Bar
const progressBars = document.querySelectorAll('.inner-line');

window.addEventListener('scroll', function () {

    // Loop through each progress bar
    progressBars.forEach(function (progressBar) {

        // Get the bounding rectangle of the progress bar
        const rect = progressBar.getBoundingClientRect();

        // Check if progress bar is visible on the screen

        if (rect.top < window.innerHeight && rect.bottom >= 0) {

        // Get the width of progress bar
        const widthBar = progressBar.getAttribute('data-width');

        // Animate the progress bar
            progressBar.style.width = widthBar + '%';
        }
    })
})

// ======= Skill Section Animation END ======= //

// <========================-------------------------------=========================> //

// ======= Active Link STATE on Scroll START ======= //

// Get all links
let navLinks = document.querySelectorAll('header nav ul li a')
// Get all Section
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 10
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            })
        }
    })
});

// ======= Active Link STATE on Scroll END ======= //
