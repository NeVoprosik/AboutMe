// menu.onclick = function burger() {
// 	let x = document.querySelector('#topnav')
// 	if (x.className === "header-menu-top") {
// 		x.className += "responsive"
// 	} else{
// 		x.className = "header-menu-top";
// 	}
// }


function changeThemeLight() {
	const switchMode = document.getElementById('switchMode-light')
	switchMode.onclick = function () {
		let theme = document.getElementById('theme')
		if (theme.getAttribute("href") == "css/style.css") {
			theme.href = "css/style.css"
		} else {
			theme.href = "css/style.css";
		}
	}
}
changeThemeLight();
function changeThemeDark() {
	const switchMode = document.getElementById('switchMode-dark')
	switchMode.onclick = function () {
		let theme = document.getElementById('theme')
		if (theme.getAttribute("href") == "css/style-dark.css") {
			theme.href = "css/style-dark.css";
		} else {
			theme.href = "css/style-dark.css"
		}
	}
}
changeThemeDark();




$(document).ready(function () {
	$("body").css("display", "none");

	$("body").fadeIn(150);

	$("a.transition").click(function (event) {
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(150, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});



function topnav() {
	const x = document.querySelector('.header-menu-top')
	const y = document.querySelector('.button')
	const z = document.getElementById('menu')

	const nav = document.querySelector('.nav-personality')
	const aboutMe = document.querySelector('.aboutMe')
	const Skills = document.querySelector('.Skills')
	const Portfolio = document.querySelector('.Portfolio')
	const footer = document.querySelector('.footer')

	y.addEventListener('click', function () {
		x.classList.toggle('header-menu-top-responsive')
		z.classList.toggle('menu-close')
		nav.classList.toggle('none')
		aboutMe.classList.toggle('none')
		Skills.classList.toggle('none')
		Portfolio.classList.toggle('none')
		footer.classList.toggle('none')
	})


}
topnav();
AOS.init({
	  // Global settings:
	  disable: false,
	  startEvent: 'DOMContentLoaded',
	  initClassName: 'aos-init', 
	  animatedClassName: 'aos-animate',
	  useClassNames: false, 
	  disableMutationObserver: true, 
	
	  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	  offset: 170, 
	  easing: 'ease', 
	  once: true, 
	  mirror: false, 
	  anchorPlacement: 'top-top',
});





