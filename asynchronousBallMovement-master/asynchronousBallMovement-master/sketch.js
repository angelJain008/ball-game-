var Hball,database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    Hball = createSprite(250,250,10,10);
    Hball.shapeColor = "red";
    var Hballpos = database.ref('ball/position')
    Hballpos.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
    
}
}


function writePosition(x,y){
    database.ref('ball/position').set({
    'x':position.x+x,
    'y':position.y+y
    })
    
}
function readPosition(data){
    position = data.val()
    Hball.x=position.x
    Hball.y=position.y
    
    }
function showError(){
console.log("Errorinwriting")

}