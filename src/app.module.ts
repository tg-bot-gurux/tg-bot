import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN ? "7566806117:AAF6_wKG9CVQ3OwWl-EGUr3btmMv3ft2oyI" : "7566806117:AAF6_wKG9CVQ3OwWl-EGUr3btmMv3ft2oyI",
    }),
    BotModule,
  ],
})
export class AppModule {}
