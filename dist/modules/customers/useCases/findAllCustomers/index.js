"use strict";
exports.__esModule = true;
exports.findAllCustomersController = void 0;
var CustomersRepository_1 = require("../../repositories/implementations/CustomersRepository");
var FindAllCustomersController_1 = require("./FindAllCustomersController");
var FindAllCustomersUseCase_1 = require("./FindAllCustomersUseCase");
var customersRepository = CustomersRepository_1.CustomersRepository.getInstance();
var findAllCustomersUseCase = new FindAllCustomersUseCase_1.FindAllCustomersUseCase(customersRepository);
var findAllCustomersController = new FindAllCustomersController_1.FindAllCustomersController(findAllCustomersUseCase);
exports.findAllCustomersController = findAllCustomersController;
//# sourceMappingURL=index.js.map