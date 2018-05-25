function enter(){
  var password = document.getElementById('password').value;
 if(password == "felizcumple"){
    var entrar = document.getElementById('container');
    entrar.style.display = 'block';
    var root = document.getElementById('root');
    root.style.display = 'none';
    }
  }

function mycipher(){
    var text = document.getElementById('texto1').value;
    var letter = text.charArt(0);
    console.log(letter);
  }



window.cipher = {
encode : mycipher,
decode : decipher,
entrar: enter
}
