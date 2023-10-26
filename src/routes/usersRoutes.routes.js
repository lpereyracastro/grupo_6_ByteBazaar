// destructurin para solamente traer la funcionalidad de router
const {Router} = require("express");
// ejecucion de router
const router = Router();
// controladores de usuarios
const usersControllers = require("../controllers/usersControllers");
// multer para procesar imagen
const multer = require("multer");
// libreria path para rutas y nombre de imagen
const path = require("path");
// middleware
const guesMiddleware = require("../middleware/guesMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
// validaciones userSchema
const {validateUsers, validatePartialUsers} = require("../../schemas/usersSchema");


// variable storage encargada de 
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, path.join(__dirname, "../../public/img/users"));
    },
    filename : function(req,file,cb){
        const ext = path.extname(file.originalname);
        const newFileName = `${Date.now()}_img_user_${ext}`;
        cb(null, newFileName);
    }
})

// variable upload almacenando multer con storage como propiedad
const upload = multer({storage});

// ruta encargada de mostrar la vista de login
router.get("/userLogin", guesMiddleware, usersControllers.login );
// ruta encargada de procesar la logica de autenticacion
router.post("/userLogin",validatePartialUsers,usersControllers.loginAunt)

// ruta encargada de mostrar la vista register
router.get("/userRegister", guesMiddleware, usersControllers.register);
// ruta encargada de procesar la logica de guardar un registro
router.post("/userRegister", upload.single("image"),validateUsers,usersControllers.registerStore);

//ruta encargada para mostrar la vista del perfil
router.get("/profile", authMiddleware, usersControllers.profile);

// ruta parta desloguearse
router.get("/logout", usersControllers.logout);

module.exports = router;