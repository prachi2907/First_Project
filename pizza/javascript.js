
 function mylogin(){

 var mail = document.getElementById("Idemailid").value
//  console.log(mail);
 var password = document.getElementById("Idpass").value;
if(( mail=="") || (password ==""))
{

 alert("Enter a UserName and Password");
}
 else{
    
 alert("login succefully!");
  localStorage.setItem("myValue", mail);
location.href="./login.html";
document.getElementById("Idemailid").value="";
 document.getElementById("Idpass").value=""
        
 }
}
function mysignup(){
 location.href="./signup.html";
}


function change(){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var mail2 = document.getElementById("Idemailid").value
       
        if(mail2.match(mailformat)){
                mail2.focus();
                return true;
        }
        else{
                alert("Email Id should be in this format : 'prachi@example.com'" )
                mail2.focus();
                 return false;
        }
}