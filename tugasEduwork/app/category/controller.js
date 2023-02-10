const Category = require("./model")

const store = async(req,res,next) => {
    try {
        let payload = req.body
        let category = new Category(payload)
        await category.save()
        return res.json(category)
    } catch (err) {
        if(err && err.name === "ValidationError"){
            return res.json({
                error:1,
                message:err.message,
                fields:err.errors
            })
        }
        next(err)
    }
};

const update = async(req,res,next) => {
    try {
        let payload = req.body
        let category = await Category.findByIdAndUpdate(req.params.id,
            payload,
            {new:true,runValidators:true})
        return res.json(category)
    } catch (err) {
        if(err && err.name === "ValidationError"){
            return res.json({
                error:1,
                message:err.message,
                fields:err.errors
            })
        }
        next(err)
    }
};

const index = async(req,res,next) => {
    try {
        let response = await Category.find();
        return res.json(response)
    } catch (error) {
        if(err && err.name === "ValidationError"){
            return res.json({
                error:1,
                message:err.message,
                fields:err.errors
            })
        }
        next(error)
    }
};

const destroy = async(req,res,next) => {
    try {
        let category = await Category.findByIdAndDelete(req.params.id);
        return res.json(category);
    } catch (error) {
        if(err && err.name === "ValidationError"){
            return res.json({
                error:1,
                message:err.message,
                fields:err.errors
            })
        }
        next(error)
    }
};

module.exports = {
    store,
    update,
    index,
    destroy
}