let wel = document.querySelector("#wel")
let to = document.querySelector("#to")
let vis = document.querySelector("#vis")
let irri = document.querySelector("#irri")
let photo2 = document.querySelector("#photo2")




let tl = gsap.timeline();


tl.from("#wel" ,{
    opacity:0,
    x:"40%",
    delay:0.3,
    duration:0.5,
    


})

tl.from("#to" ,{
    opacity:0,
    x:"40%",
    delay:0,
    duration:0.6,



})
tl.from("#vis" ,{
    opacity:0,
    x:"40%",
    delay:0,
    duration:0.9,


})
tl.from("#irri" ,{
    opacity:0,
    x:"40%",
    delay:0,
    duration:0.9,


})
tl.from("#photo2" ,{
    opacity:0,
    scale:1.4,
    x:"40%",
    delay:0,
    duration:0.8,


})

let line1 = document.querySelector("#line1")
let line2= document.querySelector("#line2");
let line3= document.querySelector("#line3");
let line4= document.querySelector("#line4");
let video= document.querySelector("#video");
let add2= document.querySelector("#add2");




gsap.from("#line1" ,{
    opacity:0,
    x:"-40%",
    
    scrollTrigger:{
        trigger:"#line1",
        scroller:"body",
        // markers:{
        //     startColor:"transparent"},
        start:"top 80%",
        end:"top 60%",
        scrub:3,
       }
})
gsap.from("#line2" ,{
    opacity:0,
    x:"30%",
    
    scrollTrigger:{
        trigger:"#line2",
        scroller:"body",
        // markers:"true",
        start:"top 76%",
        end:"top 58%",
        scrub:3,
       }
})
gsap.from("#line3" ,{
    opacity:0,
    x:"-40%",
    
    scrollTrigger:{
        trigger:"#line3",
        scroller:"body",
        // markers:"true",
        start:"top 72%",
        end:"top 60%",
        scrub:3,
       }
})
gsap.from("#line4" ,{
    opacity:0,
    x:"20%",
    
    scrollTrigger:{
        trigger:"#line4",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top 62%",
        scrub:3,
       }
})
gsap.from("#video" ,{
    opacity:0,
    scale:0.5,
    
    scrollTrigger:{
        trigger:"#video",
        scroller:"body",
        // markers:"true",
        start:"top 83%",
        end:"top 73%",
        scrub:3,
       }
})
gsap.from("#add2" ,{
    opacity:0,
    scale:0.5,
    
    scrollTrigger:{
        trigger:"#add2",
        scroller:"body",
        // markers:"true",
        start:"top 60%",
        end:"top 49%",
        scrub:3,
       }
})

let full1 =document.querySelector("#full1");
let full2 =document.querySelector("#full2")
let full3=document.querySelector("#full3")
let full4 =document.querySelector("#full4");
let main3 =document.querySelector("#main3")




gsap.from("#full1",{
    perspective:"7vh",
    rotateX:90,
    opacity:0.2,
    scrollTrigger:{
        trigger:"#full1",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top 50%",
        scrub:3,


    }
})

gsap.from("#full2",{
    perspective:"7vh",
    rotateX:-90,
    opacity:0.2,
    scrollTrigger:{
        trigger:"#full2",
        scroller:"body",
        // markers:"true",
        start:"top 50%",
        end:"top 30%",
        scrub:3,

    }
})


gsap.from("#full3",{
    perspective:"7vh",
    rotateY:90,
    opacity:0.2,
    scrollTrigger:{
        trigger:"#full3",
        scroller:"body",
        // markers:"true",
        start:"top 40%",
        end:"top 20%",
        scrub:3,
      

    }
})

gsap.from("#full4",{perspective:"7vh",rotateY:-90,opacity:0.2, scrollTrigger:{trigger:"#full4",scroller:"body",
        //  markers:"true",
start:"top 40%",end:"top 20%", scrub:3,}})

let facebook=document.querySelector("#facebook")
let google=document.querySelector("#google")
let whatsapp=document.querySelector("#whatsapp")
let body=document.querySelector("body")
let cursor=document.querySelector("#cursor")
body.addEventListener("mousemove", (a)=>{console.log(a);gsap.to("#cursor" ,{x:a.x,y:a.y,ease:"sine",delay:0,duration:0.2,})})

let footer4=document.querySelector("#footer4")
let writen2=document.querySelector("#writen2")
gsap.to("#footer4 #writen2" ,{ transform:"translateX(-75%)", scrollTrigger:{ scroller:"body",
        // markers:"true",
trigger:"#footer4",start:"top 30%",end:"top -20%", scrub:3, pin:true
 }})

let services=document.querySelector("#services")
let aboutus=document.querySelector("#aboutus")
let brands=document.querySelector("#brands")
gsap.from("#services",{opacity:0,x:-20,scrollTrigger:{trigger:"#services",scroller:"body",
        // markers:"true",
         start:"top 80%", end:"top 50%", scrub:3,}})
gsap.from("#aboutus",{opacity:0, x:40, scrollTrigger:{ trigger:"#aboutus", scroller:"body",
        // markers:"true",
         start:"top 80%", end:"top 50%", scrub:3,}})
gsap.from("#brands",{opacity:0, x:-40, scrollTrigger:{ trigger:"#brands", scroller:"body",
        // markers:"true",
start:"top 90%",end:"top 75%", scrub:3,}})

let photo1=document.querySelector("#photo1")
let photo23=document.querySelector("#photo23")
let photo3=document.querySelector("#photo3")
let photo4=document.querySelector("#photo4")
photo1.addEventListener("click" ,()=>{alert("THIS IMAGE IS FOR SHOW PURPOSE ONLY")
})
photo23.addEventListener("click" ,()=>{alert("THIS IMAGE IS FOR SHOW PURPOSE ONLY")
})
photo3.addEventListener("click" ,()=>{alert("THIS IMAGE IS FOR SHOW PURPOSE ONLY")
})
photo4.addEventListener("click" ,()=>{alert("THIS IMAGE IS FOR SHOW PURPOSE ONLY")
})
photo2.addEventListener("click" ,()=>{alert("THHIS IMAGE IS AUTHORISED BY VISWAS AND COORPERATION LIMITED")
})