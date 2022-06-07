const nombre = document.getElementById("name");
const usuario= document.getElementById("usr");
const contraseña = document.getElementById("psw");
const btn = document.getElementById("btn");


let loging ={
    usr:["luis@pro","david@master"],
    name:["LUIS","DAVID"],
    pasword:["contraseña123","david123"]
}

btn.addEventListener("click",(e)=>{
    e.preventDefault;
    validation(usuario.value,nombre.value,contraseña.value);
});

validation= (usuario,nombre,contraseña)=>{
    let numeroDeRegistr = loging.usr.indexOf(usuario);
    if(numeroDeRegistr!=-1){
        if(loging.name[numeroDeRegistr]==nombre.toUpperCase()){
            if(loging.pasword[numeroDeRegistr]==contraseña){
                alert(`Bienvenido ${nombre}`)
            }else{
                alert(`contraseña incorrecta`)  
            }
        }else{
            alert(`El nombre: ${nombre} no fue encontrado, verifica si esta correcto`)
        }
    } else{
        alert(`El usuario ${usuario} no se encontro, verifique si es correcto`)
    }
}



