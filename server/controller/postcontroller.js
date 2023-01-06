import CustomError from "../utils/CustomErrorHandler.js"
import { Post } from "../models/post.js"
const Postcontroller = {
    async postcontrollfetch(req, res, next) {
        try {
            const data = await Post.find({})
            console.log(data)
            res.status(200).json({
                sucess: "true",
                data: data,
            })
        } catch (error) {
            next(new CustomError(error, 404, 'unable to fetch data'))
        }
    },

    async postcontrollupdate(req, res, next) {
        try {
            const fetch = await Post.findById(req.params.id)
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                useFindAndModify: true,
                runValidators: true
            })
            console.log(req.body)
            console.log(post)

            res.status(200).json({
                success: true,
                msg: "updated sucessfully"
            })
        } catch (e) {
            next(new CustomError(e, 404, 'unable to update'))
        }

    },


}
export default Postcontroller;
