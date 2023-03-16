// JavaScript Document



function call()
{
	d=document.form1.menu1.selectedIndex;
	
	if(d==document.form1.menu2.selectedIndex && d!=0)
	{
		i=document.getElementById("img1");
		i.style.visibility="hidden";
		i.src="";
		e=document.form1;
		e.txt1.value="";
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
		e.txt6.value="";
		e.ta1.innerHTML="";
	}
	else if(d==1)
	{   
	     
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="DOMAYNE/IMAGES/wardrobe/wardrobe4.jpg";
		e=document.form1;
		e.txt1.value="Domayne’s Metal Hand Cupboard";
		e.txt6.value="1000$";
		e.ta1.innerHTML="Metallic paint protects the wood from fire and water and absorbs radiation.";        
	}
	
	else if(d==2)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="DOMAYNE/IMAGES/beds/bed4.jpg";
		e=document.form1;
		e.txt1.value="Domayne’s Double Plate Bed";
		e.txt6.value="1200$";
		e.ta1.innerHTML="Termites are constantly found on areas where there are a lot of trees and medicines used are dangerous for the health of other living beings but phosphorus is environmental friendly it has only one purpose to kill termites.";
	}
	
	else if(d==3)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="DOMAYNE/IMAGES/Dining Set/dining4.jpg";
		e=document.form1;
		e.txt1.value="Domayne’s Silver detailed Dining Set";
		e.txt6.value="1270$";
		e.ta1.innerHTML="Six Chairs and One Table with on top and bending balanced legs will help to adjust according to the weight.";
	}
	else if(d==4)
	{
		
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="ETHAN ALLEN/IMAGES/wardrobe/wardrobe10.JPG";
		e=document.form1;
		e.txt1.value="Ethan Allan Extra Large Side";
		e.txt6.value="1300$";
		e.ta1.innerHTML="It has two compartments of three push out chests each and a central upward sliding door which easily handles the complex design of the cupboard.";
	}
	
	else if(d==5)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="ETHAN ALLEN/IMAGES/beds/bed6.jpg";
		e=document.form1;
		e.txt1.value="Ethan Allen Luxury Royal Bed";
		e.txt6.value="2000$";
		e.ta1.innerHTML="Dual mattress increases your comfort level and relaxes you spinal cord making you back upright so that you do not feel drowsy when you walk.";
	}
	else if(d==6)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="ETHAN ALLEN/IMAGES/sofas/sofa8.JPG";
		e=document.form1;
		e.txt1.value="Ethan Allen Pink Panther's Virtue";
		e.txt6.value="2935$";
		e.ta1.innerHTML="Four cushion in which two pink one yellow and other white is include which are reattach able by formed thread.";
	}
	else if(d==7)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="LEXINGTON/IMAGES/beds/bed15.JPG";
		e=document.form1;
		e.txt1.value="Lexington Round Curved Neon Bed";
		e.txt6.value="4500$";
		e.ta1.innerHTML="The Fiber used on the skin of the bed is made from cross polymer linkage which protects it from water getting in and dust particles are also trapped by the bed.";
	}
	else if(d==8)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="LEXINGTON/IMAGES/sofas/sofa15.jpg";
		e=document.form1;
		e.txt1.value="Lexington Engagment Of Table & Sofa";
		e.txt6.value="3555$";
		e.ta1.innerHTML="Three users can sit at once on this sofa and Grey contains feature and color of both white and black which means it will adjust to the temperature of both summer and winter.";
	}
	else if(d==9)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="LEXINGTON/IMAGES/Dining Set/dining13.jpg";
		e=document.form1;
		e.txt1.value="Lexington Rich Wood Dining Set";
		e.txt6.value="1840$";
		e.ta1.innerHTML="Six Chairs and One Table with on top and natural onyx wood will give a cool and relaxing smell will be obtained from it.";
	}
	else if(d==10)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="IKEA/IMAGES/Dining Set/dining17.jpg";
		e=document.form1;
		e.txt1.value="Ikea Six Round's Up";
		e.txt6.value="3000$";
		e.ta1.innerHTML="Six Chairs and One Table supported by round thick natural tree plate and natural onyx wood will give a cool and relaxing smell.";	
	}
	else if(d==11)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="IKEA/IMAGES/wardrobe/wardrobe16.jpg";
		e=document.form1;
		e.txt1.value="Ikea Wooden Rebirth";
		e.txt6.value="740$";
		e.ta1.innerHTML="Three Doors and three chests are include in the design with extra long legs to improve gravity of the cupboard so that it does not fall to the ground give extra protection over children.";
	}
	else if(d==12)
	{
		i=document.getElementById("img1");
		i.style.visibility="visible";
		i.src="IKEA/IMAGES/sofas/sofa17.jpg";
		e=document.form1;
		e.txt1.value="Ikea Dark Crab Sofa";
		e.txt6.value="4000$";
		e.ta1.innerHTML="Comfortable for two people sleek and presentable design enables the sofa to hold weight of four to six people. Completely build for high pressure.";
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
		e.txt7.value="";
		e.ta2.innerHTML="";
	}
	else if(d==1)
	{   
	     
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="DOMAYNE/IMAGES/wardrobe/wardrobe4.jpg";
		e=document.form1;
		e.txt3.value="Metal Hand Cupboard";
		e.txt7.value="1000$";
		e.ta2.innerHTML="Metallic paint protects the wood from fire and water and absorbs radiation";
	}
	
	else if(d==2)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="DOMAYNE/IMAGES/beds/bed4.jpg";
		e=document.form1;
		e.txt3.value="Domayne's Doble Plate Bed";
		e.txt7.value="1200$";
		e.ta2.innerHTML="Termites are constantly found on areas where there are a lot of trees and medicines used are dangerous for the health of other living beings but phosphorus is environmental friendly it has only one purpose to kill termites.";
	}
	else if(d==3)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="DOMAYNE/IMAGES/Dining Set/dining4.jpg";
		e=document.form1;
		e.txt3.value="Domayne'Silver Detailed Dining Set";
		e.txt7.value="1270$";
		e.ta2.innerHTML="Six Chairs and One Table with on top and bending balanced legs will help to adjust according to the weight.";
	}
	else if(d==4)
	{
		
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="ETHAN ALLEN/IMAGES/wardrobe/wardrobe10.JPG";
		e=document.form1;
		e.txt3.value="Ethan Allen Extra Large Side";
		e.txt7.value="1300$";
		e.ta2.innerHTML="It has two compartments of three push out chests each and a central upward sliding door which easily handles the complex design of the cupboard.";
	}
	
	else if(d==5)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="ETHAN ALLEN/IMAGES/beds/bed6.jpg";
		e=document.form1;
		e.txt3.value="Ethan Allen Luxury Royal Bed";
		e.txt7.value="2000$";
		e.ta2.innerHTML="Dual mattress increases your comfort level and relaxes you spinal cord making you back upright so that you do not feel drowsy when you walk.";
	}
	else if(d==6)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="ETHAN ALLEN/IMAGES/sofas/sofa8.JPG";
		e=document.form1;
		e.txt3.value="Ethan Allen Pink Panther's Virtue";
		e.txt7.value="2935$";
		e.ta2.innerHTML="Four cushion in which two pink one yellow and other white is include which are reattach able by formed thread.";
	}
	else if(d==7)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="LEXINGTON/IMAGES/beds/bed15.JPG";
		e=document.form1;
		e.txt3.value="Lexington Round Neon Curved Bed";
		e.txt7.value="4500$";
		e.ta2.innerHTML="The Fiber used on the skin of the bed is made from cross polymer linkage which protects it from water getting in and dust particles are also trapped by the bed.";
	}
	else if(d==8)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="LEXINGTON/IMAGES/sofas/sofa15.jpg";
		e=document.form1;
		e.txt3.value="Lexington Engagment Of Table & Sofa";
		e.txt7.value="3555$";
		e.ta2.innerHTML="Three users can sit at once on this sofa and Grey contains feature and color of both white and black which means it will adjust to the temperature of both summer and winter.";
	}
	else if(d==9)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="LEXINGTON/IMAGES/Dining Set/dining13.jpg";
		e=document.form1;
		e.txt3.value="Lexington Rich Wood Dining Set";
		e.txt7.value="1840$";
		e.ta2.innerHTML="Six Chairs and One Table with on top and natural onyx wood will give a cool and relaxing smell will be obtained from it.";
	}
	else if(d==10)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="IKEA/IMAGES/Dining Set/dining17.jpg";
		e=document.form1;
		e.txt3.value="Ikea Six's Round Up's";
		e.txt7.value="3000$";
		e.ta2.innerHTML="Six Chairs and One Table supported by round thick natural tree plate and natural onyx wood will give a cool and relaxing smell.";	
	}
	else if(d==11)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="IKEA/IMAGES/wardrobe/wardrobe16.jpg";
		e=document.form1;
		e.txt3.value="Ikea Wooden Rebirth";
		e.txt7.value="740$";
		e.ta2.innerHTML="Three Doors and three chests are include in the design with extra long legs to improve gravity of the cupboard so that it does not fall to the ground give extra protection over children.";
	}
	else if(d==12)
	{
		i=document.getElementById("img2");
		i.style.visibility="visible";
		i.src="IKEA/IMAGES/sofas/sofa17.jpg";
		e=document.form1;
		e.txt3.value="Ikea's Dark Crab Sofa";
		e.txt7.value="4000$";
		e.ta2.innerHTML="Comfortable for two people sleek and presentable design enables the sofa to hold weight of four to six people. Completely build for high pressure.";
	}
	
	}
}


