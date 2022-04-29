import { Injectable, NotFoundException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { EncodeUrlDTO } from '../dto/encode-url.dto';
import { Url, UrlDocument } from '../entities/url.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ShortenerService {
    public constructor(@InjectModel(Url.name) private readonly urlModel: Model<UrlDocument>) {}
    // TODO: IMPLEMENTS API ENDPOINT TO RETURN LONG URLS FROM A SHORT URL
    public async encodeUrl(payload: EncodeUrlDTO): Promise<string> {
        console.log(payload)
        const randomId = nanoid(4);
        const shortenedUrl = payload.url.substr(0, 9);
        const shortenUrl = shortenedUrl + '/' + randomId;
        const urlToBeInserted: Url = {
            originalUrl: payload.url,
            shortenedUrl: shortenUrl,
            createdAt: new Date(),
        };
        await this.urlModel.create(urlToBeInserted);
        return shortenUrl;
    }
    // TODO: IMPLEMENTS API ENDPOINT TO SHORT LONG URLS AND SAVE IT TO THE DB
    public async decodeUrl(payload: EncodeUrlDTO): Promise<string> {
        const urlToDecode = payload.url;
        const decodedUrl = await this.urlModel.findOne({ shortenedUrl: urlToDecode });
        if (!decodedUrl) {
            throw new NotFoundException()
        }
        return decodedUrl?.originalUrl;
    }
}
