var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var img=document.querySelector("#image")

main.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
  //  ease: "bounce.out",

  })
})
img.addEventListener("mouseenter",()=>{
  cursor.innerHTML="View More"
gsap.to(cursor,{
  scale:4
})
})
img.addEventListener("mouseleave",()=>{
   cursor.innerHTML=""
gsap.to(cursor,{
  scale:1
})
})