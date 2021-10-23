//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

// ++++++++++++++++++++++++++++++++++++++++++++++++
let hits_slider = new Swiper('.hits__slider', {
	
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 200,
	autoHeight: true,
	speed: 1200,
	touchAngel: 45,
	toucRatio: 1,
	initialSlide: 2,

	// Dotts
	pagination: {
		el: '.hits__pagination',
		clickable: true,
	},
	
	// Arrows
	navigation: {
		prevEl: '.hits__prev',
		nextEl: '.hits__next',
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

let popular_slider = new Swiper('.popular__slider', {

	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	speed: 1200,
	initialSlide: 2,

	// Dotts
	pagination: {
		el: '.popular__pagination',
		clickable: true,
	},
	
	// Arrows
	navigation: {
		prevEl: '.popular__prev',
		nextEl: '.popular__next',
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	},

	breakpoints: {
		1170: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		991.98: {
			slidesPerView: 2.8,
			// spaceBetween: 20,
		},
		767.98: {
			// slidesPerView: 4,
			slidesPerView: 2.2,
			// spaceBetween: 30,
		},
		479.98: {
			slidesPerView: 1.2,
			// slidesPerView: 4,
			// spaceBetween: 20,
		},
	},
	
});
	
