import database from './database';
import app from '@app/config/app';
import auth from '@app/config/auth';

export default () => {
  return [app, database, auth];
};
