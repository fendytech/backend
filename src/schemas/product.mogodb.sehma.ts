import { Prop, Schema } from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type productDocumet = Product & Document

@Schema()
export class Product{
    @Prop({type: String, required: true})
    productID: string;

    @Prop({type: Array, default: []})
    imageurls: [];
}