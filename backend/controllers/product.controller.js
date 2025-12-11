import mongoose from 'mongoose';
import Product from '../models/product.model.js'

export const postProduct = async (req,res) =>{
    const product = req.body;
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({ error: "Please provide all the fields" });
    }

    const newProduct = new Product(product);
    
    try {
        await newProduct.save();
        return res.status(201).json({message: 'Product created successfully!', Product: newProduct});
    } catch (error) {
        console.log(`Error in postProduct controller: ${error.message}`)
        return res.status(500).json({message: "Server error"});
    }

}

export const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({}).lean();
        return res.status(200).json(products);
    } catch (error) {
        console.log(`Error in getAllProducts controller: ${error.message}`)
        return res.status(500).json({message: "Server error"});
    }
}

export const deleteProduct = async (req,res) => {
    const productId = req.params.id;        

    if(!mongoose.Types.ObjectId.isValid(productId)){
        return res.status(404).json(`Id not found!`);
    }
    try {
        const product = await Product.findByIdAndDelete(productId);
        res.status(200).json({message: 'Product deleted successfully', product: product});
    } catch (error) {
        console.log(`Error in deleteProduct controller: ${error.message}`)
        return res.status(500).json({message: "Server error"});
    }
}

export const updateProduct = async (req,res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    if(!mongoose.Types.ObjectId.isValid(productId)){
        return res.status(404).json(`Id not found!`);
    }
    try {
        const product = await Product.findByIdAndUpdate(productId,updatedProduct);
        res.status(200).json({message: 'Product updated successfully', product: product});
    } catch (error) {
        console.log(`Error in deleteProduct controller: ${error.message}`)
        return res.status(500).json({message: "Server error"});
    }

}
