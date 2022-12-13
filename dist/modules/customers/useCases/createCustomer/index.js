"use strict";
exports.__esModule = true;
exports.createCustomerController = void 0;
var CustomersRepository_1 = require("../../repositories/implementations/CustomersRepository");
var CreateCustomerController_1 = require("./CreateCustomerController");
var CreateCustomerUseCase_1 = require("./CreateCustomerUseCase");
var customersRepository = CustomersRepository_1.CustomersRepository.getInstance();
var createCustomerUseCase = new CreateCustomerUseCase_1.CreateCustomerUseCase(customersRepository);
var createCustomerController = new CreateCustomerController_1.CreateCustomerController(createCustomerUseCase);
exports.createCustomerController = createCustomerController;
//# sourceMappingURL=index.js.map