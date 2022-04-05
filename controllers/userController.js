const { json } = require("express/lib/response");
const User = require("../models/User");

/* Metodo para inssertar un usuario
exports.crearUser = async (req, res) => {
  
    try {
        let user;  
        user = new User(req.body);
        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error en Servidor');
    }

}*/

exports.checkUser = async (req, res) => {
  
    try {
        let u = req.body.usuario
        let p = req.body.password
        console.log('Usuario:'+ u + 'Pass'+ p)
        const user = await User.find({usuario: u, password: p});
        if(user == null){
            res.status(404).json({msg:"Usuario Invalido"})
        }else{
            res.json(user);
        }
       
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error en Servidor');
    }

}

exports.allUser = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error en Servidor');
    }

}

exports.updateUser = async (req, res) => {
  
    try {
        const {usuario,password,role} = req.body;
        let user = await User.findById(req.params.id)
        if(!user){
            res.status(404).json({msg:"no esiste el usuario"})
        }
        user.usuario = usuario;
        user.password = password;
        user.role = role;

        user = await User.findByIdAndUpdate( {_id: req.params.id},user,{new: true})
        res.json(user);

    } catch (error) {
        console.log(error)
        res.status(500).send('Error en Servidor');
    }

}

exports.obtenerUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id)
        if(!user){
            res.status(404).json({msg:"no esiste el usuario"})
        }
        res.json(user);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error en Servidor');
    }

}

exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id)
        if(!user){
            res.status(404).json({msg:"no esiste el usuario"})
        }
        await User.findOneAndRemove( {_id: req.params.id})
        res.json({msg: "Producto eliminado correctamente"})
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error en Servidor');
    }

}