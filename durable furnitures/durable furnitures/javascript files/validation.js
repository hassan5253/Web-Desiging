// JavaScript Document
  function checkForm()
  {
	var txt_name,txt_message,txt_email,txt_cell;
	txt_name = document.f1.name.value;
	txt_message = document.f1.message.value;
	txt_email = document.f1.email.value;
	txt_cell = document.f1.number.value;
  	
	
	var re_name = new RegExp ("^[a-z A-Z]{3,10}$");
	var re_message = new RegExp ("^[a-z A-Z]* $");
	var re_email = new RegExp ("^[a-z|0-9_]+([-.]|[_][a-z|0-9]+)*@[a-z|0-9]+([-][a-z|0-9]+)*(([.][a-z]{2,3})|([.][a-z]{2}){2})$");
	var re_cell = new RegExp ("^[0-9]+[-]+[0-9]{4,11}$");
	
	if(txt_name ==""){
		alert("Please Enter Your Name");
		return false;
	}
	if(!re_name.test(txt_name))
	{
		alert("Please Enter Proper Name");
		return false;
	}
	

	
	if(txt_cell ==""){
		alert("Please Enter Your Phone Number");
		return false;
	}
	if(!re_cell.test(txt_cell))
	{
		alert("For Example:0345-7686786");
		return false;
	}
	
	if(txt_email ==""){
		alert("Please Enter Your Email");
		return false;
	}
	
	if(!re_email.test(txt_email))
	{
		alert("For Example:hr@durablefurniture.com");
		return false;
	}
	
   if(txt_message ==""){
		alert("Please Enter Your Mesage");
		return false;
	}
	
    //if all is OK submit the form

	alert("Thank You For Submitting");
	document.f1.name.value="";
	document.f1.message.value="";
	document.f1.email.value="";
	document.f1.number.value="";
  
  }