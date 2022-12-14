"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var addresses_routes_1 = require("./addresses.routes");
var customers_routes_1 = require("./customers.routes");
var users_routes_1 = require("./users.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/users", users_routes_1.usersRoutes);
routes.use("/customers", customers_routes_1.customersRoutes);
routes.use("/addresses", addresses_routes_1.addressesRoutes);
//# sourceMappingURL=index.js.map