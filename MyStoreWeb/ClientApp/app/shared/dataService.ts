﻿import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map, retry } from "rxjs/operators";
import 'rxjs/add/operator/map';
import { Product } from "./product";
import { Order, OrderItem } from "./order";




@Injectable()
export class DataService {

    constructor(private http: HttpClient) {

    }

    private token: string = "";
    private tokenExpiration: Date = new Date();

    public order: Order = new Order();

    public products: Product[] = [];
        
    loadProducts(): Observable<boolean> {
        return this.http.get("/api/products")
            .pipe(
                map((data: any[]) => {
                    this.products = data;
                    return true;
            }));
    }

    /*
    public loadProducts(): Observable<Product[]> {
        return this.http.get("/api/products")
            .map((result: Response) => this.products = result.json());
    }
    */

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    
    login(creds) {
        return this.http.post("/account/createtoken", creds)
            .pipe(
                map((response: any) => {
                    let tokenInfo = response;
                    this.token = tokenInfo.token;
                    this.tokenExpiration = tokenInfo.expiration;
                    return true;
                }));
    }

  /*login(creds): Observable<boolean> {
        return this.http.post("/account/createtoken", creds)
            .map((data: any) => {
                this.token = data.token;
                this.tokenExpiration = data.expiration;
                return true;
            });
   }
  */
    public checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString()
                + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        })
            .map(response => {
                this.order = new Order();
                return true;
            });
    }


    /* TRYING TO SWITCH CODE BC ITS NOT WORKING
    public checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear()
                .toString() + this.order.orderDate.getTime().toString();
        }

        return this.http.post("/api/orders", this.order, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
                map(response => {
                    this.order = new Order();
                    return true;
                }));
    }
*/


    public AddToOrder( product : Product) {

        let item: OrderItem = this.order.items.find(i => i.productId == product.id);

        if (item) {
            item.quantity++;
        }
        else {
            item = new OrderItem();
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
    }
}