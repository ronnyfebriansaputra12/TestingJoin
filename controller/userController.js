const express = require('express');
const { json } = require('sequelize');
const { User } = require('../models')
const router = express.Router();

module.exports = {
    async list(req, res){
        const users = await User.findAll()
        
        return res.json(users) 
    },

    async create(req,res){
        const body = req.body

        if(!body.name || !body.email){
            res.status(400).json({message:"name dan email harus di isi"})
            return false
        }
        const user = await User.create(body)

        return res.json(user)
    },

    async get(req,res){
        

        const user = await User.findByPk(req.params.id)

        if(!user){
            res.status(404).json({message:"User not Found"})
            return false
        }

        return res.json(user)
    },

    async update(req,res){

        const { id } = req.params
        // console.log("INI HASIL LOG ID YAAA : ", id);

        const body = req.body

        await User.update(body,{
            where:{
                id : id
            }
        })
        return res.json({message : "Update Data Success"})
    },

    async destroy(req, res){
        await User.destroy({where : {
            id : req.params.id
        }}).then(()=>{
            res.status(200).json({
                status : 'Delete Data Success'
            })
        }).catch((err) =>{
            res.status(422).json({
                message : err.message
            })
        })

        // return res.json({message:"OK"})
    }
}