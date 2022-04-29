import { IsDefined, IsString } from "class-validator";

export class EncodeUrlDTO {
    @IsDefined()
    @IsString()
    url: string; 
}