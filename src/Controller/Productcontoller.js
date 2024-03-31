import { ProductModel } from "../Model/Productmodel.js";
import { StatusCodes } from 'http-status-codes'

export async function Saveproduct(req, res) {
    try {
        const product = new ProductModel(req.body)
        const data = await product.save()
        res.status(StatusCodes.CREATED).json(data)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Product saving error")

    }

}


export async function Fetchproduct(req, res) {
    try {
        const product =await ProductModel.find()
        res.status(StatusCodes.OK).json(product)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Fetching Error")

    }
}


export async function Deleteprodut(req,res) {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id)
        res.status(StatusCodes.NO_CONTENT).json("Product delete Successfully")
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Product Delete Error")
        
    }
    
}


export async function Updateproduct(req,res) {
    try {
         await ProductModel.findByIdAndUpdate(req.params.id,req.body)
        const data = await ProductModel.find()
        res.status(StatusCodes.OK).json(data)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Product Updating Error")
        
    }
    
}