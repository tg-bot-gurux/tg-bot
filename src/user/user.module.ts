import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./model/user.model";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController]
})

export class UserModule {}