let nombre="pedro";
const promesa =  new Promise((resolve,reject)=>{
    if(nombre !== "pedro")reject("lo siento el nombre no es pedro")
    else resolve(nombre)
})
console.log(promesa)