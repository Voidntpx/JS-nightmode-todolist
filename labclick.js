document.querySelectorAll('h1').forEach(function(e){
    e.addEventListener('click',function(){
        document.getElementById("t1").innerHTML = "Ah Shit!! you did it!";
        document.getElementById("t2").innerHTML = "Damn!!!!!";
    })
});

document.querySelectorAll('.b1').forEach(function(e) {
    e.addEventListener('click', function() {
      alert(this.id+" said: Hey Stop it!");
      this.style.backgroundColor = "black";
      this.style.color="white"
      
    })
  });
// const b1 = document.querySelector('#b1');