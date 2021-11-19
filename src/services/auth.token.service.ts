import { sign } from "jsonwebtoken";
import { LoginResponseModel } from "src/models/auth.login-response.model";

export class TokenService {
    private readonly jwtKey: string;
    private expiresInDefault: string | number;
    private readonly usersExpired: number [] = [];

    // constructor(){
    //     super();
    // }

    async createAccessToken(
        payload: Object,
    ): Promise<LoginResponseModel>{
        const signedPayload = sign(payload,"Replace with JWT Key");

        const token: LoginResponseModel = {
            token: signedPayload,
            status: 200
        }
        return token;
    }
    

    

}