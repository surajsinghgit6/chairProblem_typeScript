"use strict";
exports.__esModule = true;
var Chair = /** @class */ (function () {
    function Chair(chair_id, chair_company, numberOfWheels, isMovable, purpose) {
        this.chair_id = chair_id;
        this.chair_company = chair_company;
        this.numberOfWheels = numberOfWheels;
        this.isMovable = isMovable;
        this.purpose = purpose;
    }
    Chair.prototype.setChairId = function (chair_id) {
        this.chair_id = chair_id;
    };
    Chair.prototype.getChairId = function () {
        return this.chair_id;
    };
    Chair.prototype.setChairCompany = function (chair_company) {
        this.chair_company = chair_company;
    };
    Chair.prototype.getChairCompany = function () {
        return this.chair_company;
    };
    Chair.prototype.setNumberOfWheeles = function (numberOfWheels) {
        this.numberOfWheels = numberOfWheels;
    };
    Chair.prototype.getNumberOfWheels = function () {
        return this.numberOfWheels;
    };
    Chair.prototype.setIsMovable = function (isMovable) {
        this.isMovable = isMovable;
    };
    Chair.prototype.getIsMovale = function () {
        return this.isMovable;
    };
    Chair.prototype.setPurpose = function (purpose) {
        this.purpose = purpose;
    };
    Chair.prototype.getPurpose = function () {
        return this.purpose;
    };
    return Chair;
}());
exports.Chair = Chair;
