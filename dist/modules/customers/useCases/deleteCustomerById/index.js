"use strict";
exports.__esModule = true;
exports.deleteCustomerByIdController = void 0;
var CustomersRepository_1 = require("../../repositories/implementations/CustomersRepository");
var DeleteCustomerByIdController_1 = require("./DeleteCustomerByIdController");
var DeleteCustomerByIdUseCase_1 = require("./DeleteCustomerByIdUseCase");
var customersRepository = CustomersRepository_1.CustomersRepository.getInstance();
var deleteCustomerByIdUseCase = new DeleteCustomerByIdUseCase_1.DeleteCustomerByIdUseCase(customersRepository);
var deleteCustomerByIdController = new DeleteCustomerByIdController_1.DeleteCustomerByIdController(deleteCustomerByIdUseCase);
exports.deleteCustomerByIdController = deleteCustomerByIdController;
//# sourceMappingURL=index.js.map