const Usuario = require('../model/user.model')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const SECRET = process.env.SECRET_KEY


module.exports = {
        registrarUsuario: async (req, res) => {
            try{
                const nuevoUsuario = await Usuario.create(req.body)
                const userToken = jwt.sign({_id:nuevoUsuario._id}, SECRET)
                res.status(201).cookie('userToken', userToken, {httpOnly:true})
                .json({successMessage:"Usuario registrado ",user:nuevoUsuario})
            }catch(error){
                res.status(401).json(error)
            }
        },

    loginUsuario: async (req, res)=>{
        const usuario = await Usuario.findOne({email:req.body.email})
        console.log(" El usuario que intenta ingresar es:", usuario )
        if(!usuario){
            res.status(400).json({error: "Email/Password incorrecto"})
        }
        try{
            const passwordValida = await bcrypt.compare(req.body.password, usuario.password )
            console.log(passwordValida, " PASSWORD VALIDA")
            if(!passwordValida){
                res.status(400).json({error: "Email/Password incorrecto"})
                

            }else{
             const userToken = jwt.sign({_id:usuario._id}, SECRET)
             res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 90000)})
             .json({success:'Bienvenido , Que tenga  un buen dia !'})
            }
           

        }catch(error){
            res.status(400).json({error: "Email/Password incorrecto"})
        }
    },
    logOutUser:(req,res)=>{
        res.clearCookie('userToken')
        res.json({success:'Usuario salio'})
    },


    UsuariosRegistrados: (req, res)=>{
        Usuario.find({})
        .then((Usuario)=>{
            res.json(Usuario)
            
        }).catch((error)=>{
            console.log(error)
        })
    },
 
    informacionCuenta : (req, res)=>{
        Usuario.updateOne({_id: req.params.id}, req.body)
        .then((res)=>{
            // console.log(req.body)
            res.json(200).json(res.body)

            
        }).catch((error)=>{
            console.log(error)
            res.status(400).json(error)
        })
    },

    obtenerUsuario: (req, res)=>{
        Usuario.findById({_id: req.params.id},req.body)
        .then((Usuario)=>{
            console.log(res.body)
           return res.json(Usuario)
        }).catch((error)=>{
            console.log(error)
            res.status(400).json(error)
        })
    }
   


}

