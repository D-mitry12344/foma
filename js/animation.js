const blockBanner = document.querySelector('header');
blockBanner.animationBln = false;


if( blockBanner.animationBln === false){
//header
	blockBanner.animationBln = true;
	gsap.fromTo('.logo-top',{
			y: -500,
			opacity:0,
		} , {
		 x:0,
		 y:0,
		 opacity:1,
		duration:1
	})

	gsap.fromTo('.top-info-main_title',{
			x: -2000,
			opacity:0,
		} , {
		 x:0,
		 y:0,
		 opacity:1,
		duration:1
	})

	gsap.fromTo('.top-info-main_description',{
			x: -2000,
			opacity:0,
		} , {
		 x:0,
		 y:0,
		 opacity:1,
		duration:1.5
	})

	gsap.fromTo('.top-info-main_btn',{
			x: 0,
			y: 0,
			opacity:0,
		} , {
		 x:0,
		 y:0,
		 opacity:1,
		duration:3
	})
//end header
}

const blockFtr = document.querySelector('footer')
blockFtr.animationBln = false;
blockFtr.style.opacity='0';

const blockCnt = document.querySelector('main');
blockCnt.style.opacity='0';
blockCnt.animationBln = false;
window.addEventListener('scroll',function(){

if(pageYOffset >= 200 && blockCnt.animationBln === false){

//text content
	blockCnt.animationBln = true;
	blockCnt.style.opacity='';
	let imgBirds = document.querySelector('.content-block_img');
	let abzTextAll = document.querySelectorAll('.content-block_text p');
	let VectorsCnt = document.querySelectorAll('.vecrots-content-main img');

	gsap.fromTo(imgBirds,{
			x: -3000,
			y: 0,
			opacity:0,
		} , {
		 x:0,
		 y:0,
		 opacity:1,
		duration:1
	})

	gsap.fromTo(abzTextAll[0],{
			x:2000,
			opacity:0,
		} , {
		 x:0,
		 opacity:1,
		duration:2
	})

	gsap.fromTo(abzTextAll[1],{
			x:2000,
			opacity:0,
		} , {
		 x:0,
		 opacity:1,
		duration:2.5
	})
	
	gsap.fromTo(abzTextAll[2],{
			x:2000,
			opacity:0,
		} , {
		 x:0,
		 opacity:1,
		duration:3
	})
//Woods
	gsap.fromTo(VectorsCnt[1],{
			x:2000,
			opacity:0,
			rotate: 45,
		} , {
		 x:0,
		 rotate:0,
		 rotationY: 180,
		 opacity:1,
		duration:2
	})
	gsap.fromTo(VectorsCnt[0],{
			x:-1000,
			opacity:0,
			rotate: 45,
		} , {
		 x:0,
		 opacity:1,
		 rotate: 0,
		duration:2
	})
}


if(pageYOffset >= 3000 && blockFtr.animationBln === false || 
	window.innerWidth < 600 && pageYOffset >= 1000 && blockFtr.animationBln === false ||
	window.innerWidth >= 600 && pageYOffset >= 2500 && blockFtr.animationBln === false ){
	 blockFtr.animationBln = true;
	 blockFtr.style.opacity = '';
//footer

	gsap.fromTo('.logo-footer',{
			x: -2000,
			y: 0,
			opacity:0,
		} , {
		 x:0,
		 y:0,
		 opacity:1,
		duration:3
	})

	gsap.fromTo('.footer__menu-middle',{
			x: 0,
			y: 1000,
			opacity:0,
		} , {
		 x:0,
		 y:0,
		 opacity:1,
		duration:3
	})

	gsap.fromTo('.footer__contacts',{
			x: 0,
			y: 1000,
			opacity:0,
		} , {
		 x:0,
		 y:0,
		 opacity:1,
		duration:3
	})

	gsap.fromTo('.footer__signature p',{
			x: 0,
			y: 1000,
			opacity:0,
		} , {
		 x:0,
		 y:0,
		 opacity:1,
		duration:3
	})

// end footer
}

})