// code your solution here
// let saturday='roller-skate';
// function saturdayFun(){
// return saturday

// }
// saturdayFun()
function saturdayFun(defaultActivity = 'roller-skate' ){
    return `This Saturday, I want to ${defaultActivity}!`;
}
saturdayFun();

function mondayWork(defaultActivity ='go to the office') 
{
    return `This Monday, I will ${defaultActivity}.`
    
}
mondayWork();
let wrapAdjective = function(arsterik="*") {
    return function(adjective="special") {
      return `You are ${arsterik}${adjective}${arsterik}!`
    }
  }