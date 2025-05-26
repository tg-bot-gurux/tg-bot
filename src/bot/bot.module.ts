import { Module } from "@nestjs/common";
import { BotUpdate } from "./bot.update";
import { UserService } from "src/user/user.service";

@Module({
    imports: [UserService],
    providers: [BotUpdate]
})
export class BotModule {}