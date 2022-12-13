
const hand = document.querySelectorAll('.hand');
const re = document.getElementById('re');
const result = document.getElementById('result');
const retry = document.getElementById('retry');


let ai_win = 0;
let my_win = 0;
let draW = 0;
let roundCount = 1;

    //

hand.forEach(function(element, index){

    element.addEventListener('click', function(){
        
        const draw_msg = document.getElementById('draw');
        const win_msg = document.getElementById('win');
        const lose_msg = document.getElementById('lose');
        const title = document.getElementById('title');

        var ai = Math.floor(((Math.random()*10)%3+1)) ;
        var my = index+1;
        
        title.style.display = "none";

        if(my === ai){
            draw_msg.style.display = "block";
            draW++;
        }
        else if((my === 1 && ai === 3) || (my === 2 && ai === 1) || (my === 3 && ai === 2)){
            win_msg.style.display = "block";
            my_win++;
        }
        else{
            lose_msg.style.display = "block";
            ai_win++;
        }
        
        hand.forEach((element)=>{
            element.style.display = "none";
            element.style.pointerEvents = "none";
        });

        console.log(my_win+", " + ai_win);

        if(ai === 1){
           hand[0].style.display = "block";
        }
        else if(ai === 2){
            hand[1].style.display = "block";
        }
        else if (ai === 3){
            hand[2].style.display = "block";
        }
        re.style.display = "inline-block";
        return false;
    });
});

    //


    re.addEventListener("click", function(){

        const draw_msg = document.getElementById('draw');
        const win_msg = document.getElementById('win');
        const lose_msg = document.getElementById('lose');

        const body = document.getElementById('body');
        const title = document.getElementById('title');
        const round = document.getElementById('round');

        round.innerHTML = ++roundCount;

        body.style.display = "flex";
        title.style.display = "block";

        hand.forEach((element)=>{
            element.style.display = "inline-block";
            element.style.pointerEvents = "all";
        });

        draw_msg.style.display = "none";
        win_msg.style.display = "none";
        lose_msg.style.display = "none";
    });

    //


    retry.addEventListener("click", function(){

        location.reload();

    });

   //

   result.addEventListener("click", function(){

    const body = document.getElementById('body');
    const result_body = document.getElementById('result_body');

    body.style.display = "none";
    result_body.style.display = "block";
    result_body.innerHTML += `<div class="reuslt_font">AI가 이긴 수 : ${ai_win}</div>
                           <div class="reuslt_font">내가 이긴 수 : ${my_win}</div>
                           <div class="reuslt_font">비긴 수 : ${draW}</div></br>
                           <div class="reuslt_font">플레이 해주셔서 감사합니다.</div>`;
    result.style.display = "none";
    re.style.display = "none";
    retry.style.display = "block";
 });



    

