import CustomError from "../utils/CustomErrorHandler.js"
import { User } from "../models/user.js"

const Usercontroller = {

    usercontroll(req, res, next) {
        const result = true
        if (result) {
            return next(CustomError.alreadyExist('exits not', 400, 'main honn'))
        }

        res.json({
            msg: "user controller"
        })
    },

    async usercontrollnew(req, res, next) {
        try {
            console.log(req.body)
            const created = await User.create(req.body);
            console.log(created)
            res.status(200).json({
                name: req.body.name,
                email: req.body.email,
            })
        }
        catch (error) {
            next(new CustomError(error, 404, 'User unable to create'))
        }
    },

    async usercontrollfetch(req, res, next) {
        try {
            const data = await User.find({ $and: [{ email: req.query.email }, { password: req.query.password }] }).exec()
            console.log(data)
            if (data.length != 0) {
                res.status(200).json({
                    sucess: "true",
                    data: data,
                })
            }
            else {
                res.status(201).json({
                    sucess: "failed",
                    data: data,
                })
            }
        } catch (error) {
            next(new CustomError(error, 404, 'unable to fetch data'))
        }
    },

    async usercontrollupdate(req, res, next) {
        try {
            const fetch = await User.findById(req.params.id)
            const User = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                useFindAndModify: true,
                runValidators: true
            })
            console.log(req.body)
            console.log(User)

            res.status(200).json({
                success: true,
                msg: "updated sucessfully"
            })
        } catch (e) {
            next(new CustomError(e, 404, 'unable to update'))
        }

    },

    async usercontrollDelete(req, res) {
        try {
            const User = await User.findById(req.params.id)
            await User.remove()
            res.status(200).json({
                success: true,
                msg: "Deleted Sucesssully"
            })
        }
        catch (e) {
            next(new CustomError(e, 404, 'Unable to Delete'))
        }
    }
}
export default Usercontroller;
