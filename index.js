
// nav bar active

let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(el => {
	el.addEventListener('click', function(){
		ul.querySelector('.active').classList.remove('active');
		el.classList.add('active');
	});
});


// scroll up and down system

const head = document.querySelector('header');
let preScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
	let currentScroll = window.pageYOffset;
	
	if (preScroll < currentScroll) {
		head.classList.add('hide');
	}
	
	else {
		head.classList.remove('hide');
	}
	
	preScroll = currentScroll;
});

// multi progress bar

const  previousBtn  =  document.getElementById('previousBtn');
const  nextBtn  =  document.getElementById('nextBtn');
const  finishBtn  =  document.getElementById('finishBtn');
const  content  =  document.getElementById('content');
const  bullets  =  [...document.querySelectorAll('.bullet')];

const MAX_STEPS = 3;
let currentStep = 1;

nextBtn.addEventListener('click',  ()  =>  {
	bullets[currentStep  -  1].classList.add('completed');
	currentStep  +=  1;
	previousBtn.disabled  =  false;
	if  (currentStep  ===  MAX_STEPS)  {
		nextBtn.disabled  =  true;
		finishBtn.disabled  =  false;
	}
	content.innerText  =  `Question number ${currentStep}`;
});


previousBtn.addEventListener('click',  ()  =>  {
	bullets[currentStep  -  2].classList.remove('completed');
	currentStep  -=  1;
	nextBtn.disabled  =  false;
	finishBtn.disabled  =  true;
	if  (currentStep  ===  1)  {
		previousBtn.disabled  =  true;
	}
	content.innerText  =  `Question number ${currentStep}`;
});

finishBtn.addEventListener('click',  ()  =>  {
	location.reload();
});


// hambergur manue using 

const manuclick = document.querySelector('.manuIcon');

manuclick.addEventListener('click', function () {
	
	
	const nev = document.querySelector('.nav-area');
	nev.classList.toggle('show-nav-area');
	this.querySelector('i').classList.toggle('fa-times');
	
})