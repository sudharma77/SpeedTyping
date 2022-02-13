let inputValue = document.getElementById("input")
const upperDiv = document.getElementById("upperDiv")
let container = document.getElementById('container')
let timeShow = document.getElementById('timer')
let timerButton = document.getElementById('button')
//
let ssss ;
let timerSet = true
let firstTime = 0 ;
let secondTime = 0 ;
timeShow.style.display = 'none'

timerButton.addEventListener('click' ,()=>{
     timeOnDoc.style.display = 'none'
     container.style.display = ''
     timerButton.style.display = 'none'
     upperDiv.innerHTML = '' ;
     inputValue.value = null ;
     generator() ;

})

inputValue.addEventListener("input" ,()=>{
      const allSpan = upperDiv.querySelectorAll('span')
      const inptvl = inputValue.value.split("") ;
      if(timerSet){
           const p = new Date()
           const s = p.getTime() ;
           firstTime = s ;
           timerSet = false ;
      }
      let c = 0;
      allSpan.forEach((charar , index)=>{
           const A = inptvl[index+1] ;
           if(A === charar.innerHTML){ //span always give character in in innerHTML. 
                charar.classList.add("correct");
                charar.classList.remove("incorrect");
                c++;
                
           }else{
               charar.classList.remove("correct");
               charar.classList.add("incorrect");  
                            
           }
        })  

        if(allSpan.length === c ){
          const t = new Date()
          const k = t.getTime() ;
          secondTime = k ;
          timer()
          }  
        
      
 })

 let timeOnDoc = document.querySelector('span')

 function timer(){
      container.style.display = 'none' ;
      timeShow.style.display = ''
      const timeTaken = (secondTime - firstTime)%1000  ;
      timeOnDoc.innerHTML = `${timeTaken}sec`
      }
const RndmQuotes = 'http://api.quotable.io/random' ;

function characterForType(){ ///.........................
     return  fetch(RndmQuotes)
     .then(response =>response.json())
     .then(data=>data.content)
}
generator()
async function generator(){
      ssss = await characterForType()
      ssss.split("").forEach(e=>{
          const charSpan = document.createElement("span")
          charSpan.innerHTML = e ;
          upperDiv.appendChild(charSpan)//'''''''''''''''''''
          })   
      
} 
//generator()

// inputValue.addEventListener("input",function(){
     
//      let inp = inputValue.value ;
//      log.style.color = 'red' ;   
//      log.innerHTML = inp ;    
// })

// inputValue.addEventListener('keypress', logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }