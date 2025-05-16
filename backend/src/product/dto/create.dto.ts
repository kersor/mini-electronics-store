export class ProductCreateDto {
    name: string
    description: string
    price: string
    categoryId: string
    characteristics: ProductCreateCharacteristicsDto[]
}

export class ProductCreateCharacteristicsDto {
    characteristicId: number
    value: string
}