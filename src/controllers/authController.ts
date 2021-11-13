import {Request,Response,NextFunction} from 'express';
import config from 'config';

import jwt from 'jsonwebtoken'
const key = config.get("privateKey") as string;
export const loginController = (req:Request,res:Response,next:NextFunction) => {
    const {username,password} = req.body;

    if(!username || !password){
        res.status(400).send({status: 400, msg: "Bad Request: Provide all fields"});
        return;
    }

    // Check username and Password from database
    // If exists then send token

    try {
        const timeStamp = Date.now().toString();
        const token = jwt.sign({username,timeStamp}, key);
        res.status(200).send({status: 200, msg: "Login Success", token})
    } catch (error) {
        console.log(error);
        // Handle Error using Utils and Middlewares
    }
}

export const healthCheck = (req :Request,res: Response,next: NextFunction) => {
    res.status(200).send({message: "Up and Running"})
}