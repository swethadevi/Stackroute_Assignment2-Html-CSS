/*

Contact : swetha96devi@gmail.com
Built for : NIIT Stackroute trainee UI Web 
Date : 08/12/2018
Files : index.html, src/style.css, src/script.js, src/images/ (18 images)

*/

function myMap() {
	var mapOptions = {
		center: new google.maps.LatLng(12.978,77.722),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.HYBRID
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

document.getElementById("bannerctrl1").style.backgroundColor="#000";
document.getElementById("testimonialctrl1").style.backgroundColor="#000";

function changeSlide(direction)
{
	banner = document.getElementById("banner-wrap");
	CommonChange(banner, direction, "banner");
}

function testimonialSlide(direction)
{
	testimonial = document.getElementById("testimonial-wrap");
	CommonChange(testimonial,direction,"testimonial");
}

function CommonChange(dom, direction, name)
{
	pos = parseInt(dom.style.left);
	if(direction == 'left'){
		if(pos < 0)
			dom.style.left = pos+100+"%";
	}
	else if (direction == 'right'){
		if(pos > -300)
			dom.style.left = pos-100+"%";
	}
	else{
		dom.style.left = direction+"%";
	}
	pos = Math.abs(parseInt(dom.style.left)/100);
	
	for(i=0; i<4; i++)
	{
		color = "#FFF";
		if(i==pos)
			color = "#000";
		document.getElementById(name+"ctrl"+(i+1)).style.backgroundColor=color;
	}
}

function popup()
{
	alert("Warning! No action specified by Swetha.Devi !");
}


