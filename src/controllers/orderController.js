var Order = require('../models/orderModel');

exports.newOrder = function(req,res) {
    if(!req.body) {
        return res.status(400).send("Req body missing");
    }
        var model = new Order(req.body);
        model.save()
            .then((doc) => {
                if(!doc || doc.length === 0)
                {
                    return res.status(500).send('Server error.');
                }
                else
                {
                    res.status(201).send(doc);
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
}

exports.listOrder = function(req,res) {
    if(!req.query.orderId) {
        return res.status(400).send('Missing URL parameter.');
    }
    Order.findOne({
        orderId: req.query.orderId
    })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.updateOrder = function(req,res) {
    if(!req.query.orderId) {
        return res.status(400).send('Missing URL parameter.');
    }
    Order.findOneAndUpdate({
        orderId: req.query.orderId
    },req.body, {new: true})
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.cancelOrder = function(req,res) {
    if(!req.query.orderId) {
        return res.status(400).send('Missing URL parameter.');
    }
    Order.findOneAndDelete({
        orderId: req.query.orderId
    })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}