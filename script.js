function validate(){
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  if(username=="Aman" && password=="Aman@746"){
    alert("login successfully");
  }
  else{
    alert("login failed");
  }
}