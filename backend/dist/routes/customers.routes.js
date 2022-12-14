"use strict";
exports.__esModule = true;
exports.customersRoutes = void 0;
var express_1 = require("express");
var createCustomer_1 = require("../modules/customers/useCases/createCustomer");
var findAllCustomers_1 = require("../modules/customers/useCases/findAllCustomers");
var deleteAllCustomers_1 = require("../modules/customers/useCases/deleteAllCustomers");
var deleteCustomerById_1 = require("../modules/customers/useCases/deleteCustomerById");
var customersRoutes = (0, express_1.Router)();
exports.customersRoutes = customersRoutes;
customersRoutes.get("/", function (request, response) {
    return findAllCustomers_1.findAllCustomersController.handle(request, response);
});
customersRoutes.post("/", function (request, response) {
    return createCustomer_1.createCustomerController.handle(request, response);
});
customersRoutes["delete"]("/", function (request, response) {
    return deleteAllCustomers_1.deleteAllCustomersController.handle(request, response);
});
customersRoutes["delete"]("/:id", function (request, response) {
    return deleteCustomerById_1.deleteCustomerByIdController.handle(request, response);
});
//# sourceMappingURL=customers.routes.js.map