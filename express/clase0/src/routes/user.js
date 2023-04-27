//segunda forma de importar
const { Router } = require("express")

const router = Router()

    router.get("/UserName",(req, res) => {
          res.send("Username route");
        });
    
      
      router.post("/profile", (req, res) => {
        console.log(req.body);
        res.send("profile page");
      });
      
      router.get("/hello/:username", (req, res) => {
        console.log(typeof req.params.username);
        res.send(`hello ${req.params.username}`);
      });
      
      router.get("/name/:nombre/age/:age", (req, res) => {
        res.send(
          `El usuario ${req.params.nombre} tiene la edad de ${req.params.age}`
        );
      });
      
module.exports = router;