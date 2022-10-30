const messageEL = document.querySelector(".thank-message")
const container = document.querySelector(".container")
const holdernum = document.querySelector(".holder-number")
const cadname = document.querySelector(".cad-name")
const num1 = document.querySelector(".num1")
const num2 = document.querySelector(".num2")
const holdername = document.querySelector(".holder-name")
const valuemonth = document.querySelector(".value-month")
const valueyear = document.querySelector(".value-year")
const holdercvc = document.querySelector(".holder-cvc")
const form =document.querySelector(".form")
const inputnumber = document.querySelector(".input-number")
const confirmEl = document.querySelector(".confirm")
const continueEl = document.getElementById("continue")
const cvcupdate = document.querySelector(".cvc-update")


  form.addEventListener('submit', e => {

    if(holdername.value ===""){
      checkInputs()
    }else if(holdernum.value===""){
      checkInputs()
    }else if(isNaN(holdernum.value)){
     checkInputs()
    }
     else if(holdernum.value.length !== 16){
      checkInputs()
    }else if(valuemonth.value===""){
      checkInputs()
    }else if(isNaN(valuemonth.value)){
      checkInputs()
    }else if(valueyear.value===""){
      checkInputs()
    }else if(isNaN(valueyear.value)){
      checkInputs()
    }else if(holdercvc.value===""){
      checkInputs()
    }else if(isNaN(holdercvc.value)){
      checkInputs()
    }
    else{
      form.style.display = 'none'
      messageEL.style.display = 'block'
    }
   
 
     e.preventDefault()
   
   
   
  })


  continueEl.addEventListener('click', () => {
    window.location.reload();
})

function lettersonly(holdername){
  var regex = /[^a-zA-Z ]+$/
  holdername.value = holdername.value.replace(regex, "Please Input a valid Name")
}

  function checkInputs(){
   

    if(holdername.value === '') {
      setErrorFor(holdername, "Can't be blank")
    }else {
      setSuccessFor(holdername)
    }

    if(holdernum.value === '') {
      setErrorFor(holdernum, "Can't be blank")
    }else if(isNaN(holdernum.value)){
      setErrorFor(holdernum, "Wrong format numbers only")
    }else if(holdernum.value.length !== 16){
      setErrorFor(holdernum, "Invalid number")
    }else {
      setSuccessFor(holdernum)
    }
   

    if(holdercvc.value==='') {
      setErrorForcvc(holdercvc,  "Can't be blank")
    }else if(isNaN(holdercvc.value)){
      setErrorFor(holdercvc, "Wrong format Numbers only")
    } else {
      setSuccessForcvc(holdercvc)
    }


    if(  valuemonth.value===''){
      setErrorForDate(  valuemonth, "Can't be blank")
    }else if(isNaN(valuemonth.value)){
      setErrorFor(valuemonth, "Wrong format Numbers only")
    }else{
      setSuccessForDate( valuemonth)
    }

    
    if( valueyear.value===''){
      setErrorForDate( valueyear, "Can't be blank")
    }else if(isNaN(valueyear.value)){
      setErrorFor(valueyear, "Wrong format Numbers only")
    }else {
      setSuccessForDate( valueyear)
    }
     
 
    
  }


  function setErrorFor(input, message) {
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small')
    inputContainer.className = 'input-container error'
    small.textContent = message
  }
  function  setErrorForcvc(input, message){
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small')
    inputContainer.className = 'input-container inner error'
    small.innerText = message
  }

 

   function setErrorForDate(input, message){
     const inputContainer = input.parentElement;
     const small = inputContainer.querySelector('small')
     inputContainer.className = 'input-container inner error'
     small.innerText = message
   }

 
  function setSuccessFor(input) {
    const inputContainer = input.parentElement;
    inputContainer.className = 'input-container success'
  }

   function setSuccessForDate(input) {
     const inputContainer = input.parentElement;
     inputContainer.className = 'input-container inner success'
   }

  

  function setSuccessForcvc(input) {
    const inputContainer = input.parentElement;
    inputContainer.className = 'input-container inner success'
  }


  holdernum.addEventListener("input", (e) => {
 let num = holdernum.value
 let joy = num.match(/.{1,4}/g);
        inputnumber.innerHTML = joy.join(" ")
      })

      holdername.addEventListener("input", (e) => {
        cadname.textContent = holdername.value
      })
    
      valuemonth.addEventListener("input", (e) => {
          num1.textContent = valuemonth.value
        })
      
    
        valueyear.addEventListener("input", (e) => {
          num2.textContent = valueyear.value
        })

        holdercvc.addEventListener("input", (e) => {

          cvcupdate.textContent = holdercvc.value
        })
      
      
    