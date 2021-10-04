const dob = new Date(1988, 11, 26);
var diff_ms = Date.now() - dob.getTime();
var age_dt = new Date(diff_ms); 
var ageSpan = document.getElementsByClassName('about-me-age-span');

console.log(ageSpan.length);

for(ageSpanVar = 0; ageSpanVar < ageSpan.length; ageSpanVar++ ){
    ageSpan[ageSpanVar].innerHTML = Math.abs(age_dt.getUTCFullYear() - 1970);
}

function delayscroll(){
    console.log("clicked on header btn");
    setTimeout(function(){
        document.getElementById('about-me').scrollIntoView(true);
    },150);
} 

window.onscroll = function(){
    const aboutImages = document.getElementsByClassName("about-me-images").length;
    const el = document.querySelector(".about-me");
    if(window.pageYOffset >= el.offsetTop){
        document.getElementById("fixed-top-btn").style.display = "flex";
        for(abtImgs = 0; abtImgs < aboutImages; abtImgs++){
            document.getElementById("abt-img-"+(abtImgs + 1)).style.animationName = "about-me-image-"+(abtImgs + 1);
        }
    }else{
        document.getElementById("fixed-top-btn").style.display = "none";
        for(abtImgs = 0; abtImgs < aboutImages; abtImgs++){
            document.getElementById("abt-img-"+(abtImgs + 1)).style.animationName = "";
        }
    }

}

function smoothScroll(tgt,duration) {
    var tgt = document.querySelector(tgt);
    var tgtPosition =  tgt.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = tgtPosition - startPosition;
    var startTime = null;
    
    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t,b,c,d){
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t-2)-1) + b;
    }

    requestAnimationFrame(animation);
}
