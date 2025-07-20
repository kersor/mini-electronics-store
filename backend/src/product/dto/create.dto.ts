export class ProductCreateDto {
    name: string
    description: string
    price: string
    categoryId: string
    photos?: string[]
    count?: number
}

export class ProductUpdateCountDto {
    count: number
}

export class ProductUpdateDto {
    name?: string
    description?: string
    price?: string
    categoryId?: string
    photos?: string[]
    count?: number
}