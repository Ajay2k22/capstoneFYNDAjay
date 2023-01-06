import express from "express";
import Postcontroller from "../controller/postcontroller.js";
const router = express.Router();

router.get(`/post`, Postcontroller.postcontrollfetch)


router.put(`/post/:id`, Postcontroller.postcontrollupdate)
export default router;