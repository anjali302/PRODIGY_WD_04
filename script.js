document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { title: "Project 1", description: "StopWatch Application." },
        { title: "Project 2", description: "Tic-Tac-Toe Game." },
    ];

    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectItem);
    });

});
