import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './bot/bot.module';
import { SequelizeModule } from '@nestjs/sequelize';
<<<<<<< HEAD
import { UserModule } from './user/user.module';
=======
import { CountryModule } from './countries/country.module';
>>>>>>> 94f050e434fbb5433335b5ca0f5bc0a13901e2ae

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN ? "7566806117:AAF6_wKG9CVQ3OwWl-EGUr3btmMv3ft2oyI" : "7566806117:AAF6_wKG9CVQ3OwWl-EGUr3btmMv3ft2oyI",
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      sync: {
        alter: true,
      },
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [],
      autoLoadModels: true,
      logging: false
    }),
<<<<<<< HEAD
    UserModule,
    BotModule,
=======

    BotModule, CountryModule
>>>>>>> 94f050e434fbb5433335b5ca0f5bc0a13901e2ae
  ],
})
export class AppModule {}
