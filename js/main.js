let page_state = 0;
const nav_elements = document.getElementsByClassName('nav-item');
Array.from(nav_elements).forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        updatePageState(element)
    })
});

const updateButtonState = (button_element,class_name) => {
    console.log("active " + `${class_name}`)
    console.log(document.getElementsByClassName("active " + `${class_name}`))
    const button_list = document.getElementsByClassName("active " + `${class_name}`)[0];
    if (button_list != null){
        document.getElementsByClassName("active " + `${class_name}`)[0].classList.remove("active");
        document.querySelectorAll("." + `${class_name}` + " .arrow-unactive")[0].classList.remove("arrow-unactive");
    }
    button_element.classList.add("active");
    button_element.firstElementChild.classList.add("arrow-unactive");
}

const updatePageState = (element) => {
    classArray = Array.from(element.classList)
    if (classArray.includes("active")){
        return true
    }
    else {
        updateButtonState(element, 'nav-item');
        const id = element.id;
        if (id == 'about') {
            page_state = 0;
        }
        else if (id == 'projects') {
            page_state = 1;
        }
        else if (id == 'cv') {
            page_state = 2;
        }
        console.log(page_state);
    }
}

const addContentOnClicks = () => {
    const content_buttons = document.getElementsByClassName('menu-item');
    Array.from(content_buttons).forEach((element, idx) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            updateContentState(element, idx)
        })
    })
}

const updateContentState = (element, idx) => {
    if (Array.from(element.classList).includes("active")){
        return true
    }
    else {
        updateButtonState(element, 'menu-item');
        Array.from(document.getElementsByClassName('container-content')).forEach((val) => {
            console.log(val.classList)
            val.classList.add('hidden')
        })
        const content_to_show = document.getElementById(`${idx}`)
        content_to_show.classList.remove("hidden")
    }
}

addContentOnClicks();