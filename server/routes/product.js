import express from "express";
import Productcontroller from "../controller/productcontroller.js";

const router = express.Router()

// router.get(`/`,Productcontroller.productcontroll)
router.get(`/`, (req, res) => {
    res.json({
        msg: 'i am here'
    })
})

router.post(`/product/new`, Productcontroller.productcontrollnew)

router.get(`/products/:id`, Productcontroller.productcontrollfetch)

router.put(`/products/:id`, Productcontroller.productcontrollupdate)

router.delete('/products/:id',Productcontroller.productcontrollDelete)

export default router;