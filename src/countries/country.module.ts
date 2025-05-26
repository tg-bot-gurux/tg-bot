import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CountryModel } from './models/country.model';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';

@Module({
    imports: [SequelizeModule.forFeature([CountryModel])],
    providers: [CountryService],
    controllers: [CountryController],
})
export class CountryModule { }
