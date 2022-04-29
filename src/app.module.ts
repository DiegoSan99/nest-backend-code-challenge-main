import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShortenerModule } from './modules/shortener/shortener.module';

@Module({
    imports: [
        ShortenerModule,
        MongooseModule.forRoot("mongodb://root:s3cr3t@localhost:27017/"),
    ],
})
export class AppModule {}
