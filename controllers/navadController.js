const Navad = require('./../models/navaddModel')
const factory = require('./handlerFactory')

exports.createAdd = factory.createOne(Navad);
exports.getallAdd = factory.getAll(Navad);
exports.updateAdd = factory.updateOne(Navad);
exports.deleteAdd = factory.deleteOne(Navad);
exports.getAdd = factory.getOne(Navad)