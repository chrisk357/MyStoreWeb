(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Product List';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'the-shop',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
var productList_component_1 = __webpack_require__(/*! ./shop/productList.component */ "./app/shop/productList.component.ts");
var cart_component_1 = __webpack_require__(/*! ./shop/cart.component */ "./app/shop/cart.component.ts");
var shop_component_1 = __webpack_require__(/*! ./shop/shop.component */ "./app/shop/shop.component.ts");
var checkout_component_1 = __webpack_require__(/*! ./checkout/checkout.component */ "./app/checkout/checkout.component.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./app/login/login.component.ts");
var dataService_1 = __webpack_require__(/*! ./shared/dataService */ "./app/shared/dataService.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
var routes = [
    { path: "", component: shop_component_1.Shop },
    { path: "checkout", component: checkout_component_1.Checkout },
    { path: "login", component: login_component_1.Login }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                productList_component_1.ProductList,
                cart_component_1.Cart,
                shop_component_1.Shop,
                checkout_component_1.Checkout,
                login_component_1.Login
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                dataService_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./app/checkout/checkout.component.css":
/*!*********************************************!*\
  !*** ./app/checkout/checkout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout-thumb {\r\n    max-width: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtdGh1bWIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./app/checkout/checkout.component.html":
/*!**********************************************!*\
  !*** ./app/checkout/checkout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n    <h3>Confirm Order</h3>\r\n    <table class=\"table table-bordered table-hover\">\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td><img src=\"/images/{{ o.productImage }}.jpg\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n            <td>{{ o.productBrand }} - {{ o.productModel }}: {{ o.productDescription }}</td>\r\n            <td>{{ o.quantity }}</td>\r\n            <td>{{ o.unitPrice|currency:'USD':\"symbol\" }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity)|currency:'USD':\"symbol\" }}</td>\r\n        </tr>\r\n    </table>\r\n    <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n        <table class=\"table table-condensed\">\r\n            <tr>\r\n                <td class=\"text-right\">Subtotal:</td>\r\n                <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':\"symbol\" }}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-right\">Shipping:</td>\r\n                <td class=\"text-right\">$ 0.00</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-right\">Tax:</td>\r\n                <td class=\"text-right\">{{ (data.order.subtotal * .08)|currency:'USD':\"symbol\"}}</td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-right\">Total:</td>\r\n                <td class=\"text-right\">{{ (data.order.subtotal * .08) + data.order.subtotal|currency:'USD':\"symbol\" }}</td>\r\n            </tr>\r\n        </table>\r\n\r\n        <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n        <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./app/checkout/checkout.component.ts":
/*!********************************************!*\
  !*** ./app/checkout/checkout.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var dataService_1 = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var Checkout = /** @class */ (function () {
    function Checkout(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
    }
    Checkout.prototype.onCheckout = function () {
        var _this = this;
        this.data.checkout()
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["/"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to save order"; });
    };
    Checkout = __decorate([
        core_1.Component({
            selector: "checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], Checkout);
    return Checkout;
}());
exports.Checkout = Checkout;


/***/ }),

/***/ "./app/login/login.component.html":
/*!****************************************!*\
  !*** ./app/login/login.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" required #password=\"ngModel\" />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/login/login.component.ts":
/*!**************************************!*\
  !*** ./app/login/login.component.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var dataService_1 = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "chris@motostore.com",
            password: "P@ssw0rd!"
        };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.errorMessage = "";
        this.data.login(this.creds)
            .subscribe(function (success) {
            if (success) {
                if (_this.data.order.items.length == 0) {
                    _this.router.navigate([""]);
                }
                else {
                    _this.router.navigate(["checkout"]);
                }
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    Login = __decorate([
        core_1.Component({
            selector: "login",
            template: __webpack_require__(/*! ./login.component.html */ "./app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ }),

/***/ "./app/shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/shared/dataService.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
__webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
var order_1 = __webpack_require__(/*! ./order */ "./app/shared/order.ts");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.tokenExpiration = new Date();
        this.order = new order_1.Order();
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .pipe(operators_1.map(function (data) {
            _this.products = data;
            return true;
        }));
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        /*
        public loadProducts(): Observable<Product[]> {
            return this.http.get("/api/products")
                .map((result: Response) => this.products = result.json());
        }
        */
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .pipe(operators_1.map(function (response) {
            var tokenInfo = response;
            _this.token = tokenInfo.token;
            _this.tokenExpiration = tokenInfo.expiration;
            return true;
        }));
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear()
                .toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new http_1.HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(operators_1.map(function (response) {
            _this.order = new order_1.Order();
            return true;
        }));
    };
    DataService.prototype.AddToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId == product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new order_1.OrderItem();
            item.productId = product.id;
            item.productBrand = product.productBrand;
            item.productModel = product.productModel;
            item.productCategory = product.category;
            item.productColor = product.productColor;
            item.productSize = product.productSize;
            item.unitPrice = product.productPrice;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./app/shared/order.ts":
/*!*****************************!*\
  !*** ./app/shared/order.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return _.sum(_.map(this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());
exports.Order = Order;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;


/***/ }),

/***/ "./app/shop/cart.component.html":
/*!**************************************!*\
  !*** ./app/shop/cart.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Shopping Cart</h4>\r\n<div>Items: {{ data.order.items.length }}</div>\r\n<div>Subtotal: {{ data.order.subtotal | currency: \"USD\":true }}</div>\r\n\r\n<table class=\"table table-condensed table-striped table-sm table-hover bg-light\">\r\n    <thead>\r\n        <tr>\r\n            <td>Product</td>\r\n            <td>#</td>\r\n            <td>$</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td>{{ o.productBrand }} -- {{ o.productModel }}</td>\r\n            <td>{{ o.quantity }}</td>\r\n            <td>{{ o.unitPrice | currency:\"USD\":true }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":true }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<!--The () parenthesis are for event handlers its a call back saying call OnCheckout when the event click has happened-->\r\n<button class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>\r\n\r\n\r\n    "

/***/ }),

/***/ "./app/shop/cart.component.ts":
/*!************************************!*\
  !*** ./app/shop/cart.component.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var dataService_1 = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var Cart = /** @class */ (function () {
    //could be public or private data. 
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            //Force Login
            this.router.navigate(["checkout"]);
        }
        else {
            //Go to checkout
            this.router.navigate(["checkout"]);
        }
    };
    Cart = __decorate([
        core_1.Component({
            selector: "the-cart",
            template: __webpack_require__(/*! ./cart.component.html */ "./app/shop/cart.component.html")
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


/***/ }),

/***/ "./app/shop/productList.component.css":
/*!********************************************!*\
  !*** ./app/shop/productList.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-info img {\r\n    max-width: 100px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.product-info .product-name {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hvcC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3Nob3AvcHJvZHVjdExpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWluZm8gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./app/shop/productList.component.html":
/*!*********************************************!*\
  !*** ./app/shop/productList.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"product-info col-md-4 \"  *ngFor=\"let p of products\">\r\n        <div class=\"card bg-light p-1 m-1\"> \r\n        <img src=\"/images/{{ p.productImage }}.jpg\"  [alt]=\"p.productImage\" />\r\n        <div class=\"product-name\"> {{ p.productBrand }} - {{ p.category }} </div>\r\n    <!--    <ul class=\"product-props list-unstyled\">    -->\r\n            <div><strong>Price:</strong> {{ p.productPrice }} </div>\r\n            <div><strong>Model:</strong> {{ p.productModel }}</div>\r\n            <div><strong>Description:</strong> {{ p.description }}</div>\r\n            <div><strong>Color:</strong> {{ p.productColor }}</div>\r\n            <div><strong>Size:</strong> {{ p.productSize }}</div>\r\n\r\n      <!--  </ul>    -->\r\n        <button id=\"buyButton\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Buy</button>\r\n    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/shop/productList.component.ts":
/*!*******************************************!*\
  !*** ./app/shop/productList.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var dataService_1 = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
var ProductList = /** @class */ (function () {
    function ProductList(data) {
        this.data = data;
        this.products = data.products;
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.data.products;
            }
        });
    };
    ProductList.prototype.addProduct = function (product) {
        this.data.AddToOrder(product);
    };
    ProductList = __decorate([
        core_1.Component({
            selector: "product-list",
            template: __webpack_require__(/*! ./productList.component.html */ "./app/shop/productList.component.html"),
            styles: [__webpack_require__(/*! ./productList.component.css */ "./app/shop/productList.component.css")]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;


/***/ }),

/***/ "./app/shop/shop.component.html":
/*!**************************************!*\
  !*** ./app/shop/shop.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{ title }}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"card bg-light p-2\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/shop/shop.component.ts":
/*!************************************!*\
  !*** ./app/shop/shop.component.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop = __decorate([
        core_1.Component({
            selector: "the-shop",
            template: __webpack_require__(/*! ./shop.component.html */ "./app/shop/shop.component.html")
        })
    ], Shop);
    return Shop;
}());
exports.Shop = Shop;


/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\source\repos\chrisk357\MyStoreWeb\MyStoreWeb\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map