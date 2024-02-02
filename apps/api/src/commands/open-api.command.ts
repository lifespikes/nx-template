import { Command } from 'nest-commander';
import { getApp as getAppBoostrap } from '@spikey/nest-shared/bootstrap';
import { AppModule } from '../app/app.module';
import { BaseOpenApiCommand } from '@spikey/nest-shared/commands/base-open-api.command';

@Command({
  name: 'generate:open-api-file',
  description: 'Generate the open api schema of the api',
})
export class OpenApiCommand extends BaseOpenApiCommand {
  getApp() {
    return getAppBoostrap(AppModule);
  }
}
