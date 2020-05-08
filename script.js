var scorep1 = 0; var scorep2 = 0; 
var input1; var input2; 
var sound = new Audio('sounds/sound.mp3');
var win = new Audio('sounds/winning.mp3');

init();

function init(){
    document.querySelector('.player-1-score').textContent = 0;
    document.querySelector('.player-2-score').textContent = 0;
    document.querySelector('.player-head1').textContent = "Player 1";
    document.querySelector('.player-head2').textContent = "Player 2";
    document.querySelector('.img-1').src ='images/img1.svg';
    document.querySelector('.img-2').src ='images/img1.svg';
    scorep1 =0; scorep2=0;
}

document.querySelector('.restart').addEventListener('click',init);
document.addEventListener('keypress',function(event){
    if(event.code=="Space"){
        init();
    }
});



// Image Change

document.addEventListener('keypress',function(e1){


    if(e1.code=="KeyA"){
        document.querySelector('.img-1').src ='images/img1.svg';
        input1 ='stone';
    }
    else if(e1.code=="KeyS"){
        document.querySelector('.img-1').src ='images/img2.svg';
        input1 ='paper';
    }
    else if(e1.code=="KeyD"){
        document.querySelector('.img-1').src ='images/img3.svg';
        input1 ='scissor';
    }
    // A-97-65 S-115-83 D-100-68 J-106-74 K-107-75 L-108-76
});



document.addEventListener('keypress',function(e2){


    if(e2.code=="KeyJ"){
        document.querySelector('.img-2').src ='images/img1.svg';
        input2 ='stone';
    }
    else if(e2.code=="KeyK"){
        document.querySelector('.img-2').src ='images/img2.svg';
        input2 ='paper';
    }
    else if(e2.code=="KeyL"){
        document.querySelector('.img-2').src ='images/img3.svg';
        input2 ='scissor';
    }
    // A-97-65 S-115-83 D-100-68 J-106-74 K-107-75 L-108-76

});

function upp1(){
    scorep1++;
    document.querySelector('.player-1-score').textContent = scorep1;
        

}
function upp2(){
    scorep2++;
    document.querySelector('.player-2-score').textContent = scorep2;

}

//Sound Play

function playSound(){
    sound.play();
}


//Game Controller


function updateScore(input1, input2){
    if((input1=='stone'&&input2=='stone')||(input1=='paper'&&input2=='paper')||(input1=='scissor'&&input2=='scissor')){upp1();upp2();}
    else if(input1=='stone'&&input2=='paper'){upp2();}
    else if(input1=='stone'&&input2=='scissor'){upp1();}
    else if(input1=='paper'&&input2=='stone'){upp1();}
    else if(input1=='paper'&&input2=='scissor'){upp2();}
    else if(input1=='scissor'&&input2=='stone'){upp2();}
    else if(input1=='scissor'&&input2=='paper'){upp1();}
    console.log(winningPoints, scorep2, scorep1);
}

var count=0;

var winningPoints = 5;

console.log(document.addEventListener('keypress',function(e){
    count++;
    // console.log(count);
    // console.log(scorep1, scorep2);
    if(scorep1>=winningPoints||scorep2>=5){
        if((scorep1>=winningPoints) && (scorep2<winningPoints)){
            document.querySelector('.player-head1').textContent = "Winner";
            win.play();
        }
        else if((scorep2>=winningPoints) && (scorep1<winningPoints)){
            document.querySelector('.player-head2').textContent = "Winner";
            win.play();
        }
        else if((scorep2==winningPoints) && (scorep1==winningPoints)){
            document.querySelector('.player-head2').textContent = "Draw";
            document.querySelector('.player-head1').textContent = "Draw";
        }
    }
    else
    {
        if(count%2==0){
            updateScore(input1, input2);
        }  
    }  
}));


console.log(winningPoints, scorep2, scorep1);



