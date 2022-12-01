export interface Product {
    _id?: any;
    name: string;
    image: object;
    description: string;
    superMarketId: any;
    categoryId: any;
    topPrice: number;
    discount: number;
    countInStock: number;
    isFutured: boolean;
    brandId?: any;
    rating: number;
    numOfReviews: number;
    sold: number;
    quantity?:number;

}