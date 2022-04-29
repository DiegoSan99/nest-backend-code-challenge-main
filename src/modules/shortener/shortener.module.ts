import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Url, UrlEntitySchema } from './entities/url.entity';

import { ShortenerService } from './services/shortener.service';
import { ShortenerController } from './shortener.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlEntitySchema }])],
    controllers: [ShortenerController],
    providers: [ShortenerService],
})
export class ShortenerModule {}