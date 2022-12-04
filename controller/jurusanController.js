const express = require('express');
const { json } = require('sequelize');
const { Jurusan } = require('../models')
const router = express.Router();


module.exports = {

    async list(req, res){
        const jurusans = await Jurusan.findAll()

        return res.json(jurusans)
    },

    async create(req,res){
        const body = req.body
        console.log("HASIL : " ,body);
        if(!body){
            res.status(400).json({message:"name dan email harus di isi"})
            return false
        }
        const jurusan = await Jurusan.create(body)

        return res.json(jurusan)
    },
    async show(req, res){
        const jurusan = await Jurusan.findByPk(req.params.id)

        if(!jurusan){
            return res.status(404).json({message : "Data Not found"})
        }
        return res.status(200).json(jurusan)


    },

    async update(req,res){
        const { id } = req.params

        const body = req.body
        await Jurusan.update(body,{
            where : {
                id : id
            }
        }).then(() =>{
            res.status(200).json({
                message : "Update Data Success",
            })
        }).catch((err)=>{
            res.status(422).json({
                message : err.message
            })
        })
    },

    async destroy(req,res){
        await Jurusan.destroy({
            where : {
                id : req.params.id
            }
        }).then(()=>{
            res.status(200).json({
                message : 'Delete Data Success'
            })
        }).catch((err) =>{
            res.status(422).json({
                message : err.message
            })
        })
    }
}