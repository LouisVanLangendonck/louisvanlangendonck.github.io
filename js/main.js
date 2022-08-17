const updateButtonState = (button_element,class_name) => {
    const button_list = document.getElementsByClassName("active " + `${class_name}`)[0];
    if (button_list != null){
        document.getElementsByClassName("active " + `${class_name}`)[0].classList.remove("active");
        document.querySelectorAll("." + `${class_name}` + " .arrow-unactive")[0].classList.remove("arrow-unactive");
    }
    button_element.classList.add("active");
    button_element.firstElementChild.classList.add("arrow-unactive");
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

const addContentOnClicks = () => {
    const content_buttons = document.getElementsByClassName('menu-item');
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
        tree_button.checked = true;
        updateTreeState();
    })
}

addContentOnClicks();