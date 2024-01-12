import { Command, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { createSwaggerDocument, getApp } from '@app/bootstrap';
import nodePath from 'path';
import * as process from 'process';
import fs from 'fs-extra';

@Injectable()
export class OpenApiCommand {
  constructor() {}

  @Command({
    command: 'generate:open-api-file',
    describe: 'Generate the open api schema of the api',
  })
  async create(
    @Option({
      name: 'path',
      describe: 'Path where the file will be saved',
      type: 'string',
      demandOption: true,
    })
    path: string,
  ) {
    const app = await getApp();

    const openApiObj = createSwaggerDocument(app);
    const json = JSON.stringify(openApiObj, null, 4);

    const openApiPath = nodePath.join(process.cwd(), path);

    fs.outputFileSync(openApiPath, json);

    console.info(`File created at ${openApiPath}`);
  }
}
