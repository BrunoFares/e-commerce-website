export type GetProductResponse = Item[];

export interface Item {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}