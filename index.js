function scuberGreetingForFeet(ride){
  let result
  if(ride < 400){
    result= 'This one is on me!'
  }
  else if (ride > 2000 && ride <2500){
  result =  'I will gladly take your thirty bucks.'
  }

  else if(ride > 2500){
    result = 'No can do.'
  }
    return result
}
scuberGreetingForFeet(5000)
function ternaryCheckCity(city){
  if (city === 'NYC'){
    return "Ok, sounds good."
  }
  else{
    return 'No go.'
  }

}

function switchOnCharmFromTip(tip){

  switch (tip){
    case 'generous':
    return "Thank you so much.";
    break;
     case 'not as generous':
      return "Thank you."
       break;
       default:
        return 'Bye.'
         break;
  }
  }
 switchOnCharmFromTip('generous')