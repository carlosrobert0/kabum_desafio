"use strict";
exports.__esModule = true;
exports.usersRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../modules/users/useCases/createUser/CreateUserController");
var usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
var createUserController = new CreateUserController_1.CreateUserController();
usersRoutes.post("/user", createUserController.handle);
//# sourceMappingURL=users.routes.js.map