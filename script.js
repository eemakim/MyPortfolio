// *** JS for JSON fetch request ***
const projectsDisplay = document.querySelector('.portfolio-grid')

fetch('projects.json').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data.projects)

    data.projects.forEach(function (project) {
        projectsDisplay.innerHTML += `<div>
        ${project.img}
        <h4>${project.projectName}</h4>
        <p>${project.projectDesc}</p>
        <a href="${project.githubLink}">See more on Github</a>
        </div>`
    })
})