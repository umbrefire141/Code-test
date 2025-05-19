const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

const btns = document.querySelectorAll('.open_modal');
const modal = document.querySelector('#modal');
const box = modal.querySelector('.modal__box');

btns.forEach(btn => {
	btn.addEventListener('click', event => {
		modal.classList.add('modal--active');
		box.classList.add('modal__box--active');
		document.body.style.overflow = 'hidden';
	});
});

modal.addEventListener('click', event => {
	const element = event.target;

	if (!element.closest('.modal__box')) {
		modal.classList.remove('modal--active');
		box.classList.remove('modal__box--active');
		document.body.style.overflow = 'auto';
	}
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

if (burger) {
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('header__nav--active')) {
			menu.classList.add('header__nav--active');
			burger.classList.add('burger--active');
			document.body.style.overflow = 'hidden';
		} else {
			burger.classList.remove('burger--active');
			menu.classList.remove('header__nav--active');
			document.body.style.overflow = 'auto';
		}
	});
}
