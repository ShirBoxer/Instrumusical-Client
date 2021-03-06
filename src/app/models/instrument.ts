export interface Instrument{
    _id?: string,
    name: string,
    brand: string,
    category: string,
    imgPath: string,
    description: string,
    reviews: string[],
    quantity: number,
    price: number,
    sold: number
}