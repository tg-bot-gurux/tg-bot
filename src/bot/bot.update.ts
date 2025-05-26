import { Ctx, Help, On, Start, Update } from "nestjs-telegraf";
import { Context } from "telegraf";
import * as fs from "node:fs"
import * as path from "node:path"
import axios from "axios";

@Update()
export class BotUpdate {
    constructor() {}

    @Start()
    async start(@Ctx() ctx: Context) {
        const imagePath = path.join(process.cwd(), 'static', 'world.jpg');
        await ctx.replyWithPhoto(
            { source: fs.readFileSync(imagePath) },
            {
                caption: `Assalomu alaykum  👋 \nBotga xush kelibsiz ❗  \nBotdan foydalanish uchun biror davlat nomini yozing 🌍
                `,
                reply_markup: {
                    keyboard: [
                        [{text: "Davlat qidirish 🗝"}],
                        [{text: "Bot haqida 🏆"}],
                        [{
                            text: "Joylashuv ulash 🧲", 
                            request_location: true,
                        }]
                    ],
                    resize_keyboard: true,
                }
            },
        );
    }

    @On("message")
    async message(@Ctx() ctx: Context & {message: { text: string}}) {
        ctx.reply("Qidirilmoqda biroz kuting...")
        try {
            const searchText = ctx.message.text;
            
            const result = await axios(
                `https://restcountries.com/v3.1/name/${searchText}`
            );
           
            const country = result.data[0];

            await ctx.replyWithPhoto(country.flags?.png || country.flags?.svg, 
                { caption: `Nomi: ${country.name?.common}\nPoytaxti: ${country.capital}\nRegion: ${country.region}\nAholisi: ${country.population?.toLocaleString("en-Us") || "No'malum"}`})
            
            await ctx.reply("Davlat topildi",)
        }
         catch (error) {
            console.log(error)
            if(error?.status === 404) {
                await ctx.reply('Davlat topilmadi')
                return;
            }
        }
    }
}