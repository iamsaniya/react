const plus=document.querySelector('.plus')
,minus=document.querySelector('.minus')
number=document.querySelector('.number');

let a=1;

plus.addEventListener('click',()=>{
    a++;
   
    number.innerText=a;
});

minus.addEventListener('click',()=>{
    a--;
   number.innerText=a;
});