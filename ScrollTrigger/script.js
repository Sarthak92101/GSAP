gsap.from("#page1 #box",{
scale:0,
delay:1,
duration:2,
rotate:180,
// repeat:-1,
// yoyo:true
})

gsap.from("#page2 #box",{
scale:0,
opacity:0,
//delay:2,
duration:1,
rotate:720,
scrollTrigger:{
  trigger:"#page2 #box",
  scroller:"body",
  markers:true,
  start:"top 60%",
  end:"top 10%",
  scrub:4
}
})


// gsap.from("h1",{
//   opacity:0,
//   duration:2,
//   x:500,
//   scrollTrigger:{
//     trigger:"#page2 h1",
//     scroller:"body",
//     markers:true,
//     start:"top 50%"

//   }
// })

// gsap.from("h2",{
//   opacity:0,
//   duration:2,
//   x:-500,
//   scrollTrigger:{
//     trigger:"#page2 h2",
//     scroller:"body",
//     markers:true,
//     start:"top 50%"

//   }
// })