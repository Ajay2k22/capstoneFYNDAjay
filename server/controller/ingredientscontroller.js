import CustomError from "../utils/CustomErrorHandler.js"
import { Ingredient } from "../models/Ingredients.js"

const Ingredientcontroller = {

    Ingredientcontroll(req, res, next) {
        const result = true
        if (result) {
            return next(CustomError.alreadyExist('exits not', 400, 'main honn'))
        }

        res.json({
            msg: "Ingredient controller"
        })
    },

    async Ingredientcontrollnew(req, res, next) {
        try {
            console.log(req.body)
            const created = await Ingredient.create(req.body);
            console.log(created)
            res.status(200).json({
                success: true,
                msg: 'Ingredient created'
            })
        }
        catch (error) {
            next(new CustomError(error, 404, 'Ingredient unable to create'))
        }
    },

    async Ingredientcontrollfetch(req, res, next) {
        try {
            const data = await Ingredient.find({})
            res.status(200).json({
                sucess: "true",
                data: data
            })
        } catch (error) {
            next(new CustomError(error, 404, 'unable to fetch data'))
        }
    },

    async Ingredientcontrollfetchslug(req, res, next) {
        try {
            let mydata = req.params.slug
            const data = await Ingredient.find({ tag: mydata })

            if (data.length!=0) {
                res.status(200).json({
                    success: "true",
                    data: data
                })
            }

            else {
                res.status(201).json({
                    success: "false",
                    data:data
                })
            }
        } catch (error) {
            next(new CustomError(error, 404, 'unable to fetch data'))
        }
    },

    async Ingredientcontrollupdate(req, res, next) {
        try {
            const fetch = await Ingredient.findById(req.params.id)
            const Ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                useFindAndModify: true,
                runValidators: true
            })
            console.log(req.body)
            console.log(Ingredient)

            res.status(200).json({
                success: true,
                msg: "updated sucessfully"
            })
        } catch (e) {
            next(new CustomError(e, 404, 'unable to update'))
        }

    },

    async IngredientcontrollDelete(req, res) {
        try {
            const Ingredient = await Ingredient.findById(req.params.id)
            await Ingredient.remove()

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
export default Ingredientcontroller