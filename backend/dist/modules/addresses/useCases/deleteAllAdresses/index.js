"use strict";
exports.__esModule = true;
exports.deleteAllAddressesController = void 0;
var AddressesRepository_1 = require("../../repositories/implementations/AddressesRepository");
var DeleteAllAddressesController_1 = require("./DeleteAllAddressesController");
var DeleteAllAddressesUseCase_1 = require("./DeleteAllAddressesUseCase");
var addressesRepository = AddressesRepository_1.AddressesRepository.getInstance();
var deleteAllAddressesUseCase = new DeleteAllAddressesUseCase_1.DeleteAllAddressesUseCase(addressesRepository);
var deleteAllAddressesController = new DeleteAllAddressesController_1.DeleteAllAddressesController(deleteAllAddressesUseCase);
exports.deleteAllAddressesController = deleteAllAddressesController;
//# sourceMappingURL=index.js.map