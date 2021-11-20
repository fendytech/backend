import { sign,verify } from "jsonwebtoken";
import { LoginResponseModel } from "src/models/auth.login-response.model";

export class TokenService {
    private readonly jwtKey: string; // replace with Config file input
    private expiresInDefault: string | number;
    private readonly usersExpired: number [] = [];

    constructor(){
        this.jwtKey = "Replace with JWT Key";
    }

    async createAccessToken(
        payload: Object,
    ): Promise<LoginResponseModel>{
        const signedPayload = sign(payload,this.jwtKey);

        const token: LoginResponseModel = {
            token: signedPayload,
            status: 200
        }
        return token;
    }

    async validateToken(token: string): Promise<any>{
        return verify(token,this.jwtKey);
    }
    

    

}