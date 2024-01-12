function uru711(){
  var year = document.getElementById('answer711').value;
  
  if(year % 4 != 0){
    alert('平年');
  }else if(year % 100 != 0){
    alert('閏年');
  }else if(year % 400 == 0){
    alert('閏年');
  }else{
    alert('平年');
  }
}
