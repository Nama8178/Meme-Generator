let rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    let rectLocation = rect.getBoundingClientRect();//location of rectangle
    let final_location = (details.clientX - rectLocation.left);
    document.getElementById("result").innerHTML = final_location;
    if (final_location<rectLocation.width/2) {
        let bg1 = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, final_location);
        gsap.to(rect,{
            backgroundColor: `rgb(${bg1},0,0)`,
        });
    }
    else{
        let bg2 = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width, 0, 255, final_location);;
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${bg2})`,
        });
    }
});
rect.addEventListener("mouseleave",function () {
    gsap.to(rect,{
        backgroundColor: "white",
    })
})