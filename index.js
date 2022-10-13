let ScoreHome = document.getElementById("ScoreHome")
let ScoreGuest= document.getElementById("ScoreGuest")
let PointH=0
let PointG=0

function PlusOneH(){
  PointH +=1
  ScoreHome.textContent=PointH
}
function PlusSecdH(){
    PointH +=2
    ScoreHome.textContent=PointH
}
function PlusThirdH(){
    PointH+=3
    ScoreHome.textContent=PointH
}
function PlusOneG(){
  PointG +=1
  ScoreGuest.textContent=PointG
}
function PlusSecdG(){
    PointG +=2
    ScoreGuest.textContent=PointG
}
function PlusThirdG(){
    PointG+=3
    ScoreGuest.textContent=PointG
}
function Reset(){
   ScoreGuest.textContent=0
   PointG=0
   ScoreHome.textContent=0
   PointH=0
  
} 