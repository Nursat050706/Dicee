var n1 = Math.floor(Math.random()*6) + 1;



var n2 = Math.floor(Math.random()*6) + 1;


if (n1 > n2){
   document.querySelector('h1').innerHTML = 'Playr 1 wins'
}
else if (n1 < n2) {
     document.querySelector('h1').innerHTML = 'Playr 2 wins'
}
else{
    document.querySelector('h1').innerHTML = 'Drow'
}


var randomimg1 = './images/dice' + n1 + '.png';
var randomimg2 = './images/dice' + n2 + '.png';
var imge1 = document.querySelectorAll('img')[0];
var imge2 = document.querySelectorAll('img')[1];
imge1.setAttribute('src', randomimg1);
imge2.setAttribute('src', randomimg2);