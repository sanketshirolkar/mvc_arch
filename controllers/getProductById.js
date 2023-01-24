const {ProductsModel} = require("../models/UserSchema");
function getProductsById(req, res) {
    var id = req.params.id;
    ProductsModel.find({ _id: `${id}` }, function (err, result) {
        if (err) {
            res.status(404).send("No Products found for given ID");
        } else {
            res.send(result);
        }
    });
}

module.exports = getProductsById;