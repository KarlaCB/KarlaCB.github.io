let count = 0;
let answer, result, opp, correct =0, wrong = 0, percent = 0;
let num1, num2, level = 1, QNum = 0, number, type, grade;
let questionsArray = [];

function level1Rand(){
	let rand = Math.floor(Math.random()*9) + 1;
	return rand;
}

function level2Rand(){
	rand1 = Math.floor(Math.random()*99) + 10;
	rand2 = Math.floor(Math.random()*9) + 1;
	return [rand1, rand2];
}

function level3Rand(){
	let rand = Math.floor(Math.random()*99) + 10;
	return rand;
}

function level4Rand(){
	rand1 = Math.floor(Math.random()*999) + 100;
	rand2 = Math.floor(Math.random()*99) + 10;
	return [rand1, rand2];
}

function level5Rand(){
	let rand = Math.floor(Math.random()*999) + 100;
	return rand;																																																																																																																																																																																																																																																																																																																
}


function Correct(){ //TRACKS CORRECT QUESTIONS
	document.getElementById('status').style.display = '';
	document.getElementById('status').innerHTML = 'CORRECT!';
	document.getElementById('status').style.color = "green";
	document.getElementById('next').style.display = 'block';
	correct++;

}

function Percentage(number){//CALCULATES PERCENTAGE
	percent = parseInt((number/15) * 100);
	return percent;
}

function Incorrect(){ //TRACKS WRONG QUESTIONS
	document.getElementById('status').style.display = '';
	document.getElementById('status').innerHTML = 'INCORRECT!';
	document.getElementById('status').style.color = "red";
	document.getElementById('next').style.display = 'block';
	wrong++;
}



function AnswerValidate(){ //VALIDATES ANSWER GIVEN BY USER
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
	if(count == 15){
		percent = parseInt(Percentage(correct));
		alert('Percentage: ' + percent );
		level = levelUp(percent);
		count = 0;
		correct = 0;
		wrong = 0;
		percent = 0;
	}
	if(level == 5){
		alert('GAME OVER!!');
	}
	document.getElementById('Answer').value = '' ;
	document.getElementById('status').style.display= 'none';
	document.getElementById('button').disabled = false;
	document.getElementById('next').style.display = 'none';
	generateQA(opp);
	return percent;
}

function levelUp(grade){ // MOVES UP A LEVEL OR STAYS IN SAME LEVEL
	grade = percent;
	if(grade >= 80){
		alert('Number of Correct Questions: ' + correct + '\n' + 'Number of Incorrect Question: ' + wrong +'\n'+ 'Percentage On Level: ' +  percent);
		level++;
		alert('Welcome to Level: '+ level);
		document.getElementById('level').innerHTML = "Level:" + level;
	}
	else{
		alert('Number of Correct Questions: ' + correct + '\n' + 'Number of Incorrect Question: ' + wrong +'\n'+ 'Percentage On Level: ' +  percent);
		alert('You Have Failed the level cannot move on');
		document.getElementById('level').innerHTML = "Level:" + level;
	}

	return level;
}

function operator(type){ // RESETS COUNT TO 0 AND LEVEL TO 1 WHEN OPERATOR CHANGES
	count = 0;
	level = 1;
	generateQA(type);
	opp = type;
}
																																																																																																																																																																																																																																																																																																															

function generateQA(type){ // FUNCTION CALLED TO DISPLAY RANDOM NUMBERS DEPENDING ON OPERAZTION ZND LEVEL
	document.getElementById('equal').innerHTML = "=";
	document.getElementById('level').innerHTML = "Level:" + level;
	document.getElementById('points').innerHTML = Number(count + 1) + '/15';
	document.getElementById('result').style.display='none';
	document.getElementById('next').style.display = 'none';
	switch(type){ // CHOOSES A CASE DEPENDENT ON THE OPERATOR CHOSEN
		case 'minus':
			document.getElementById('op').innerHTML = "-";
			switch(level){ //GETS LEVEL AND CHANGES LEVEL WITHIN GIVEN OPERATOR
				case 1: 
					num1 = level1Rand();
					num2 = level1Rand();
					while((num1 = level1Rand())<(num2 = level1Rand())){
						num1 = level1Rand();
					}
					break;
				case 2:
					num1 = level2Rand()[0];
					num2 = level2Rand()[1];
					break;
				case 3:
					num1 = level3Rand();
					num2 = level3Rand();
					while((num1 = level3Rand())<(num2 = level3Rand())){
						num1 = level3Rand();
					}
					break;
				case 4:
					num1 = level4Rand()[0];
					num2 = level4Rand()[1];
					break;
				case 5:
					num1 = level5Rand();
					num2 = level5Rand();
					while((num1 = level1Rand())<(num2 = level1Rand())){
						num1 = level1Rand();
					}
					break;
			}
			result = num1 - num2;
			break;
		case 'plus':
			document.getElementById('op').innerHTML = "+";
			
			switch(level){
				case 1: 
					num1 = level1Rand();
					num2 = level1Rand();
					break;
				case 2:
					num1 = level2Rand()[0];
					num2 = level2Rand()[1];
					break;
				case 3:
					num1 = level3Rand();
					num2 = level3Rand();
					break;
				case 4:
					num1 = level4Rand()[0];
					num2 = level4Rand()[1];
					break;
				case 5:
					num1 = level5Rand();
					num2 = level5Rand();
					break;
			}
			result = num1+num2;
			break;
		case 'divide':
			document.getElementById('op').innerHTML = "/";
			switch(level){
				case 1: 
					num1 = level1Rand();
					num2 = level1Rand();
					while((num1 = level1Rand())%(num2 = level1Rand())){
						num2 = level1Rand();
					}
					break;
				case 2:
					num1 = level2Rand()[0];
					num2 = level2Rand()[1];
					while((num1 = level2Rand()[0])%(num2 = level2Rand()[1])){
						num2 = level2Rand()[1];
					}
					break;
				case 3:
					num1 = level3Rand();
					num2 = level3Rand();
					while((num1 = level3Rand())%(num2 = level3Rand())){
						num2 = level3Rand();
					}
					break;
				case 4:
					num1 = level4Rand()[0];
					num2 = level4Rand()[1];
					while((num1 = level4Rand()[0])%(num2 = level4Rand()[1])){
						num2 = level4Rand()[1];
					}
					break;
				case 5:
					num1 = level5Rand();
					num2 = level5Rand();
					while((num1 = level5Rand())%(num2 = level5Rand())){
						num2 = level5Rand();
					}
					break;
			}
			result = num1/num2;
			break;
		case 'multiply':
			document.getElementById('op').innerHTML = "x";
			switch(level){
				case 1: 
					num1 = level1Rand();
					num2 = level1Rand();
					break;
				case 2:
					num1 = level2Rand()[0];
					num2 = level2Rand()[1];
					break;
				case 3:
					num1 = level3Rand();
					num2 = level3Rand();
					break;
				case 4:
					num1 = level4Rand()[0];
					num2 = level4Rand()[1];
					break;
				case 5:
					num1 = level5Rand();
					num2 = level5Rand();
					break;
			}
			result = num1*num2;
			break;	
	}
	//questionsArray.push(document.getElementById('num1').value + document.getElementById('op').value + document.getElementById('num2').value );
	//console.log(questionsArray);
	document.getElementById('num1').innerHTML = num1;
	document.getElementById('num2').innerHTML = num2;
	document.getElementById('result').innerHTML = result;
}

function emptyCheck(){
	let firstname = document.getElementById('fname');
	let lastname = document.getElementById('lname');
	let middlename = document.getElementById('mname');

	if((firstname.value != '') ||( lastname.value != '') || (middlename.value != '')){
		alert('Welcome to Math Wiz');
		window.open("math.html");
		
	}else{
		alert('Please Fill Out empty Field')
	}
		
}