var input = document.getElementById("inputed");
input.addEventListener("keyup", function(event) {
   if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("adddata").click();
      }
});

function newtodolist() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputed").value;
  var text = document.createTextNode(inputValue);
  var closebutt = document.createElement("SPAN");



    closebutt.innerHTML="<i class='fa fa-trash'></i>" 
    closebutt.className = "close";
  li.appendChild(closebutt);
  li.appendChild(text);
  



  if (inputValue === ''){

    alert("please fill your todolist");
  } 
  else{
    document.getElementById("alllist").appendChild(li);
  }

  document.getElementById("inputed").value = "";
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);




