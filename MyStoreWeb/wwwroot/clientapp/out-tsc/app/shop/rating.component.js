"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rating = 0;
    }
    RatingComponent.prototype.onClick = function (ratingValue) {
        this.rating = ratingValue;
    };
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'rating',
            template: "\n  <i class=\"glyphicon\"\n  [class.glyphicon-star-empty]=\"rating\" < 1\"\n  [class.glyphicon-star]=\"rating\" >= 1\"\n  (click)=\"onClick(1)\"\n  ></i>"
        })
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map