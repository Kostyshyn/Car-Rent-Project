var openButton = document.querySelector('.open_button');
var hiddenMenu = document.querySelector('.menu');
var container = document.querySelector('.container');
var dimmed = document.querySelector('.dimm');
var fixedMenu = document.querySelector('.fixed_menu') || null;
var dateInputs = document.querySelector('input[type="date"]');

var dateNow = new Date();

function parseDate(date){
	var parsed;
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	parsed = year + '-0' + month + '-' + day;

	console.log(parsed);
	return parsed;
}

parseDate(dateNow);

dateInputs.value = parseDate(dateNow);


// Navbar animation 

openButton.addEventListener('click', function(){
	hiddenMenu.classList.toggle('hidden');
	dimmed.classList.toggle('dimmed');
});

if (fixedMenu){
	document.addEventListener('scroll', function(){
		var scroll = window.pageYOffset;
		if (scroll > 580 && window.innerWidth > 780){
			fixedMenu.classList.remove('hidden_top');
		} else if (scroll < 80 && window.innerWidth > 780){
			fixedMenu.classList.add('hidden_top');
		}
	});
}