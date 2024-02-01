const sideBar = document.getElementById("sideBar");
const sideNavBar = document.getElementById("sideNavBar");
const toggleBtn = document.getElementById("toggleBtn");
const toggleMobileNavBar = document.getElementById("toggleMobileNavBar");
const currTool = document.getElementById("currTool");

const toggleSideBar = (e) => {
    let width = sideBar.style.width;
    if (width == "55px") {
        sideBar.style.width = "250px";
        sideBar.classList.remove("closeText");
    }
    else {
        sideBar.style.width = "55px";
        sideBar.classList.add("closeText");
    }
}

const toggleMobileSideBar = (e) => {
    let width = sideNavBar.style.width;
    if (width == "0px") {
        sideNavBar.style.width = "250px";
        toggleMobileNavBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    else {
        sideNavBar.style.width = "0px";
        toggleMobileNavBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

toggleBtn.addEventListener('click', toggleSideBar);
toggleMobileNavBar.addEventListener('click', toggleMobileSideBar);

const tools = document.querySelectorAll(".tool");

Array.from(tools).forEach((element)=>{
    element.addEventListener('click',()=>{
        currTool.innerText = element.querySelector('h3').innerText;
    })
})



textarea = document.querySelector("#userInput");
textarea.addEventListener('input', autoResize, false);
function autoResize() {
    this.style.height = this.scrollHeight + 'px';
    this.style.height = 'auto';
}