var display = document.getElementById('Display');
var minus = document.getElementById('minus');
var multi = document.getElementById('multiplication');
var divi = document.getElementById('division');
var rem = document.getElementById('remainder');
var plus = document.getElementById('plus');
var plus = document.getElementById('plus');
var rez = document.getElementById('rezult');
var reset = document.getElementById('reset');
var lopas = document.getElementById('lopas');

var zero = document.getElementById('0');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var rezas = document.getElementById('rezult')
var lpar  = document.getElementById('(');
var rpar = document.getElementById(')');
var dot = document.getElementById('.');

    rezas.onclick = function(){
        x=display.textContent;
        let i = 0;
        let ats = '';
        let fin;
        while(i<x.length){
            ats+=x[i];
            i++;
            
        }

        display.innerText  += '=' + eval(ats);

    }

    reset.onclick = function(){
    display.innerText = '';
    };

    minus.onclick = function(){
    display.innerText += '-';
    };

    plus.onclick = function(){
    display.innerText += '+';
    };

    multi.onclick = function(){
    display.innerText += '*';
   };
   
   divi.onclick = function(){
    display.innerText += '/';
   };
   
   rem.onclick = function(){
    display.innerText += '%';
   };
   





   dot.onclick = function(){
    display.innerText+= '.';
   }
   
   lpar.onclick = function(){
    display.innerText +='('
}   


    rpar.onclick = function(){
        display.innerText +=')'
    }   

   zero.onclick = function(){
    display.innerText += '0';
   };

   one.onclick = function(){
    display.innerText += '1';
   };
   
   two.onclick = function(){
    display.innerText += '2';
   };
   
   three.onclick = function(){
    display.innerText += '3';
   };
   
   four.onclick = function(){
    display.innerText += '4';
   };
   
   five.onclick = function(){
    display.innerText += '5';
   };
   
   six.onclick = function(){
    display.innerText += '6';
   };
   
   seven.onclick = function(){
    display.innerText += '7';
   };
   
   eight.onclick = function(){
    display.innerText += '8';
   };
   
   nine.onclick = function(){
    display.innerText += '9';
   };
   
   