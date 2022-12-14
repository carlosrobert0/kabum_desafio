"use strict";
exports.__esModule = true;
exports.updateAddressByIdController = void 0;
var AddressesRepository_1 = require("../../repositories/implementations/AddressesRepository");
var UpdateAddressByIdController_1 = require("./UpdateAddressByIdController");
var UpdateAddressByIdUseCase_1 = require("./UpdateAddressByIdUseCase");
var addressesRepository = AddressesRepository_1.AddressesRepository.getInstance();
var updateAddressByIdUseCase = new UpdateAddressByIdUseCase_1.UpdateAddressByIdUseCase(addressesRepository);
var updateAddressByIdController = new UpdateAddressByIdController_1.UpdateAddressByIdController(updateAddressByIdUseCase);
exports.updateAddressByIdController = updateAddressByIdController;
//# sourceMappingURL=index.js.map