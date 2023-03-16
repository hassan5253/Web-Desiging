// JavaScript Document



function call1()
{
	d=document.form1.menu1.selectedIndex;
	
	if(d==document.form1.menu2.selectedIndex && d!=0)
	{
		i=document.getElementById("img1");
		i.style.visibility="hidden";
		i.src="";
		e=document.form1;
		e.txt1.value="";
		e.txt2.value="";
		e.txt6.value="";
		e.ta1.innerHTML="";
		alert("Hey! You can't compare the same products!! \nYou must select another product to compare.!");
		document.form1.menu1.options[0].selected=true;
	}
	
	else
	{
	
	if(d==0)
	{
		i=document.getElementById("img1");
		i.style.visibility="hidden";
		i.src="";
		e=document.form1;
		e.txt1.value="";
		e.txt2.value="";
		e.txt6.value="";
		e.ta1.innerHTML="";
	}
	else if(d==1)
	{   
	     
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="offroad.jpg";
		e=document.form1;
		e.txt1.value="Mazda AZ Offroad";
		e.txt2.value="5,15,986";
		e.txt6.value="Mazda";
		e.ta1.innerHTML="Body Type: Light RV'' Transmission: 4 Speed Automatic'' Engine Model: K64";        
	}
	
	else if(d==2)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="ford laser.jpg";
		e=document.form1;
		e.txt1.value="Mazda Ford Laser";
		e.txt2.value="6,55,000";
		e.txt6.value="Mazda";
		e.ta1.innerHTML="Body Type: Wagon'' Transmission: Slope control functional attaching electronic control 4 speed automatic'' Engine Model: FP";
	}
	else if(d==3)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="mpv.jpg";
		e=document.form1;
		e.txt1.value="Mazda Ford Laser";
		e.txt2.value="6,30,000";
		e.txt6.value="Mazda";
		e.ta1.innerHTML="Body Type: MV&1Box'' Transmission:Electronic control 4 speed automatic (EC-AT)'' Engine Model: L3";
	}
	else if(d==4)
	{
		
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="roadster.jpg";
		e=document.form1;
		e.txt1.value="Mazda Roadster";
		e.txt2.value="8,75,450";
		e.txt6.value="Mazda";
		e.ta1.innerHTML="Body Type: Open'' Transmission: 4 speed automatic'' Engine Model: BP-VE [ RS ]";
	}
	
	else if(d==5)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="rx7.jpg";
		e=document.form1;
		e.txt1.value="Mazda RX7";
		e.txt2.value="12,89,000";
		e.txt6.value="Mazda";
		e.ta1.innerHTML="Body Type: Coupe'' Transmission: 5 speed manual'' Engine Model: 13B-REW";
	}
	else if(d==6)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="scrum.jpg";
		e=document.form1;
		e.txt1.value="Mazda Scrum";
		e.txt2.value="16,68,890";
		e.txt6.value="Mazda";
		e.ta1.innerHTML="Body Type: Light RV'' Transmission: 5 speed manual'' Engine Model: K6A";
	}
	else if(d==7)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="atenza.jpg";
		e=document.form1;
		e.txt1.value="Mazda Atenza";
		e.txt2.value="19,43,675";
		e.txt6.value="Mazda";
		e.ta1.innerHTML="Body Type: Sedan'' Transmission: Electronic control 4 speed automatic (active matic)'' Engine Model:L3-VE";
	}
	
	}
}



function call2()
{
	d=document.form1.menu2.selectedIndex;
	
	if(d==document.form1.menu1.selectedIndex && d!=0)
	{
		i=document.getElementById("img2");
		i.style.visibility="hidden";
		i.src="";
		e=document.form1;
		e.txt3.value="";
		e.txt4.value="";
		e.txt7.value="";
		e.ta2.innerHTML="";
		alert("Hey! You can't compare the same products!! \nYou must select another product to compare.!");
		document.form1.menu2.options[0].selected=true;
	}
	
	else
	{
	if(d==0)
	{
		i=document.getElementById("img2");
		i.style.visibility="hidden";
		i.src="";
		e=document.form1;
		e.txt3.value="";
		e.txt4.value="";
		e.txt7.value="";
		e.ta2.innerHTML="";
	}
	else if(d==1)
	{   
	     
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="offroad.jpg";
		e=document.form1;
		e.txt3.value="Mazda AZ Offroad";
		e.txt4.value="20,00,000";
		e.txt7.value="Mazda";
		e.ta2.innerHTML="Body Type: SUV&Offroad'' Transmission: INVECS-II sport mode 4 speed full automatic'' Engine Model: 4G64 GDI";
	}
	
	else if(d==2)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="ford laser.jpg";
		e=document.form1;
		e.txt3.value="Mazda Ford Laser";
		e.txt4.value="19,75,567";
		e.txt7.value="Mazda";
		e.ta2.innerHTML="Body Type: Hatch'' Transmission: INVECS-III CVT (infinite variable-speed drive)'' Engine Model: 4G15 MIVEC";
		
	}
	else if(d==3)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="mpv.jpg";
		e=document.form1;
		e.txt3.value="Mazda MPV";
		e.txt4.value="21,45,789";
		e.txt7.value="Mazda";
		e.ta2.innerHTML="Boidy Type: Coupe'' Transmission: Fuzzy shift 4A/T'' Engine Model: 4G63";
	}
	else if(d==4)
	{
		
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="roadster.jpg";
		e=document.form1;
		e.txt3.value="Mazda Roadster";
		e.txt4.value="22,67,807";
		e.txt7.value="Mazda";
		e.ta2.innerHTML="Body Type: Light RV'' Transmission: Advance 4 speed fullautomatic'' Engine Model: 3G83";
	}
	
	else if(d==5)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="rx7.jpg";
		e=document.form1;
		e.txt3.value="Mazda RX7";
		e.txt4.value="25,45,754";
		e.txt7.value="Mazda";
		e.ta2.innerHTML="Body Type: Coupe'' Transmission: INVECS-II sport mode 5A/T'' Engine Model: 6A12";
	}
	else if(d==6)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="scrum.jpg";
		e=document.form1;
		e.txt3.value="Mazda Scrum";
		e.txt4.value="30,34,876";
		e.txt7.value="Mazda";
		e.ta2.innerHTML="Body Type: Sedan'' Transmission: INVECS-III CVT (infinite variable-speed drive) Engine Model: 4G15";
	}
	else if(d==7)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="atenza.jpg";
		e=document.form1;
		e.txt3.value="Mazda Atenza";
		e.txt4.value="35,56,689";
		e.txt7.value="Mazda";
		e.ta2.innerHTML="Body Type: Coupe'' Transmission: 5 speed manual sport type cross mission'' Engine Model:4G92 ";
	}
	
	}
}


