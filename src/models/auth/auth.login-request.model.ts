import { ApiProperty } from "@nestjs/swagger";

export class LoginRequestBodyModel{
    @ApiProperty() username : string;
    @ApiProperty() password: string;
}