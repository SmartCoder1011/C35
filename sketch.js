var canvas, database, Form, Game, Player, playerCount;
var gameState=0;

function setup(){
  canvas=createCanvas(400,400);
  database = firebase.database();
Game=new game()
Game.getState()
Game.start()
}

function draw(){

}

