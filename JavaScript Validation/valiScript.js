 //Requesting user their first name
    var user = prompt("Hi, what is your first name?")
    document.getElementsById("userFirstNmae").innerHTML = "WELCOME BACK!" + user;
   
function formValidation(){

    //Requesting user to provide details in 'Contact us'
    let firstName = document.forms["myForm"]["fname"].value;
     let lastname = document.forms["myForm"]["lname"].value;
      let emailAdress = document.forms["myForm"]["email"].value;
       let emailSubject = document.forms["myForm"]["esub"].value;
       //var message = document.forms["myForm"]["emessage"].value;

       //Validating textboxes
       if(firstName === "" ){
        alert("You required to fill in all the spaces!")
            return false;
       }
       else if(lastname === ""){
      alert("You required to fill in all the spaces!")
            return false;
       }
       else if(emailAdress === "" ){
        alert("You required to fill in all the spaces!")
            return false;
       }
       else if(firstName === "" ){
        alert("You required to fill in all the spaces!")
            return false;
       }
}