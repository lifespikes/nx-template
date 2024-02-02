import { Command } from 'nest-commander';
import { getApp as getAppBoostrap } from '@spikey/nest-shared/bootstrap';
import { AppModule } from '../app/app.module';
import { BaseRouteListCommand } from '@spikey/nest-shared/commands/base-route-list.command';

@Command({
  name: 'route:list',
  description: 'Get the routes registered in the application',
})
export class RouteListCommand extends BaseRouteListCommand {
  getApp() {
    return getAppBoostrap(AppModule);
  }
}
