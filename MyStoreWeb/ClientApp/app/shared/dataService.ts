import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';
import { Product } from "./product";
import { Order } from "./order";


@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }
    public order: Order;

    public products: Product[] = [];


    loadProducts(): Observable<boolean> {
        return this.http.get("/api/products")
            .map((data: any[]) => {
                    this.products = data;
                    return true;
                });
    }
    public addtoOrder(newProduct: Product) {

    }

}