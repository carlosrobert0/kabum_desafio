"use strict";
exports.__esModule = true;
exports.createAddressController = void 0;
var AddressesRepository_1 = require("../../repositories/implementations/AddressesRepository");
var CreateAddressController_1 = require("./CreateAddressController");
var CreateAddressUseCase_1 = require("./CreateAddressUseCase");
var addressesRepository = AddressesRepository_1.AddressesRepository.getInstance();
var createAddressUseCase = new CreateAddressUseCase_1.CreateAddressUseCase(addressesRepository);
var createAddressController = new CreateAddressController_1.CreateAddressController(createAddressUseCase);
exports.createAddressController = createAddressController;
//# sourceMappingURL=index.js.map