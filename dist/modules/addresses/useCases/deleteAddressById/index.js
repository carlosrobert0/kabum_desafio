"use strict";
exports.__esModule = true;
exports.deleteAddressByIdController = void 0;
var AddressesRepository_1 = require("../../repositories/implementations/AddressesRepository");
var DeleteAddressByIdController_1 = require("./DeleteAddressByIdController");
var DeleteAddressByIdUseCase_1 = require("./DeleteAddressByIdUseCase");
var addressesRepository = AddressesRepository_1.AddressesRepository.getInstance();
var deleteAddressByIdUseCase = new DeleteAddressByIdUseCase_1.DeleteAddressByIdUseCase(addressesRepository);
var deleteAddressByIdController = new DeleteAddressByIdController_1.DeleteAddressByIdController(deleteAddressByIdUseCase);
exports.deleteAddressByIdController = deleteAddressByIdController;
//# sourceMappingURL=index.js.map