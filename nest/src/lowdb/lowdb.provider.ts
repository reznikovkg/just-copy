import Low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';
import { DB_FILENAME, LOWDB, MODALS_DB_NAME } from '../constants';

const adapter = new FileSync(DB_FILENAME);
const low = Low(adapter);
low.defaults({ [MODALS_DB_NAME]: [] }).write();

export const lowdbProvider = {
  provide: LOWDB,
  useValue: low,
};
