function check(){
	var fname=document.getElementById("finame");
	var lname=document.getElementById("laname");
	var email=document.getElementById("mail");
	
	if(fname.value==''){
		alert("Please!! enter your first name.");
		fname.focus();
		return false;
	}
	if(lname.value==""){
		alert("Please!! enter your Last name.");
		lname.focus();
		return false;
	}
	if(email.value==""){
		alert("Please!! enter your Email.");
		email.focus();
		return false;
	}
	
}