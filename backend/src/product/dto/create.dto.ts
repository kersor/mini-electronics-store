export class ProductCreateDto {
    title: string
    description: string
    price: string
    categoryId: string
    characteristics: ProductCreateCharacteristicsDto[]
    count?: number
}

export class ProductCreateCharacteristicsDto {
    characteristicId: number
    value: string
}

export class ProductUpdateCountDto {
    count: number
}