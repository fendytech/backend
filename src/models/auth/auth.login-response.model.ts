import { ApiProperty } from "@nestjs/swagger";

export class LoginResponseModel{
    @ApiProperty() token : string;
    @ApiProperty() status: number;
}