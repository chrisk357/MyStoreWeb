export interface Order {
    orderId: number;
    orderDate: Date;
    orderNumber: string;
    items: Item[];
}

export interface Item {
    id: number;
    quantity: number;
    unitPrice: number;
    productId: number;
    productCategory: string;
    productSize: string;
    productTitle: string;
    productArtist: string;
    productArtId: string;
}