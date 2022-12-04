const express = require('express');
const { json } = require('sequelize');
const { Kategori } = require('../models')
const router = express.Router();


module.exports = {

    async list(req, res){
        const Kategoris = await Kategori.findAll()

        return res.json(Kategoris)
    },

    async create(req,res){
        const body = req.body
        if(!body){
            res.status(400).json({message:"Data harus di isi"})
            return false
        }
        const Kategori = await Kategori.create(body)

        return res.json(Kategori)
    },



    async show(req, res){
        const Kategori = await Kategori.findByPk(req.params.id)

        if(!Kategori){
            return res.status(404).json({message : "Data Not found"})
        }
        return res.status(200).json(Kategori)


    },

    async update(req,res){
        const { id } = req.params

        const body = req.body
        await Kategori.update(body,{
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
        await Kategori.destroy({
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