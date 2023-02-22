console.log("Hello World!!")
document.querySelector('.mainaudio').pause();



document.querySelector('.burger').addEventListener('click', function () {
    alert('hi')
})

document.querySelector('.voice').addEventListener('click', function () {
    document.querySelector('.voice').style = "display: none;"
    document.querySelector('.novoice').style = "display: block;"
    document.querySelector('.mainaudio').muted = true;
    document.querySelector('.mainaudio').pause();


})
document.querySelector('.novoice').addEventListener('click', function () {
    document.querySelector('.novoice').style = "display: none;"
    document.querySelector('.voice').style = "display: block;"
    document.querySelector('.mainaudio').muted = false;
    document.querySelector('.mainaudio').play();;
    // document.querySelector('.burgerManu').style = "display: block;"
})
document.addEventListener("keydown", e => {
    // alert(e.key)
    if (e.key != "m", "M") {
        if (document.querySelector('.mainaudio').paused) {
            document.querySelector('.mainaudio').play();
            document.querySelector('.novoice').style = "display: none;"
            document.querySelector('.voice').style = "display: block;"
        } else if (document.querySelector('.mainaudio').play) {
            document.querySelector('.mainaudio').pause();
            document.querySelector('.voice').style = "display: none;"
            document.querySelector('.novoice').style = "display: block;"
        }
    }
    else {
        alert('hi')
    }
})

document.querySelector('.darkmode').addEventListener("click", function () {
    // alert("Hi")
    document.querySelector('body').style = "background-color: rgb(33, 32, 32); " + "color: white;"
    document.querySelector(".manubar-1").style = "color: white;"
    document.querySelector(".manubar-2").style = "color: white;"
    document.querySelector(".manubar-3").style = "color: white;"
    document.querySelector(".send-1").style = "color: white;"
    document.querySelector(".send-2").style = "color: white;"
    document.querySelector(".send-3").style = "color: white;"
    document.querySelector(".send-4").style = "color: white;"
    document.querySelector(".send-5").style = "color: white;"
    document.querySelector(".close").style = "color: white;"
    document.querySelector(".theline-1").style = "background-color: white;"
    document.querySelector(".theline-2").style = "background-color: white;"
    document.querySelector(".theline-3").style = "background-color: white;"
    document.querySelector(".darkmode").style = "display: none;"
    document.querySelector('.lightmode').style = "display: block;"
});
document.querySelector('.lightmode').addEventListener("click", function () {
    // alert("Hi")
    document.querySelector('body').style = "background-color: white; " + "color: black;"
    document.querySelector(".theline-1").style = "background-color: black;"
    document.querySelector(".theline-2").style = "background-color: black;"
    document.querySelector(".theline-3").style = "background-color: black;"
    document.querySelector(".manubar-1").style = "color: black;"
    document.querySelector(".manubar-2").style = "color: black;"
    document.querySelector(".manubar-3").style = "color: black;"
    document.querySelector(".send-1").style = "color: black;"
    document.querySelector(".send-2").style = "color: black;"
    document.querySelector(".send-3").style = "color: black;"
    document.querySelector(".send-4").style = "color: black;"
    document.querySelector(".send-5").style = "color: black;"
    document.querySelector(".close").style = "color: black;"
    document.querySelector(".lightmode").style = "display: none;"
    document.querySelector('.darkmode').style = "display: block;"
});
i = 1;
document.querySelector('.next').addEventListener('click', function () {
    i++;
    // alert("me-"+i+".jpeg")
    document.querySelector('.sliderImg').src = "me-" + i + ".jpeg"
    if (i == 6) {
        i = 1;
    }
    document.querySelector(".comment-" + i).style = "display:block";

})
i = 5
document.querySelector('.back').addEventListener('click', function () {
    i--;
    // alert("me-"+i+".jpeg")
    document.querySelector('.sliderImg').src = "me-" + i + ".jpeg"
    if (i == 1) {
        i = 6;
    }
    document.querySelector(".comment-" + i).style = "display:none";
})



var d = new Date()
// d.getHours(); // => 9
// d.getMinutes(); // =>  30
// d.getSeconds(); // => 51

console.log(d.getHours())
let a = d.getHours();
if (d.getHours() <= 5 || d.getHours() >= 19) {
    document.querySelector('body').style = "background-color: rgb(33, 32, 32); " + "color: white;"
    document.querySelector(".manubar-1").style = "color: white;"
    document.querySelector(".manubar-2").style = "color: white;"
    document.querySelector(".manubar-3").style = "color: white;"
    document.querySelector(".theline-1").style = "background-color: white;"
    document.querySelector(".theline-2").style = "background-color: white;"
    document.querySelector(".theline-3").style = "background-color: white;"
    document.querySelector(".darkmode").style = "display: none;"
    document.querySelector('.lightmode').style = "display: block;"
} else {
    document.querySelector('body').style = "background-color: white; " + "color: black;"
    document.querySelector(".theline-1").style = "background-color: black;"
    document.querySelector(".theline-2").style = "background-color: black;"
    document.querySelector(".theline-3").style = "background-color: black;"
    document.querySelector(".manubar-1").style = "color: black;"
    document.querySelector(".manubar-2").style = "color: black;"
    document.querySelector(".manubar-3").style = "color: black;"
    document.querySelector(".lightmode").style = "display: none;"
    document.querySelector('.darkmode').style = "display: block;"
}

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.send-1').style = "display: none;"
    document.querySelector('.send-2').style = "display: none;"
    document.querySelector('.send-3').style = "display: none;"
    document.querySelector('.send-4').style = "display: none;"
    document.querySelector('.close').style = "display: none;"

})

window.onscroll = function () {
    var pageHeight = document.body.offsetHeight;
    var element = document.querySelector(".send-5");
    if (window.scrollY >= pageHeight / 7) {
        element.style = "display: block;"
    } else {
        element.style = "display: none;"
    }
};

function scrollToSection(className) {
    var section = document.querySelector('.' + className);
    section.scrollIntoView({behavior: "smooth"});
}

let loding =document.querySelector('.loading')

window.addEventListener('load',function(){
    loding.style = "display: none;"
})