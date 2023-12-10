export interface products {
    id:number,
    name:string,
    price:string,
    code:string
}

export interface orders {
    id:number,
    productCode:string,
    payment_id:number,
    address:string
}

export interface payments {
    payment_id: number,
    order_id: number,
    transaction_id: number,
    gateway: string
}

