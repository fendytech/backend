import { Injectable, InternalServerErrorException } from "@nestjs/common";
import * as AWS from 'aws-sdk';
@Injectable()
export class S3Service{
    AWS_S3_BUCKET = "arn:aws:s3:ap-south-1:959342003489:accesspoint/fendydev-ap"
    s3 = new AWS.S3({
        accessKeyId:"AKIA56XJ5IUQ2TTFZLNG",
        secretAccessKey:"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"
    });

    async uploadFile(file){
        const {originalname} = file;
        await this.s3_upload(file.buffer, this.AWS_S3_BUCKET,originalname,file.mimetype)
    }

    async s3_upload(file,bucket,name,mimeType){
        const params = {
            Bucket: bucket,
            Key: String(name),
            Body: file,
            ACL: 'public-read',
            ContentType: mimeType,
            ContentDispoition: 'inline',
            CreateBucketConfiguration:{
                LocationConstraint:'ap-south-1'
            }
        };

        try {
            let s3Response = await this.s3.upload(params).promise();
            console.log(s3Response);
            return s3Response;
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException;
        }
    }
}