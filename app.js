import project from "./projects.js";

// get parent element

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayprojectItems(project);
    displayprojectButtons();
});

//* To display projects

function diplayprojectItems(projectItems) {
    let displayproject = projectItems.map(function (item) {

        return `<article class="project-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.id}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayproject = displayproject.join("");

    sectionCenter.innerHTML = displayproject;
}

//* To display filter buttons

const displayprojectButtons = () => {

    // To create the buttons
    const categories = project.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    const categoryBtns = categories.map(category =>{
        return `<button class="filter-btn"  type="button" data-id=${category}>${category}</button>`
    }).join('');
    btnContainer.innerHTML = categoryBtns
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    // filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const projectCategory = project.filter(function (projectItem) {
                if (projectItem.category === category) {
                    return projectItem;
                };
            });
            if (category === "all") {
                diplayprojectItems(project);
            } else {
                diplayprojectItems(projectCategory);
            };
        });
    });
};

// const liveReload = () => {
//     window.location.reload();
// };

// setInterval(liveReload, 10000);