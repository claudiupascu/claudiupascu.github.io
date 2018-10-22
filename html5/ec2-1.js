function citire {
  var a=document.getElemantById("id_a").value;
  var a=document.getElemantById("id_b").value;
  var a=document.getElemantById("id_c").value;
  var coeficienti = {a:_a,b:_b,c:_c};
  return coeficienti;
}

function rezolvare(coeficienti) {

     var a2=2*coeficienti.a;// a patrat
     var ac=4*coeficienti.a*coeficienti.c;//4ac
     var delta=coeficienti.b*coeficienti.b;//b patrat
     var delta=delta-ac;//b patrat-4ac
     if(delta>=0){
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

function afiseaza{


}
function rezolva{
 var coeficienti = citire();
 var solutii = rezolvare();
 afisare();
 }
