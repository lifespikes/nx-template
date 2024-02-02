import { ConfigModule } from '@nestjs/config';
import registerConfig from '@spikey/nest-shared/config';

const ENV = process.env.NODE_ENV;
export const registerConfigModule = () => {
  return ConfigModule.forRoot({
    envFilePath: ENV === 'development' ? '../../.env' : `../../.env.${ENV}`,
    isGlobal: true,
    load: [...registerConfig()]
  });
};
