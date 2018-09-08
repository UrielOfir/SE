let player1 ={name:"",turn:true};
let player2 ={name:"",turn:false};
let hand1={elem:"", player:player1, otherPlayer:player2, fingers:1, choose:false};
let hand2={elem:"", player:player1, otherPlayer:player2, fingers:1, choose:false};
let hand3={elem:"", player:player2, otherPlayer:player1, fingers:1, choose:false};
let hand4={elem:"", player:player2, otherPlayer:player1, fingers:1, choose:false};
let handWasChose=false;
let fingersUp=0;
let lastHand;

announcement=document.getElementById("announcement");
annText=document.getElementById("annText")
instructions=document.getElementById("instructions");
btnOK=document.getElementById("btnOK");
btnInst=document.getElementById("btnInst");
btnBack=document.getElementById("btnBack");

function hide(elem){
	elem.style.display="none";
}

function show(elem){
	elem.style.display="table";
}

btnOK.addEventListener("click", function(event){
	player1.name=document.getElementById("player1").value;
	player2.name=document.getElementById("player2").value;
	hide(announcement);
})

btnInst.addEventListener("click", function(event){
	hide(annText);
	show(instructions);
})

btnBack.addEventListener("click", function(event){
	hide(instructions);
	show(annText);
})
	

hand1.elem=document.getElementById("1");
hand2.elem=document.getElementById("2");
hand3.elem=document.getElementById("3");
hand4.elem=document.getElementById("4");


hand1.elem.addEventListener("click", function(event){clicked(hand1)});
hand2.elem.addEventListener("click", function(event){clicked(hand2)});
hand3.elem.addEventListener("click", function(event){clicked(hand3)});
hand4.elem.addEventListener("click", function(event){clicked(hand4)});

handMap=[hand1,hand2,hand3,hand4]

playRandom(){
	clicked(handsMap[math.floor(math.random()*4)];
}


function clicked(hand){
	if (hand.player.turn&&hand.choose==false&&handWasChose==false&&hand.fingers!=0)
	{
		
		hand.choose=true;
		handWasChose=true;
		fingersUp=hand.fingers;
		hand.elem.style.filter="blur(5px)";
		lastHand=hand;
	}
	
	else if (hand.player.turn&&hand.choose==false&&handWasChose&&hand.fingers==0)
	{
		if(lastHand.fingers%2==0)
			lastHand.fingers=hand.fingers=lastHand.fingers/2;
			hand.elem.src=hand.elem.src.slice(0,-5)+hand.fingers+".jpg";
			lastHand.elem.src=lastHand.elem.src.slice(0,-5)+lastHand.fingers+".jpg";
			lastHand.elem.style.filter="blur(0px)";
	}

	else if(hand.player.turn==false&&handWasChose)
	{
		handWasChose=false;
		hand.player.turn=true;
		hand.otherPlayer.turn=false;
		hand.fingers+=fingersUp;
		if(hand.fingers>4)
		{
			hand.fingers-=5;
		}
		
		hand.elem.src=hand.elem.src.slice(0,-5)+hand.fingers+".jpg";
		lastHand.elem.style.filter="blur(0px)";
		lastHand.choose=false;
		chek();
		if (player2.turn==true)
			playRandom();
		
	}

}

function chek(){
	if(hand1.fingers==0&&hand2.fingers==0)
	{
		winner(player2);
	}
	
	if(hand3.fingers==0&&hand4.fingers==0)
	{
		winner(player1);
	}
	function winner(player)
	{
		show(announcement);
		annText.innerHTML="המנצח הוא "+ player.name +" !";
	}
}


