"use strict";
exports.__esModule = true;
exports.findAllAddressesController = void 0;
var AddressesRepository_1 = require("../../repositories/implementations/AddressesRepository");
var FindAllAddressesController_1 = require("./FindAllAddressesController");
var FindAllAddressesUseCase_1 = require("./FindAllAddressesUseCase");
var addressesRepository = AddressesRepository_1.AddressesRepository.getInstance();
var findAllAddressesUseCase = new FindAllAddressesUseCase_1.FindAllAddressesUseCase(addressesRepository);
var findAllAddressesController = new FindAllAddressesController_1.FindAllAddressesController(findAllAddressesUseCase);
exports.findAllAddressesController = findAllAddressesController;
//# sourceMappingURL=index.js.map