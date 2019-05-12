import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';
import { Product } from "./product";
import { Order, OrderItem } from "./order";


@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    private token: string = "";
    private tokenExpiration: Date;

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




    public AddToOrder(product: Product) {

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