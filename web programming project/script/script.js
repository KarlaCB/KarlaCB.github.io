let count = 0;
let answer, result, opp, correct =0, wrong = 0, percent = 0;
let num1, num2, QNum = 0, number, level = 1;

function randomNumber(){
	let rand = Math.floor(Math.random()*10) + 1;
	return rand;
}

function level2Rand(){
	let rand = Math.floor(Math.random()*90) + 1;
	return rand;
}

function level3Rand(){
	let rand = Math.floor(Math.random()*90) + 10;
	return rand;
}

function level4Rand(){
	let rand = Math.floor(Math.random()*900) + 10;
	return rand;
}

function level5Rand(){
	let rand = Math.floor(Math.random()*900) + 100;
	return rand;																																																																																																																																																																																																																																																																																																																
}

function Correct(){
	document.getElementById('status').innerHTML= 'CORRECT!';
	document.getElementById('status').style.color = "green";
	document.getElementById('next').style.display = 'block';
	correct++;

}

function Percentage(number){
	percent = parseInt((number/15) * 100);
	if(percent > 80){
		level++;
		document.getElementById('message').innerHTML = 'Level' + level;
	}
	return percent;
}

function Incorrect(){
	document.getElementById('status').innerHTML= 'INCORRECT!';
	document.getElementById('status').style.color = "red";
	document.getElementById('next').style.display = 'block';
	wrong++;
}



function AnswerValidate(){
	let answer = Number(document.getElementById('result').innerHTML);

	let input = Number(document.getElementById('Answer').value);

	if(answer == input){
		Correct();
	}else{
		Incorrect();
	}
	document.getElementById('button').disabled = true;
}



function reset(){
	count++;
	document.getElementById('Answer').value = '' ;
	document.getElementById('status').style.display= 'none';
	document.getElementById('button').disabled = false;
	document.getElementById('next').style.display = 'none';
	generateQA(opp);
	if(count == 5){
		percent = parseInt(Percentage(correct));
		alert('Percentage: ' + percent );
	}
}

function operator(type){
	count = 0;
	level = 1;
	generateQA(type);
	opp = type;
}
																																																																																																																																																																																																																																																																																																															

function generateQA(type){
	document.getElementById('equal').innerHTML = "=";
	document.getElementById('result').style.display='none';
	document.getElementById('next').style.display = 'none';

	num1 = randomNumber();
	num2 = randomNumber();
	switch(type){
		case 'minus':
			document.getElementById('op').innerHTML = "-";
			document.getElementById('points').innerHTML = Number(count + 1) + '/15';
			while((num1 = randomNumber())<(num2 = randomNumber())){
				num1 = randomNumber();
			}
			result = num1-num2;
			break;
		case 'plus':
			document.getElementById('op').innerHTML = "+";
			document.getElementById('points').innerHTML = Number(count + 1) + '/15';
			result = num1+num2;
			break;
		case 'divide':
			document.getElementById('op').innerHTML = "/";
			document.getElementById('points').innerHTML = Number(count + 1) + '/15';
			while((num1 = randomNumber())%(num2 = randomNumber())!=0){
				num2 = randomNumber();
			}
			result = num1/num2;
			break;
		case 'multiply':
			document.getElementById('op').innerHTML = "x";
			document.getElementById('points').innerHTML = Number(count + 1) + '/15';
			result = num1*num2;
			break;	
	}
	document.getElementById('num1').innerHTML = num1;
	document.getElementById('num2').innerHTML = num2;
	document.getElementById('result').innerHTML = result;
}



function CalcAge() {
	let date = new Date(document.getElementById('date').value);
	let year1 = Number(date.getFullYear());
	let today = new Date();
	let year2 = Number(today.getFullYear());
	//let timeDiff = Math.abs(today.getTime() - date.getTime());
	//let age1 = Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365;
	let age1 = 0;
	age1 = year2 - year1;
	return age1;
	
}
//Compares calculated age with minimum age and acts according to rules//
function SetAge() {

	let age = CalcAge();
	//alert("my age is " + age);
	if (age > 9 || age < 12 ) {
		alert("You are not allowed to use this site");
	} else

		alert("Welcome to my Site" + age);
	window.open("index.html");

}