// gsap.to("#box", {
//   x:1000,
//   duration:1,
//   delay:1,
//   rotate:180,
//   backgroundColor:"green",
//   borderRadius:"50%",
//   //scale:0.5,
//   // repeat:-1,
//   // yoyo:true
// })

// gsap.from("h1",{
//   opacity:0,
//   duration:2,
//   y:20,
//   delay:1,
//   stagger:1
  
// })
// gsap.to("#box1",{
//   x:1200,
//   rotate:360,
//   duration:1.5,
//   delay:1
// })
// gsap.to("#box2",{
//   x:1200,
//   backgroundColor:"purple",
//   rotate:360,
//   duration:1.5,
//   delay:2.5
// })

// gsap.to("#box3",{
//   x:1200,
//  scale:0.5,
//  borderRadius:"50%",
//   rotate:360,
//   duration:1.5,
//   delay:4
// })


// var tl =gsap.timeline()
// tl.to("#box1",{
//   x:2600,
//   rotate:360,
//   duration:1.5,
//   delay:1,
//   // repeat:-1,
//   // yoyo:true,
//   //  borderRadius:"50%"
// })


// tl.to("#box2",{
//   x:2600,
//   rotate:360,
//   duration:1.5,
//   delay:1,
//   // repeat:-1,
//   // yoyo:true,
//   //  borderRadius:"50%"
// })



// tl.to("#box3",{
//   x:2600,
//   rotate:360,
//   duration:1.5,
//   delay:1,
//   // repeat:-1,
//   // yoyo:true,
//   //  borderRadius:"50%"
// })


var tl = gsap.timeline();

tl.from("h2",{
  y:-20,
  opacity:0,
  duration:1,
  delay:0.5
})

tl.from("h4",{
  y:-20,
  opacity:0,
  duration:1,
  stagger:0.3
})

tl.from("h1",{
  y:20,
  opacity:0,
  duration:1,
  scale:0.2
})

