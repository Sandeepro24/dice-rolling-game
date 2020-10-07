function myFunction(){
  var random_number=Math.floor(Math.random()*6)+1;
  var image_select="images/"+"dice"+random_number+".png";
  document.querySelectorAll('img')[0].setAttribute('src',image_select)
  var random_number2=Math.floor(Math.random()*6)+1
  var image_select2="images/"+"dice"+random_number2+".png";
  document.querySelectorAll('img')[1].setAttribute('src',image_select2)
  if(random_number>random_number2){
    document.querySelector('h1').innerHTML="Player 1 wins";
  }
  else if(random_number==random_number2){
    document.querySelector('h1').innerHTML="Draw!";
  }
  else if (random_number2>random_number) {
    document.querySelector('h1').innerHTML="Player 2 wins";
  }


}
