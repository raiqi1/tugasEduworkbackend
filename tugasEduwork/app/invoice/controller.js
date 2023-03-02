const { subject } = require('@casl/ability');
const Invoice = require('./model');
const { policyFor } = require('../../utils');

const show = async(req,res,next) => {
    try {
        let policy = policyFor(req.user);
        let subjectInvoice = subject('Invoice',{user_id: req.user._id});
        if(!policy.can('read',subjectInvoice)){
            return res.json({
                error:1,
                message:'anda tidak memiliki akses untuk melihat invoice ini'
            })
        }
        
        let{order_id} = req.params;
        let invoices = await Invoice
        .findOne({order:order_id})
        return res.json(invoices)
    } catch (err) {
        console.log(err)
        return res.json({
            error:1,
            message:'error when geting invoice'
        })
    }
}

module.exports = {
    show
}