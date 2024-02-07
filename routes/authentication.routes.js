const express= require("express");
const router= express.Router();
const authController = require("../controllers/authentication"); 
// apuntamos a nuestro controlador

router.get("/iniciar",authController.login);
//mandamos una request a nuestro metodo en controlador,para recibir la vista puesta alli

module.exports = router;