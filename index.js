var player1={
	num: 1,
	name: 'Player One',
	moves:[]
};
var player2={
	num:2,
	name: 'Player Two',
	moves:[]
};
var turns = 0;
var turnPlayer = player1;
var wins ={
	'123': true,
	'456': true,
	'789': true,
	'174': true,
	'258': true,
	'369': true,
	'159': true,
	'357': true
}

var boxes = document.querySelectorAll('.ttt-box');
var display = document.querySelector('.display');


boxes.forEach((box)=>{
	box.addEventListener('click',handleBoxClick);
})

console.log(boxes);
function handleBoxClick(){
	if(this.dataset.clicked === 'false'){
		turnPlayer.moves.push(this.dataset.pos)
		if(turnPlayer.num === 1){
			this.classList.add('p1-color');
		}
		if(turnPlayer.num === 2){
			this.classList.add('p2-color');
		}
		this.dataset.clicked = 'true';
		turnPlayer = turnPlayer === player1 ? player2: player1;
		display.innerHTML = `${turnPlayer.name} , Select a piece `;
	}
}

function checkWin(player){
	var myMoves = player.moves.sort((a, b)=>{
		return a >b;
	}).join('');

	for(var key in wins){
		if(myMoves.includes(key)){
			return true;
		}
	}
	return false
}
function game(){
	while(true){
		if(checkWin(turnPlayer)){
			display.innerHTML = 'You Win';
			return;
		}
	}
}