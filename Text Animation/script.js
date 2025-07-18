function BreakText(){
  var h1=document.querySelector("h1")
var h1Text=h1.textContent

var splittedText=h1Text.split("")
var halfvalue=splittedText.length/2

var Sas=""
splittedText.forEach((elem,idx)=>{
 if(idx<halfvalue){
  Sas+=`<span class="a">${elem}</span>`
 }else{
   Sas+=`<span class="b">${elem}</span>`
 }
})
h1.innerHTML=Sas
}

BreakText()

gsap.from(".a",{
  y:50,
  duration:0.6,
  delay:0.5,
  stagger:0.2,
  opacity:0
})
gsap.from(".b",{
  y:50,
  duration:1,
  delay:0.5,
  stagger:-0.2,
  opacity:0
})
