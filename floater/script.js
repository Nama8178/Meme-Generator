window.addEventListener("mousemove",function(details){
    let x = details.clientX;
    gsap.to("#Rect",{
        left: x + "px",
    });
})