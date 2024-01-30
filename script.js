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
        </div>`
    })
})