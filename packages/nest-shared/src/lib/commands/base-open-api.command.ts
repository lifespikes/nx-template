import { CommandRunner, Option } from 'nest-commander';
import { createSwaggerDocument } from '../bootstrap';
import * as nodePath from 'node:path';
import * as fs from 'fs-extra';
import { INestApplication } from '@nestjs/common';

export type OpenApiCommandOptions = {
  path: string;
};

export abstract class BaseOpenApiCommand extends CommandRunner {
  abstract getApp(): Promise<INestApplication>;

  async run(passedParam: string[], options: OpenApiCommandOptions) {
    const app = await this.getApp();
    const document = createSwaggerDocument(app as any);
    const json = JSON.stringify(document, null, 4);
    const openApiPath = nodePath.join(process.cwd(), options.path);

    fs.outputFileSync(openApiPath, json);

    console.info(`File created at ${openApiPath}`);
  }

  @Option({
    flags: '-p, --path <path>',
    description: 'Path where the file will be saved',
  })
  setPath(path: string) {
    return path;
  }
}
