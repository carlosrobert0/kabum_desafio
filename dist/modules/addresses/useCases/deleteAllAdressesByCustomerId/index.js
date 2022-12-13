"use strict";
exports.__esModule = true;
exports.deleteAllAddressesByCustomerIdController = void 0;
var AddressesRepository_1 = require("../../repositories/implementations/AddressesRepository");
var DeleteAllAddressesByCustomerIdController_1 = require("./DeleteAllAddressesByCustomerIdController");
var DeleteAllAddressesByCustomerIdUseCase_1 = require("./DeleteAllAddressesByCustomerIdUseCase");
var addressesRepository = AddressesRepository_1.AddressesRepository.getInstance();
var deleteAllAddressesOfCustomerIdUseCase = new DeleteAllAddressesByCustomerIdUseCase_1.DeleteAllAddressesOfCustomerIdUseCase(addressesRepository);
var deleteAllAddressesByCustomerIdController = new DeleteAllAddressesByCustomerIdController_1.DeleteAllAddressesByCustomerIdController(deleteAllAddressesOfCustomerIdUseCase);
exports.deleteAllAddressesByCustomerIdController = deleteAllAddressesByCustomerIdController;
//# sourceMappingURL=index.js.map