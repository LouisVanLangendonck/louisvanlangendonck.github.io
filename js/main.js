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
        console.log(document.getElementsByClassName("active")[0]);
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementsByClassName("arrow-unactive")[0].classList.remove("arrow-unactive");
        element.classList.add("active");
        element.firstElementChild.classList.add("arrow-unactive");
        // 
    }
}

