import express from 'express';
const router = express.Router();
import Product from '../models/product.js';
import Category from '../models/category.js';


router.get('/dashboard', async(req,res) => {
    Category.findAll()
    .then(categories => {
        res.render('index', {
            pageTitle: 'Welcome to Admin',
            categories:categories
        })
    })
    .catch(error => {
        res.render('index', {
            pageTitle: 'Welcome to Admin'
        })
    })
})






export default router;