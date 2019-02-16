"use strict";
exports.__esModule = true;
var chair_1 = require("../ts/chair");
var Main = /** @class */ (function () {
    function Main() {
        this.manufecture = [];
        var chairObject1 = new chair_1.Chair(1, "samsung", 4, true, ["Sleeping", "Studying"]);
        var chairObject2 = new chair_1.Chair(2, "Wingway", 0, false, ["Sleeping"]);
        var chairObject3 = new chair_1.Chair(3, "mindtree", 3, true, ["Sleeping", "Dinning"]);
        var chairObject4 = new chair_1.Chair(4, "google", 6, true, ["Dinning", "Sleeping", "Studying"]);
        var chairObject5 = new chair_1.Chair(5, "Wipro", 4, true, ["Gaming", "Studying"]);
        var chairObject6 = new chair_1.Chair(6, "harshas", 2, true, ["Dinning", "Studying"]);
        var chairObject7 = new chair_1.Chair(7, "Wingway", 6, true, ["Sleeping", "Dinning"]);
        var chairObject8 = new chair_1.Chair();
        chairObject8.setChairId(8);
        chairObject8.setChairCompany("Apple");
        chairObject8.setNumberOfWheeles(4);
        chairObject8.setIsMovable(true);
        chairObject8.setPurpose(["Flying"]);
        var chairObject9 = new chair_1.Chair();
        chairObject9.setChairId(9);
        chairObject9.setChairCompany("Neelkamal");
        chairObject9.setNumberOfWheeles(4);
        chairObject9.setIsMovable(true);
        chairObject9.setPurpose(["Sleeping"]);
        var chairObject10 = new chair_1.Chair();
        chairObject10.setChairId(10);
        chairObject10.setChairCompany("Greenply");
        chairObject10.setNumberOfWheeles(5);
        chairObject10.setIsMovable(false);
        chairObject10.setPurpose(["ForHandicapped"]);
        this.manufecture.push(chairObject1, chairObject2, chairObject3, chairObject4, chairObject5, chairObject6, chairObject7);
    }
    Main.prototype.sortBynumberOfWheels = function () {
        this.manufecture.sort(function (a, b) {
            return a.getNumberOfWheels() - b.getNumberOfWheels();
        });
        return this.manufecture;
    };
    Main.prototype.sortChairByCompany = function () {
        this.manufecture.sort(function (a, b) {
            if (a.getChairCompany() < b.getChairCompany())
                return -1;
            if (a.getChairCompany() > b.getChairCompany())
                return 1;
            return 0;
        });
        console.table(this.manufecture);
    };
    Main.prototype.searh = function () {
        var arr = [];
        this.manufecture.filter(findAll);
        function findAll(value) {
            if (value.getChairCompany() == 'Wingway')
                arr.push(value);
        }
        return arr;
    };
    return Main;
}());
var Object = new Main();
var result = Object.sortBynumberOfWheels();
console.table(result);
var srh = Object.searh();
console.table(srh);
