function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}




const Uname=document.getElementById('name')
const email=document.getElementById('email');
const suggestion=document.getElementById('suggestion');
const form=document.getElementById('submit-form')
const error=document.getElementById('error')




form.addEventListener('submit',(e)=>{
  let messages=[]



  if(Uname.value.trim().length<5 )
  {
    messages.push('Name is too short')
  }


 else if(!email.value.trim().match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/ ))
  {
    messages.push('Enter Valid Email')
  }

  else if(suggestion.value.trim().length<10)
  {
    messages.push('suggestion is too short')
  }

  if(messages.length>0){
    e.preventDefault()
    error.innerText=messages.join(', ')
  }



 
})


       
    
       


