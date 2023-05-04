import express from 'express';
const router = express.Router();





router.get('/dashboard', async(req,res) => {
    res.render('index', {

    })
})






export default router;