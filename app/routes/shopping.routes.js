module.exports = app => {
    const shopping = require("../controllers/shopping.controller.js");
    const { authJwt } = require("../middleware");
  
    var router = require("express").Router();
  
  
    router.post("/", [authJwt.verifyToken],shopping.create);

    router.get("/",[authJwt.verifyToken],shopping.findAll);
  
    router.get("/:id", [authJwt.verifyToken],shopping.findOne);
  

    router.put("/:id", [authJwt.verifyToken],shopping.update);
  

    router.delete("/:id", [authJwt.verifyToken],shopping.delete);
  

    router.delete("/", [authJwt.verifyToken],shopping.deleteAll);
  
    app.use('/api/shopping', router);
  };