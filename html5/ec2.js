
function calculeaza()
    {
		
     var a=prompt("Valoarea lui a este:");//asteapta introducerea valorii lui a
     var b=prompt("Valoarea lui b este:");//asteapta introducerea valorii lui b
     var c=prompt("Valoarea lui c este:");//asteapta introducerea valorii lui c
     var a2=2*a;// a patrat
     var ac=4*a*c;//4ac
     var delta=b*b;//b patrat
     var delta=delta-ac;//b patrat-4ac
     if(delta<0){
        document.getElementById('Ecuatia').innerHTML='Nu are solutii reale !<br/>Delta = ' + delta + ' <br/>Ecuatia = ' + a + 'x&#178; + ' + b + 'x + ' + c + '<br />';
        document.getElementById('x1').innerHTML='&nbsp; ';
        document.getElementById('x2').innerHTML='&nbsp; ';
        }
     else{
        var delta_sqrt=Math.sqrt(delta);
        var x1=-b+delta_sqrt;//-b+radical din delta
        var x1=x1/a2;//-b+ radical din delta /2a
        var x2=-b-delta_sqrt;//-b-radical din delta
        var x2=x2/a2;//-b-radical din delta /2a
        document.getElementById('Ecuatia').innerHTML=" Ecuatia = " + a + "x&#178; + " + b + "x + " + c + "<br />";
        document.getElementById('x1').innerHTML=' Solutia 1 (x1) = ' + x1;
        document.getElementById('x2').innerHTML=' Solutia 2 (x2) = ' + x2;
        }
    }