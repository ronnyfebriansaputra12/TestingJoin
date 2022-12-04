const express = require('express');
const { json } = require('sequelize');
const { Produk } = require('../models')
const router = express.Router();


module.exports = {

    async list(req, res){
        const Produks = await Produk.findAll()

        return res.json(Produks)
    },

    async create(req,res){
        const body = req.body
        console.log("HASIL : " ,body);
        if(!body){
            res.status(400).json({message:"name dan email harus di isi"})
            return false
        }
        const Produk = await Produk.create(body)

        return res.json(Produk)
    },
    async show(req, res){
        const Produk = await Produk.findByPk(req.params.id)

        if(!Produk){
            return res.status(404).json({message : "Data Not found"})
        }
        return res.status(200).json(Produk)


    },

    async update(req,res){
        const { id } = req.params

        const body = req.body
        await Produk.update(body,{
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
        await Produk.destroy({
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