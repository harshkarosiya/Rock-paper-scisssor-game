score = JSON.parse( localStorage.getItem('score')) 
|| {
   wins: 0,
   losses: 0,
   ties: 0
};
updatescore(); 

   function playgame(playmove){
   const computerMove = pickMove();
    let result = '';
       if (playmove === 'scissor'){
 
       if (computerMove === 'rock'){
           result = 'lose';
       } else if (computerMove === 'paper'){
           result = 'win';
       } else if (computerMove === 'scissor'){
           result = 'tie';
       } 
   } else if (playmove === 'paper') {
       if (computerMove === 'rock'){
           result = 'win';
       } else if (computerMove === 'paper'){
           result = 'tie';
       } else if (computerMove === 'scissor'){
           result = 'lose';
       }
   } else if (playmove === 'rock'){
       if (computerMove === 'rock'){
           result = 'tie';
       } else if (computerMove === 'paper'){
           result = 'lose';
       } else if (computerMove === 'scissor'){
           result = 'win';
       }
   }
   if(result === 'win'){
      score.wins += 1;
   }
   else if (result === 'lose' ){
       score.losses +=1;
   }else if (result === 'tie'){
       score.ties += 1;
   }
   document.querySelector('.js-result')
   .innerHTML = result;
   document.querySelector('.js-move')
   .innerHTML = `You <img src="images/${playmove}-emoji.png" alt="" class="icon-2">   -   <img src="images/${computerMove}-emoji.png" alt="" class="icon-2">  Computer `;
    localStorage.setItem( 'score', JSON.stringify(score));
    updatescore();
   
}
function updatescore(){
   document.querySelector('.js-score')
   .innerHTML = ` Wins:   ${score.wins}    Losses:   ${score.losses}    Ties:   ${score.ties} `;
}
let isAutoplaying = false;
function autoplay (){
   if (!isAutoplaying){
        invalid= setInterval( function (){
         const  playmove = pickMove();
         playgame(playmove);
       }, 1000)
       isAutoplaying = true;
   } else {
       clearInterval(invalid);
       isAutoplaying = false;
   }
}
playmove();
   function pickMove(){
       const randomNum = Math.random();

       if (randomNum >= 0 && randomNum < 1/3) {
           computerMove = 'rock';
       }else if(randomNum >=1/3 && randomNum <2/3){
           computerMove = 'paper';
       }else if (randomNum >=2/3 && randomNum < 1){
            computerMove = 'scissor';
       }
       return (computerMove);
   }