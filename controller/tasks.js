import express from 'express';
const router = express.Router();
import Product from '../models/product.js';
import Category from '../models/category.js';


router.post('/add_category', async(req,res) => {
    const {categoryName,categoryMainImage} = req.body;
    Category.create({
        categoryName: categoryName,
        categoryMainImage: categoryMainImage
    })
    .then(result => {
        console.log(result);
        return res.redirect('/dashboard');
    })
    .catch(error => {
        console.log(error.message);
        return res.redirect('/dashboard');
    })
})




export default router;