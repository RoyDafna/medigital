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

router.get('/products/:id', async(req,res) => {

    const id = req.params.id;

    Category.findByPk(id)
    .then(category => {

        Product.findAll({where: {categoryId: id}})
        .then(products => {

            Category.findAll()
            .then(categories => {
                res.render('products', {
                    pageTitle: 'Edit ' + category.categoryName,
                    category:category,
                    products: products,
                    categories: categories
                })
            })

        })
    })
    .catch(error => {
        res.render('index', {
            pageTitle: 'Welcome to Admin'
        })
    })
})






export default router;