// *** JS for JSON fetch request ***
const projectsDisplay = document.querySelector('.portfolio-grid')

fetch('projects.json').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data.projects)

    data.projects.forEach(function (project) {
        projectsDisplay.innerHTML += `<div class="project-items">
        <div>${project.img}</div>
        <p class="project-item desc">${project.projectDesc}</p>
        <div class="link-buttons"><a href="${project.githubLink}" target="_blank"><h4><span id="code">< </span>${project.projectName}<span> /></span></h4></a></div>
        </div><span>hello</span>`
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
