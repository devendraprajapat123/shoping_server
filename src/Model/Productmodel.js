import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,enum:['pending','in progress','completed'],default:'pending'},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}


},{timestamps:true});


export const ProductModel = mongoose.model('shopingproduct',ProductSchema)