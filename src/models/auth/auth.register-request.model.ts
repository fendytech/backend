import { ApiProperty } from "@nestjs/swagger";

export class RegisterRequestBodyModel{
    @ApiProperty() username : string;
    @ApiProperty() password: string;
    @ApiProperty() email: string;
    @ApiProperty() phone: string;
}