import { RxDBKeyCompressionPlugin } from 'rxdb/plugins/key-compression';
import { addRxPlugin, createRxDatabase, RxDocument } from 'rxdb';

import schemas, { DatabaseCollections, ItemDocType } from '../collections';

addRxPlugin(RxDBKeyCompressionPlugin);
addRxPlugin(require('pouchdb-adapter-idb'));

const rxdb = createRxDatabase<DatabaseCollections>({
    name: 'test_rxdb',
    adapter: 'idb',
  })
  .then(db => Promise.all([db, db.addCollections(schemas)]))
  .then(([db]) => {
    console.info('database ready for use');
    return db;
  })
;

class RXDBService {
  private db = rxdb;

  async insertItem(doc: ItemDocType) {
    const db =  await this.db;

    return db.items.insert(doc);
  }

  async findItems(): Promise<RxDocument<ItemDocType>[]> {
    const db = await this.db;
    const query = db.items.find();

    return query.exec();
  }
}

export default new RXDBService();