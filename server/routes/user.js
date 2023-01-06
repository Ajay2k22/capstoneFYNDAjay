import express from "express";
import Usercontroller from '../controller/usercontroller.js'

const router = express.Router();


router.post(`/user`, Usercontroller.usercontrollnew)

router.get(`/user`, Usercontroller.usercontrollfetch)

router.put(`/user/:id`, Usercontroller.usercontrollupdate)

router.delete('/user/products/:id',Usercontroller.usercontrollDelete)

export default router;