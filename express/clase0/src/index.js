const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("ejs")
const app = express();

const usersRoutes = require("./routes/user")
const homeRoutes = require("./routes/home")

//settings
app.set("case sentitive routing", true); //respeta camel case en rutas
app.set("appName", "Express Course");
app.set("view engine", "ejs")// aplicamos el motor de las vistas
app.set("views", path.join(__dirname, "views"))
//app.set("port", 3000)


//middlewords
app.use(express.json());
app.use(morgan("dev"));

app.use(homeRoutes)
app.use(usersRoutes)

//routes

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(3000);
console.log(`server ${app.get("appName")}in port ${3000}`);










//primero procesamos rutas y sino se encuentra lo q buscamos pasamos por la carpeta public
//app.use(express.static("./public")) //solo la carpeta public es publica
// app.use("/public",express.static("./public")) //prefijo accedemos alos archivos con public/index.html ejemplo...
// app.use("/uploads",express.static("./uploads"))

//search?q=javascript%20books

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

// app.use((req, res, next)=>{
//   console.log(`Route: ${req.url} Metodo: ${req.method}`)
//   console.log('paso por aqui')
//   next()
// })

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
