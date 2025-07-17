var menu=document.querySelector("#nav i")
var cross=document.querySelector("#full i")
var bod=document.querySelector("body")


var tl=gsap.timeline();
tl.to("#full",{
  right:0,
  duration:0.6
})
tl.from("#full h4",{
  x:100,
  duration:0.7,
  stagger:0.2,
  opacity:0
})
tl.from("#full i", {
  opacity:0
})
tl.pause()

menu.addEventListener("click",()=>{
tl.play()
})
cross.addEventListener("click",()=>{
tl.reverse()
})
