var player1=[];
var player2=[];

var wins ={
	'123': true,
	'456': true,
	'789': true
}

var boxes = document.querySelectorAll('.ttt-box');


boxes.forEach((box)=>{
	box.addEventListener('click',handleBoxClick);
})

console.log(boxes);
function handleBoxClick(){
	if(this.dataset.clicked = 'false'){
		console.log(this.dataset.pos);
	}
}

function checkWin(player){

}
function game(p1,p2){
	var turnPlayer = p1;
	while(true){

		return;
	}
}