import { registerAs } from '@nestjs/config';

export default registerAs('dbConfig', () => ({
    connectionUrl: process.env.DB_CONNECTION_URL,
}));
