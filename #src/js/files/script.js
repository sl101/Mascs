// подсказка при наведениии =======================================
// (отрабатывает только при перезагрузке страницы) ================
		function showTippy(){
			let element = document.querySelector('._icon-phone');
			let windowWeight = window.innerWidth;
			// console.log(windowWeight);
			if ( windowWeight <= 1152){
				// console.log("add _call-back");
				element.classList.add('_call-back');
			}else{
				// console.log("remove _call-back");
				element.classList.remove('_call-back');
			}
		};
		
		showTippy();
		tippy('._call-back', {
			content:"Заказать обратный звонок",
	});
// ================================================================