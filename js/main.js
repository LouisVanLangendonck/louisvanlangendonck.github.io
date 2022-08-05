let page_state = 0;
const elements = document.getElementsByClassName('nav-item');
Array.from(elements).forEach((element) => {
    let classArray = Array.from(element.classList)
    element.addEventListener('click', (e) => {
        e.preventDefault();
        updatePageState(element)
    })
    // if (classArray.includes("active")){
    //     element.classList.remove("active")
    // }
});

const updatePageState = (element) => {
    classArray = Array.from(element.classList)
    if (classArray.includes("active")){
        return true
    }
    else {
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active");
    }
}

