//primera forma de exportar
const { Router } = require("express")

const router = Router()

router.get("/about", (req, res) => {
  const title ="mi pagina creada desde express 33 33"
  res.render("index",{title});
});

router.all("/info", (req, res) => {
  res.send("server info");
});

router.get("/search", (req, res) => {
  if (req.query.q === "javascript books") {
    res.send("lista de libros javascript");
  } else {
    res.send("pagina normal");
  }
});

router.get("/add/:x/:y", (req, res) => {
  console.log(req.params.x);
  console.log(req.params.y);
  const { x, y } = req.params;
  res.send(`result: ${parseInt(x) + parseInt(y)}`);

  // const result= parseInt(req.params.x) + parseInt(req.params.y)
  // res.send(`result: ${result}`)
});

module.exports = router;






//para entrar seria   /dashbord?login=hernan97carp@hotmail.com
// app.use((req, res, next)=>{
//   if(req.query.login === 'hernan@hotmail.com'){
//     next()
//   }else{
//     res.send('no autorizado')
//   }
// })
