import database from './database';
import app from './app';
import auth from './auth';

export default () => {
  return [app, database, auth];
};
