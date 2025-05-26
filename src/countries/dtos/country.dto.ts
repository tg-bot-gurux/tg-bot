import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
    @ApiProperty({
        example: 'Uzbekistan',
        description: 'Country name object with common and optional official names',
    })
    name: { common: string; official?: string }

    @ApiProperty({
        example: 'Tashkent',
        description: 'Capital cities',
        required: false,
    })
    capital?: string

    @ApiProperty({
        example: 'Asia',
        description: 'Geographical region of the country',
        required: false,
    })
    region?: string

    @ApiProperty({
        example: 35000000,
        description: 'Population count',
        required: false,
    })
    population?: number
}
