let player1 ={name:"",turn:true};
let player2 ={name:"",turn:false};
let hand1={elem:"", player:player1, otherPlayer:player2, fingers:1, choose:false};
let hand2={elem:"", player:player1, otherPlayer:player2, fingers:1, choose:false};
let hand3={elem:"", player:player2, otherPlayer:player1, fingers:1, choose:false};
let hand4={elem:"", player:player2, otherPlayer:player1, fingers:1, choose:false};
let handsMap=[hand1,hand2,hand3,hand4];
let handWasChose=false;
let fingersUp=0;
let lastHand;
let computer=false;


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
	if(player1.name==""||player2.name==""){
		alert("חובה להכניס שמות שני השחקנים")
	}
	else{
	hide(announcement);
	}
})

btnInst.addEventListener("click", function(event){
	hide(annText);
	show(instructions);
})

btnBack.addEventListener("click", function(event){
	hide(instructions);
	show(annText);
})
	

comPlayer.addEventListener("click", function(event){
	player1.name=document.getElementById("player1").value;
	player2.name="המחשב";
	computer=true;
	if(player1.name==""||player2.name==""){
		alert("חובה להכניס שם שחקן")
	}
	else{
	hide(announcement);
	}
})
	
hand1.elem=document.getElementById("1");
hand2.elem=document.getElementById("2");
hand3.elem=document.getElementById("3");
hand4.elem=document.getElementById("4");

makeClick();
function makeClick(){
	hand1.elem.onclick=function(e){clicked(hand1)};
	hand2.elem.onclick=function(e){clicked(hand2)};
	hand3.elem.onclick=function(e){clicked(hand3)};
	hand4.elem.onclick=function(e){clicked(hand4)};
}

function stopClick(){
	hand1.elem.onclick=null;
	hand2.elem.onclick=null;
	hand3.elem.onclick=null;
	hand4.elem.onclick=null;
}

function playRandom(){
	stopClick();
	if(hand3.choose||hand4.choose){
	setTimeout(function(event){clicked(handsMap[Math.floor(Math.random()*4)])},1000);
	}
	else{
	setTimeout(function(event){clicked(handsMap[Math.floor(Math.random()*2+2)])},1000);
	}
}


function clicked(hand){
	if (hand.player.turn&&hand.choose==false&&handWasChose==false&&hand.fingers!=0)
	{
		
		hand.choose=true;
		handWasChose=true;
		fingersUp=hand.fingers;
		hand.elem.style.filter="blur(5px)";
		lastHand=hand;
		if (computer&&player2.turn==true){
				playRandom();
			}
	}
	
	else if (hand.player.turn&&hand.choose==false&&handWasChose&&hand.fingers==0)
	{
		if(lastHand.fingers%2==0){
			lastHand.fingers=hand.fingers=lastHand.fingers/2;
			hand.elem.src=hand.elem.src.slice(0,-5)+hand.fingers+".jpg";
			lastHand.elem.src=lastHand.elem.src.slice(0,-5)+lastHand.fingers+".jpg";
			lastHand.elem.style.filter="blur(0px)";
			hand.player.turn=false;
			hand.otherPlayer.turn=true;
			if (computer&&player2.turn==true){
				playRandom();
			}
			if(computer&&player1.turn==true){
				makeClick();
			}
		}
		else{
			if (computer&&player2.turn==true){
				playRandom();
			}
			if(computer&&player1.turn==true){
				makeClick();
			}
		}
			
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
		if (computer&&player2.turn==true){
			playRandom();
		}
		if(computer&&player1.turn==true){
				makeClick();
			}		
	}
	else if(true){		
			if (computer&&player2.turn==true){
				playRandom();
		}
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


