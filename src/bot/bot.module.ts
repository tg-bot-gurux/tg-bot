import { Module } from "@nestjs/common";
import { BotUpdate } from "./bot.update";
import { UserService } from "src/user/user.service";
import { UserModule } from "src/user/user.module";

@Module({
    imports: [UserModule],
    providers: [BotUpdate, UserService],
})
export class BotModule {}