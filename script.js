let bal=1000, m='', o=0;
function openSlip(match,od){m=match;o=od;
document.getElementById('m').innerText=match;
document.getElementById('o').innerText=od;
document.getElementById('slip').classList.remove('hide');}
function closeSlip(){document.getElementById('slip').classList.add('hide');}
function placeBet(){
let a=Number(document.getElementById('amt').value);
if(!a||a>bal){alert('Invalid amount');return;}
bal-=a;document.getElementById('bal').innerText=bal;
alert('Bet Placed (Demo)');
closeSlip();}
