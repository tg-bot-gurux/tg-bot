import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CountryModel } from './models/country.model';
import { CreateCountryDto } from './dtos/country.dto';

@Injectable()
export class CountryService {
    constructor(
        @InjectModel(CountryModel)
        private readonly countryModel: typeof CountryModel
    ) { }

    async create(dto: CreateCountryDto): Promise<CountryModel> {
        return this.countryModel.create(dto as any);
    }

    async findAll(): Promise<CountryModel[]> {
        return this.countryModel.findAll();
    }
}
