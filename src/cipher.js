  let mycipher = (offset, string)=>{
  let end = '';
  for (let i=0; i<string.length; i++){
  let code = (string.charCodeAt(i));

  if (code > 96 && code < 123){
    end += String.fromCharCode((code-97+offset)%26+97);
  }
  else if(code > 64 && code < 91){
    end += String.fromCharCode((code-65+offset)%26+65);
  }
 
  else{
    end += String.fromCharCode(code);
    }
  }
  return end;
}

  const mydecipher = (offset, string)=>{
  let fun = '';
  for (let u=0; u<string.length; u++){
  let form = (string.charCodeAt(u));
  if (form > 96 && form < 123){
    fun += String.fromCharCode((form-122-offset)%26+122);
  }
  else if(form > 64 && form < 91){
    fun += String.fromCharCode((form-90-offset)%26+90);
  } 

  else{
    fun += String.fromCharCode(form);
    }
  }
  return fun;
}


window.cipher = {
encode : mycipher,
decode : mydecipher
}
