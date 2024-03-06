let cardholder_name_input=document.querySelector("#name");
let cardholder_name=document.querySelector(".name");






cardholder_name_input.addEventListener("input",(e)=>{
    cardholder_name.innerText=e.target.value;
})


let card_number=document.querySelector(".card-number");
let card_number_input=document.querySelector("#cardNumber");

card_number_input.addEventListener("input",(e)=>{
    let number =e.target.value
    card_number.innerText=number.match((/[\s\S]{1,4}/g)).join(" ");
})


let mm_input=document.querySelector("#mm");
let mm_text=document.querySelector(".month");

mm_input.addEventListener("input",(e)=>{
    mm_text.innerText=e.target.value;
})



let yy_input=document.querySelector("#yy");
let yy_text=document.querySelector(".year");

yy_input.addEventListener("input",(e)=>{
    yy_text.innerText=e.target.value;
})


let cvc_input=document.querySelector("#cvc");
let cvc_text=document.querySelector(".cvc");

cvc_input.addEventListener("input",(e)=>{
    cvc_text.innerText=e.target.value;
})


let form =document.querySelector("form");
let form_container=document.querySelector(".form-container")
let thaks_container=document.querySelector(".thaks-container");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validation()
    form.reset();

})

let continue_btn=document.querySelector(".continue");

continue_btn.addEventListener("click",()=>{
    thaks_container.style.display="none";
    form_container.style.display="flex";
    cardholder_name.innerText="abu salman";
    card_number.innerText="0000 0000 0000 0000";
    mm_text.innerText="00";
    yy_text.innerText="00";
    cvc_text.innerText="123";

})




let name_errormsg=document.querySelector(".name_errormsg")
let number_errormsg=document.querySelector(".number_errormsg")
let date_errormsg=document.querySelector(".date_errormsg")
let cvc_errormsg=document.querySelector(".cvc_errormsg")

function validation(){

    let nameinput=0;

    if(cardholder_name_input.value===""){
        name_errormsg.style.display="block"
        cardholder_name_input.style.border="1px solid red"
        nameinput=1;

    }else{
        name_errormsg.style.display="none"
        cardholder_name_input.style.border="1px solid hsl(270, 3%, 87%)"
        // form_container.style.display="none";
        // thaks_container.style.display="flex"
        nameinput=0;
    }

    let cardinput=0;

    if(card_number_input.value==="" || !/^\d*$/.test(card_number_input.value)){
        number_errormsg.style.display="block";
        card_number_input.style.border="1px solid red"
        cardinput=1;
    }else{
        number_errormsg.style.display="none"
        card_number_input.style.border="1px solid hsl(270, 3%, 87%)"
        // form_container.style.display="none";
        // thaks_container.style.display="flex"
        cardinput=0;
    }


    let dateinput=0;

    if(mm_input.value===""|| yy_input.value===""||!/^\d*$/.test(mm_input.value)||!/^\d*$/.test(yy_input.value)){
        date_errormsg.style.display="block";
        mm_input.style.border="1px solid red";
        yy_input.style.border="1px solid red";
        dateinput=1;

    }else{
        date_errormsg.style.display="none"
        mm_input.style.border="1px solid hsl(270, 3%, 87%)"
        yy_input.style.border="1px solid hsl(270, 3%, 87%)"
        // form_container.style.display="none";
        // thaks_container.style.display="flex"
        dateinput=0;
    }


    let cvcinput=0;

    if(cvc_input.value==="" ||!/^\d*$/.test(cvc_input.value)){
        cvc_errormsg.style.display="block"
        cvc_input.style.border="1px solid red"
        cvcinput=1;

    }else{
        cvc_errormsg.style.display="none"
        cvc_input.style.border="1px solid hsl(270, 3%, 87%)"
        // form_container.style.display="none";
        // thaks_container.style.display="flex"
        cvcinput=0;
    }

    if(nameinput===0&&cardinput===0&&dateinput===0&& cvcinput===0){
        form_container.style.display="none";
        thaks_container.style.display="flex"
    }else{
        form_container.style.display="flex";
        thaks_container.style.display="none"
    }

}


// let a="12345"
// let b=!/^\d*$/.test(a)
// console.log(typeof b);
// console.log(b);