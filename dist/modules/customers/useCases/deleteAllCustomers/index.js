"use strict";
exports.__esModule = true;
exports.deleteAllCustomersController = void 0;
var CustomersRepository_1 = require("../../repositories/implementations/CustomersRepository");
var DeleteAllCustomersController_1 = require("./DeleteAllCustomersController");
var DeleteAllCustomersUseCase_1 = require("./DeleteAllCustomersUseCase");
var customersRepository = CustomersRepository_1.CustomersRepository.getInstance();
var deleteAllCustomersUseCase = new DeleteAllCustomersUseCase_1.DeleteAllCustomersUseCase(customersRepository);
var deleteAllCustomersController = new DeleteAllCustomersController_1.DeleteAllCustomersController(deleteAllCustomersUseCase);
exports.deleteAllCustomersController = deleteAllCustomersController;
//# sourceMappingURL=index.js.map