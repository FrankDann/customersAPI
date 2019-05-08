var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var orderSchema = new Schema({
    orderId: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }
});

module.exports = mongoose.model('Order',orderSchema);