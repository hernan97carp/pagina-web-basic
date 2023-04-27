const express = require("express");
const morgan = require("morgan")
const path= require('path')

const app = express();
//settings
app.set("case sentitive routing", true) //respeta camel case en rutas
app.set("appName", "Express Course")
//app.set("port", 3000)
//middlewords
app.use(express.json())
app.use(morgan("dev"))

//rutas

app.post('/profile',(req, res)=>{
  console.log(req.body)
  res.send('profile page')
})



app.get('/dashbord', (req, res)=>{
  res.send('Dashboard page')
})
app.use((req, res, next)=>{
  console.log(`Route: ${req.url} Metodo: ${req.method}`)
  console.log('paso por aqui')
  next()
})
//para entrar seria   /dashbord?login=hernan97carp@hotmail.com
// app.use((req, res, next)=>{
//   if(req.query.login === 'hernan@hotmail.com'){
//     next()
//   }else{
//     res.send('no autorizado')
//   }
// })












app.all('/info', (req, res)=>{
  res.send('server info')
})

app.get('/hello/:username',(req, res)=>{
  console.log(typeof req.params.username)
  res.send(`hello ${req.params.username}`)
})

//search?q=javascript%20books
app.get('/search',(req, res)=>{
if(req.query.q === 'javascript books'){
  res.send('lista de libros javascript')
}else{
  res.send('pagina normal')
}
})

app.get('/add/:x/:y',(req, res)=>{
  console.log(req.params.x)
  console.log(req.params.y)
const {x, y} = req.params
res.send(`result: ${parseInt(x) + parseInt(y)}`)

  // const result= parseInt(req.params.x) + parseInt(req.params.y)
  // res.send(`result: ${result}`)
})


// app.get("/users/:username/photo",(req, res)=>{
//  if(req.params.username === "fazt"){
//  return res.sendFile("./js.png", {
//     root: __dirname
//   })
//  }
//  res.send("el usuario no esta permitido")
// })


// app.get("/miarchivo", (req, res) => {
//   res.sendFile("./js.png", {
//     root: __dirname,
//   });
// });


app.get("/name/:nombre/age/:age", (req, res)=>{
  res.send(`El usuario ${req.params.nombre} tiene la edad de ${req.params.age}`)
})

//primero procesamos rutas y sino se encuentra lo q buscamos pasamos por la carpeta public
//app.use(express.static("./public")) //solo la carpeta public es publica
// app.use("/public",express.static("./public")) //prefijo accedemos alos archivos con public/index.html ejemplo...
// app.use("/uploads",express.static("./uploads"))
app.use("/public", express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.listen(3000);
console.log(`server ${app.get("appName")}in port ${3000}`);











//ala antiguita

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res)=>{
//     const read= fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })
// server.listen(3000)
// console.log(`server in port ${3000}`)

// app.get('/',(req, res)=>{
//     res.send('hello word')

//     })

//     app.get('/about',(req, res)=>{
//         res.send('About')

//         })

//         app.get('/weather',(req, res)=>{
//             res.send('weather')

//             })

//            app.use((req, res)=>{
//             res.status(404).send("No se encontra la ruta")
//            })

// app.get('/',(req, res)=>{
//     res.sendFile('./static/index.html',{
//         root: __dirname
//     })

// })













// app.get("/", (req, res) => {
//   res.send("hello");
// });



// app.get("/miarchivo", (req, res) => {
//   res.sendFile("./js.png", {
//     root: __dirname,
//   });
// });

// app.get("/users",(req, res)=>{
//     res.json({
//         number: 4,
//         "name": "francisco",
//         age : 20,
//         points: [1,2,4],
//         adress: {
//             city: "mendoza",
//             location: "argentina",
//         }

//     })
// })

// app.get('/products',(req, res)=> {
//     res.send('lista de productos')
// })

// app.post('/products',(req, res)=> {
// res.send('creando')

// })

// app.put('/products',(req, res)=> {
//     res.send('actualizando crack')

//     })

// app.delete('/products',(req, res)=> {
//     res.send('borrando')

//     })

//     app.patch('/products',(req, res)=> {
//         res.send('modificando')

//         })








//  clieente servidor

// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

// app.post('/users',(req, res)=>{
//   console.log(req.body)
//   res.send('nuevo usuario')
// })