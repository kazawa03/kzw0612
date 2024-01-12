function uru711(){
  var year = document.getElementById
  if(document.getElementById('answer711').value != '夢'){
    alert('あたり！');
  }else{
    alert('はずれ！');
  }
}

function add710(){
  var x = document.getElementById('input5').value;
  var y = document.getElementById('input6').value;
  var bmi = Number(x)/(Number(y)**2);

  if(bmi < 18.5){
    alert('低体重');
  }else if(bmi < 25){
    alert('普通');
  }else{
    alert('肥満');
  }
}
