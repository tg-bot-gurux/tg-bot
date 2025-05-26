import { Body, Controller, Get, Post } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dtos/country.dto';

@Controller('countries')
export class CountryController {
    constructor(private readonly countryService: CountryService) { }

    @Post()
    create(@Body() dto: CreateCountryDto) {
        return this.countryService.create(dto);
    }

    @Get()
    findAll() {
        return this.countryService.findAll();
    }
}
