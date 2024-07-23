

var mouseTimeout;

function mousefollower(xscale, yscale){
    //the value of the mouse pointer is saved in the clientx and clienty, dets is the details
    document.addEventListener("mousemove", function(dets){
        document.querySelector(".mousefollower").style.transform = `translate(${dets.clientX - 6}px, ${dets.clientY - 6}px) scale(${xscale}, ${yscale})`   // - 6 is used so that the circle would be in the between of the cutsor pointer, it's optional
    })
}

function skewMouseFollower(){
    var xscale = 1;
    var yscale = 1;


    var xprevious = 0;
    var yprevious = 0;
    window.addEventListener("mousemove", function(dets){

        clearTimeout(mouseTimeout)
        var xdiff = dets.clientX - xprevious;
        xprevious  = dets.clientX;

        var ydiff = dets.clientY - yprevious;
        yprevious = dets.clientY;

        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);

        mousefollower(xscale, yscale);


        mouseTimeout = setTimeout(function(){
            document.querySelector(".mousefollower").style.transform = `translate(${dets.clientX - 6}px, ${dets.clientY - 6}px) scale(1,1)`
        }, 100) //this settimeout code makes the scale to the orginal value i.e 1 1 so and then cleartimeout code clears the previoius scale so that the mousefollower won't be in the scaled state.
    })
}

mousefollower();
skewMouseFollower();