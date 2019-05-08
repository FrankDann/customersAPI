var Customer = require('../models/customerModel');

exports.addCust = function(req,res) {
    if(!req.body) {
        return res.status(400).send("Req body missing");
    }
    else {
        var model = new Customer(req.body);
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
}

exports.showCust = function(req,res) {
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter.');
    }
    Customer.findOne({
        email: req.query.email
    })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.changeCust = function(req,res) {
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter.');
    }
    Customer.findOneAndUpdate({
        email: req.query.email
    }, req.body, {new: true})
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.deleteCust = function(req,res) {
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter.');
    }
    Customer.findOneAndDelete({
        email: req.query.email
    })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}