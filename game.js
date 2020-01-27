var myscore=0;
const uname= document.getElementById("uname");
const scores=document.getElementById("score");
const database = firebase.database();
const uRef = database.ref('/game');


function startCount(){
    setTimeout(setData,5000);
}


function setData(){
    uRef.child(uname.value).set({
        name:uname.value,
        score:myscore
    });
    window.alert("Game Over!");
}


function startGame(){
    myscore=0;
    startCount();
}


function btnClick(){
    myscore++;
    document.getElementById("score").innerHTML="Score : "+myscore;
}
