"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dataService_1 = require("../shared/dataService");
var router_1 = require("@angular/router");
var Cart = /** @class */ (function () {
    //could be public or private data. 
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            //Force Login
            this.router.navigate(["login"]);
        }
        else {
            //Go to checkout
            this.router.navigate(["checkout"]);
        }
    };
    Cart = __decorate([
        core_1.Component({
            selector: "the-cart",
            templateUrl: "cart.component.html",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], Cart);
    return Cart;
}());
exports.Cart = Cart;
/*
 * If i change this.router.navatee to checkout from login it works however
 * It allows you to get to the checkout screen without being logged in
 * So Angular is not realizing that I am logged
*/ 
//# sourceMappingURL=cart.component.js.map