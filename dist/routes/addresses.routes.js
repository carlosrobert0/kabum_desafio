"use strict";
exports.__esModule = true;
exports.addressesRoutes = void 0;
var express_1 = require("express");
var deleteAllAdresses_1 = require("../modules/addresses/useCases/deleteAllAdresses");
var deleteAllAdressesByCustomerId_1 = require("../modules/addresses/useCases/deleteAllAdressesByCustomerId");
var findAllAddresses_1 = require("../modules/addresses/useCases/findAllAddresses");
var createAddress_1 = require("../modules/addresses/useCases/createAddress");
var deleteAddressById_1 = require("../modules/addresses/useCases/deleteAddressById");
var updateAddressById_1 = require("../modules/addresses/useCases/updateAddressById");
var addressesRoutes = (0, express_1.Router)();
exports.addressesRoutes = addressesRoutes;
addressesRoutes.get("/", function (request, response) {
    findAllAddresses_1.findAllAddressesController.handle(request, response);
});
addressesRoutes.post("/", function (request, response) {
    createAddress_1.createAddressController.handle(request, response);
});
addressesRoutes["delete"]("/", function (request, response) {
    return deleteAllAdresses_1.deleteAllAddressesController.handle(request, response);
});
addressesRoutes["delete"]("/:id", function (request, response) {
    return deleteAddressById_1.deleteAddressByIdController.handle(request, response);
});
addressesRoutes["delete"]("/:customer_id", function (request, response) {
    return deleteAllAdressesByCustomerId_1.deleteAllAddressesByCustomerIdController.handle(request, response);
});
addressesRoutes.put("/:id", function (request, response) {
    return updateAddressById_1.updateAddressByIdController.handle(request, response);
});
//# sourceMappingURL=addresses.routes.js.map