let ciphercesar = document.getElementById('cipher');
ciphercesar.addEventListener('click', () =>{
let offset = parseInt(document.getElementById('key').value);
let string = document.getElementById('text1').value;
let result = document.getElementById('text2');
if(string === ''){
  return('');
}
else if(offset === offset ==''){
  return('');
}
  result.value = window.cipher.encode(offset, string);
});


let deciphercesar = document.getElementById('decipher');
deciphercesar.addEventListener('click', () =>{
let offset = parseInt(document.getElementById('key').value);
let string = document.getElementById('text1').value;
let enddecipher = document.getElementById('text2');
if(string === ''){
  return('');
}
else if(offset === offset ==''){
  return('');
}
  enddecipher.value = window.cipher.decode(offset, string);
});


const enterinicio = document.getElementById('enter');
enterinicio.addEventListener('click', ()=>{
const password = document.getElementById('password').value;
if(password == 'bienvenido'){
   const enter = document.getElementById('container');
   enter.style.display = 'block';
   const root = document.getElementById('root');
   root.style.display = 'none';
  }
});


const resetcesar = document.getElementById('myreset');
resetcesar.addEventListener('click', ()=>{
   document.getElementById('text1').value='';
   document.getElementById('key').value='';
   document.getElementById('text2').value='';
});