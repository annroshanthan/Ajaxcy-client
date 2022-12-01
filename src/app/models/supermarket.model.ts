export interface Supermarket {
    _id?: any;
    name: string;
    images: {
        imageUrl:string;
        public_id:string
    };
    city: string;
    quote: string;
    description: string;
    about: string;
    video?: object;
    createdAt:Date;
}