import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { EncodeUrlDTO } from './dto/encode-url.dto';
import { ShortenerService } from './services/shortener.service';

@Controller('shrtnr')
export class ShortenerController {
    constructor(private readonly shortenerService: ShortenerService) {}
    @Post('encode')
    @HttpCode(200)
    public async encodeUrl(@Body() requestBody: EncodeUrlDTO): Promise<string> {
        return this.shortenerService.encodeUrl(requestBody);
    }
    @Get('decode')
    public async decodeUrl(@Body() requestBody: EncodeUrlDTO): Promise<string> {
        return this.shortenerService.decodeUrl(requestBody);
    }
}
