let count =0;

//select value and button

const value=document.querySelector('#value');
const btns=document.querySelectorAll(".btn1");

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
     const styles=e.currentTarget.classList;   
     
     if(styles.contains("decrease")){
         count--;
     }
     else if(styles.contains("increase")){
         count++;
     }

     else{
         count=0;
     }

     value.textContent=count;
    });

});

