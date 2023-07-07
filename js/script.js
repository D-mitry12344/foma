const btnsPeriod = document.querySelectorAll('#period-btn');
const btnsPrice = document.querySelectorAll('#price-btn');


btnsPeriod.forEach(function(item){
	item.addEventListener('click',function(){
		btnsPeriod.forEach(function(elm){
			elm.classList.remove('active');

		})
		item.classList.add('active');
	})
})

btnsPrice.forEach(function(item){
	item.addEventListener('click',function(){
		btnsPrice.forEach(function(elm){
			elm.classList.remove('active');

		})
		item.classList.add('active');
	})
})

