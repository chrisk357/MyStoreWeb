import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Router } from "@angular/router";


@Component({
    selector: "the-cart",
    templateUrl: "cart.component.html",
    styleUrls: []
})

export class Cart {

    //could be public or private data. 
    constructor(private data: DataService, private router: Router) { }

    onCheckout() {
        if (this.data.loginRequired) {
            //Force Login
            this.router.navigate(["login"]);
        } else {
            //Go to checkout
            this.router.navigate(["checkout"]);
        }
    }

}

/*
 * If i change this.router.navatee to checkout from login it works however 
 * It allows you to get to the checkout screen without being logged in
 * So Angular is not realizing that I am logged
*/