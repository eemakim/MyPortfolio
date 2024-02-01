// *** Nav bar scrolling highlight *** 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

let current = 'home';

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.id;
        }
    })

    navLinks.forEach(navLink => {
        if (navLink.href.includes(current)) {
            document.querySelector('.active').classList.remove('active');
            navLink.classList.add('active');

        }
    })
})

// *** Nav menu for mobile ***

const menuLines = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.mobile-nav')

menuLines.addEventListener('click', function () {
    navMenu.classList.toggle('visible')
})

const menuLinks = document.querySelectorAll('.mobile-nav a')
menuLinks.forEach(function (menuLink) {

    menuLink.addEventListener('click', function () {
        navMenu.classList.toggle('visible')
    })
})



// *** JS for JSON fetch request ***
const projectsDisplay = document.querySelector('.portfolio-grid')

fetch('projects.json').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data.projects)

    data.projects.forEach(function (project) {
        projectsDisplay.innerHTML += `<div class="project-item"><a href="${project.githubLink}" target="_blank">
        <img src="${project.img}" class="project-image" alt="thumbnail image of project"/>
        <p class="project-desc">${project.projectDesc}</p>
        <h4 class="project-name"><span class="code-symbol">< </span>${project.projectName}<span class="code-symbol"> /></span></h4></a></div>
        `
    })
})




// *** Form submit event ***


const submitMessage = document.querySelector('.form')
const nameInput = document.querySelector('#name').value
const emailInput = document.querySelector('#email').value
const textInput = document.querySelector('#message').value

submitMessage.addEventListener('submit', function (e) {

    if (
        (nameInput.length === 0) ||
        (emailInput.length === 0) ||
        (textInput.length < 15)
    ) {
        console.log('form is submitting')
        e.preventDefault()

        // FOR WEDNESDAY 31st JAN
        // form doesnt submit even if all fields are filled????

    }
})
