function showTheState(name){
    
    console.log(name);
   switch(name) {
    case 1:
        getLocation(41.071194, -78.128235);
    break;
  case 2:
        getLocation(37.325374, -78.632593);
    break;
       case 3:
        getLocation(44.730831, -90.077184);
           
        break;
  default:
    
   }
  
}

function getLocation(lat, lng){
    map.setView([lat,lng], 7);
}