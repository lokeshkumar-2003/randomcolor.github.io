
const haxNumber=document.querySelector(".hax");
const btnClick=document.querySelector(".color-click");

const hax=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btnClick.addEventListener('click',function(){
  let randomColor='#';
  haxNumber.textContent="";
  for(let i=0;i<=6;i++){
  
    randomColor+=hax[randomColorGenerator()];
    document.body.style.background=randomColor;
    haxNumber.textContent=randomColor;
  }
})

function randomColorGenerator(){
 // console.log(hax[Math.floor(Math.random()*hax.length)]);
  
  return Math.floor(Math.random()*hax.length);
}