// JavaScript Document
  function checkForm()
  {
	var txt_name,txt_mess,txt_email,txt_cell;
	txt_name = document.f1.name.value;
	txt_mess = document.f1.message.value;
	txt_email = document.f1.email.value;
	txt_cell = document.f1.number.value;
  	
	
	var re_nm = new RegExp ("^[a-z A-Z]{3,10}$");
	var re_mes = new RegExp ("^[a-z A-Z]* $");
	var re_em = new RegExp ("^[a-z|0-9_]+([-.]|[_][a-z|0-9]+)*@[a-z|0-9]+([-][a-z|0-9]+)*(([.][a-z]{2,3})|([.][a-z]{2}){2})$");
	var re_cel = new RegExp ("^[0-9]+[-]+[0-9]{3,10}$");
	
	if(txt_name ==""){
		alert("Please Enter Your Name");
		return false;
	}
	if(!re_nm.test(txt_name))
	{
		alert("Please Enter Proper Name");
		return false;
	}
	

	
	if(txt_cell ==""){
		alert("Please Enter Your Phone Number");
		return false;
	}
	if(!re_cel.test(txt_cell))
	{
		alert("Please Enter Proper Phone Number");
		return false;
	}
	
	if(txt_email ==""){
		alert("Please Enter Your Email");
		return false;
	}
	
	if(!re_em.test(txt_email))
	{
		alert("For example:ibrahimsurti_52@hotmail.com");
		return false;
	}
	
   if(txt_mess ==""){
		alert("Please Enter Your Mesage");
		return false;
	}
	
    //if all is OK submit the form

	alert("Thank You For Feed Back");
	document.f1.name.value="";
	document.f1.message.value="";
	document.f1.email.value="";
	document.f1.number.value="";
  
  }