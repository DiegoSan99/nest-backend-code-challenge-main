import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Url {
    @Prop({ required: true, index: true })
    originalUrl!: string;

    @Prop({ required: true })
    shortenedUrl!: string;

    @Prop({ required: false, default: Date.now })
    createdAt: Date;
}

export type UrlDocument = Url & Document
export const UrlEntitySchema = SchemaFactory.createForClass(Url);
