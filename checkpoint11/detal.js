function replace(){
    alert('Successfully loggedin');
    const btn=document.querySelector('button');
    
    const newItem = document.createElement('button');
    newItem.innerHTML='<button style="border:none;" id="btn2" onClick="origin()">Log Out</button>';
    
    btn.parentNode.replaceChild(newItem, btn);}
    
function origin(){
    const btn2=document.querySelector('button');
    
    const newItem2= document.createElement('button');
    newItem2.innerHTML='<button type="button" id="b" class="btn btn-light btn-sm" data-toggle="modal" data-target="#myModal" data-backdrop="false">Login</button>';
    
    btn2.parentNode.replaceChild(newItem2, btn2);
}
function getTotalAmount(){
    var oneDay = 24 * 60 * 60 * 1000;
    const adult=document.querySelector('#ad').value;
    const fd =document.querySelector('#fd').valueAsNumber;
    const td =document.querySelector('#td').valueAsNumber;
    var days = Math.round(Math.abs(td-fd) / oneDay);
    var basic=1000;
    var a=(adult*days)*basic;
    document.getElementById('amt').value = a;
}
        