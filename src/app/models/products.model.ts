export interface Product{
    id: number,
    product_name: string,
    category: string,
    description: string,
    day_start: Date,
    day_finish: Date,
    medias: any[]
    userId: number
}