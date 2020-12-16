//alert('sundi')
function calculate(){
  var birthYear = prompt('Enter your Birth Year');
  var days = (2020 - birthYear) * 365;
  console.log(days);

  var h1 = document.createElement('h1');
  var textAns = document.createTextNode('You are ' + days + ' days' + ' old');
  h1.setAttribute('id', 'calculate');
  h1.appendChild(textAns);
  document.getElementById('result').appendChild(h1);
  console.log(days);
}


function reset(){
  document.getElementById('calculate').remove();
}
