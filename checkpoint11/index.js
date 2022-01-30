function replace(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);
    if ( (localStorage.getItem("user") == username))
    {
        if ( (localStorage.getItem("pass") == password))
        {
              alert('Successfully loggedin');
        }           
    }  
    const btn=document.querySelector('button');
    const newItem = document.createElement('button');
    newItem.innerHTML='<button style="border:none;" id="btn2" onClick="origin()">Log Out</button>';
    
    btn.parentNode.replaceChild(newItem, btn);
}
    
function origin(){
    const btn2=document.querySelector('button');
    
    const newItem2= document.createElement('button');
    newItem2.innerHTML='<button type="button" id="b" class="btn btn-light btn-sm" data-toggle="modal" data-target="#myModal" data-backdrop="false">Login</button>';
    
    btn2.parentNode.replaceChild(newItem2, btn2);
    }
function add(){
        document.getElementById('slide').style.opacity=1;
        const btn=document.getElementById('view').querySelector('button');
    
		const newItem = document.createElement('button');
		newItem.innerHTML='<button id="vb" style="border:none;" class="btn  btn-secondary  btn-lg" onClick="hide()">View Less</button>';
    
		btn.parentNode.replaceChild(newItem, btn);
 }
 function hide(){
    document.getElementById('slide').style.opacity=0;
    const bs=document.getElementById('view').querySelector('button');
		
	const hidediv=document.createElement('button');
	hidediv.innerHTML='<button style="border:none;" id="viewBtn" type="button" class="btn btn-secondary btn-lg" onClick="add()">View More</button>';
	bs.parentNode.replaceChild(hidediv,bs);
 }