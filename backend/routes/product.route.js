import express from "express";
import { postProduct,getAllProducts,deleteProduct,updateProduct } from '../controllers/product.controller.js'
import rateLimit from "express-rate-limit";

const router = express.Router();

router.post('/',rateLimit({
    windowMs: 10*1000,
    max:3
}),postProduct);
router.get('/all',getAllProducts);
router.delete('/:id',deleteProduct);
router.put('/:id',updateProduct)

export default router;
