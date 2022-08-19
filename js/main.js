var page_state = ''
 
const initialize = () => { 
    if (window.matchMedia("(max-width: 700px)").matches) {
        page_state = 'mobile'
    }
    else {
        page_state = 'desktop'
    }
}

const updateButtonState = (button_element,class_name) => {
    const button_list = document.getElementsByClassName("active " + `${class_name}`)[0];
    if (button_list != null){
        document.getElementsByClassName("active " + `${class_name}`)[0].classList.remove("active");
        button_list.querySelector(".arrow").classList.remove("arrow-unactive");
        button_list.querySelector(".arrow").textContent=" +";
    }
    button_element.classList.add("active");
    button_element.querySelector(".arrow").textContent="- ";
    button_element.querySelector(".arrow").classList.add("arrow-unactive");
}

const updateContentState = (element, idx) => {
    if (Array.from(element.classList).includes("active")){
        const content_to_hide = document.getElementById(`${idx}`)
        content_to_hide.classList.add("hidden")
        element.classList.remove("active")
        element.querySelector(".arrow").textContent=" +";
        element.querySelector(".arrow").classList.remove("arrow-unactive");
    }
    else {
        updateButtonState(element, 'container-menu-item');
        Array.from(document.getElementsByClassName('container-content')).forEach((val) => {
            val.classList.add('hidden')
        })
        const content_to_show = document.getElementById(`${idx}`)
        content_to_show.classList.remove("hidden")
    }
}

const updateTreeState = () => {
    const TreeState = document.getElementById('drawing-canvas')
    if (TreeState.classList.contains("hidden")) {
        TreeState.classList.remove("hidden")
        document.getElementById("myCheck").checked = true;
    }
    else {
        TreeState.classList.add("hidden")
        document.getElementById("myCheck").checked = false;
    }
}

const updateProjectsMenuState = () => {
    const projects_menu = document.getElementsByClassName('projects-menu')[0];
    if (Array.from(projects_menu.classList).includes("hidden")) {
        projects_menu.classList.remove('hidden')
    }
    else {
        projects_menu.classList.add('hidden')
    }
}

const updateAboutMenuState = () => {
    const about = document.getElementById('about-top');
    const about_menu = document.getElementById('about-menu');
    if (Array.from(about.classList).includes("hidden")) {
        about.classList.remove('hidden')
        about_menu.classList.remove('hidden')
    }
    else {
        about.classList.add('hidden')
        about_menu.classList.add('hidden')
    }
}
const addContentOnClicks = () => {
    const content_buttons = document.getElementsByClassName('container-menu-item');
    Array.from(content_buttons).forEach((element, idx) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            updateContentState(element, idx)
        })
    })

    const tree_button = document.getElementsByClassName('switch')[0];
    tree_button.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        updateTreeState();
    })

    const projects_button = document.getElementById('projects-button');
    if (projects_button !== null) {
        if (page_state == 'mobile') {
            projects_button.addEventListener('click', (e) => {
                e.preventDefault();
                updateProjectsMenuState();
            })
        }
    }

    const about_button = document.getElementById('about-button');
    if (about_button !== null) {
        if (page_state == 'mobile') {
            about_button.addEventListener('click', (e) => {
                e.preventDefault();
                updateAboutMenuState();
            })
        }
    }
}

initialize();
addContentOnClicks();
var x = window.matchMedia("(max-width: 700px)")
x.addEventListener("change", () => {
    initialize();
    }
);
