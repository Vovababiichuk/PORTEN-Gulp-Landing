function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 50,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		375: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		590: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		868: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
		1920: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
});
