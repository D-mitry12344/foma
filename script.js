function buttonLister () {
  valueOne.classList.toggle("value");
  valueTwo.classList.toggle("value");
};

let valueTwo = document.querySelector(".value-two");
let valueOne = document.querySelector(".value-one");
let btnItem = document.querySelector(".btn-item");

btnItem.onclick = buttonLister;


function price (name) {
	return function() {
		if(name === priceForth){
		name.classList.toggle("value");
		priceThree.classList.remove("value");
		priceTwo.classList.remove("value");
		priceOne.classList.remove("value");
	};
	if(name === priceThree){
		name.classList.toggle("value");
		priceForth.classList.remove("value");
		priceTwo.classList.remove("value");
		priceOne.classList.remove("value");
	};
	if(name === priceTwo){
		name.classList.add("value");
		priceForth.classList.remove("value");
		priceThree.classList.remove("value");
		priceOne.classList.remove("value");
	};
	if(name === priceOne){
		name.classList.add("value");
		priceForth.classList.remove("value");
		priceTwo.classList.remove("value");
		priceThree.classList.remove("value");
	};
	console.log(name);
};
};
let priceOne = document.querySelector(".price-one");
let priceForth = document.querySelector(".price-forth");
let priceTwo = document.querySelector(".price-two");
let priceThree = document.querySelector(".price-three");
priceForth.onclick = price(priceForth);
priceThree.onclick = price(priceThree);
priceTwo.onclick = price(priceTwo);
priceOne.onclick = price(priceOne);