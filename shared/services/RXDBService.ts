import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { RxDBValidatePlugin } from 'rxdb/plugins/validate';
import { RxDBKeyCompressionPlugin } from 'rxdb/plugins/key-compression';
import { RxDBValidateZSchemaPlugin } from 'rxdb/plugins/validate-z-schema'
import { addRxPlugin, createRxDatabase, RxDocument } from 'rxdb';

import schemas, { DatabaseCollections, ItemDocType } from '../collections';

// plugins
addRxPlugin(RxDBUpdatePlugin);
addRxPlugin(RxDBValidatePlugin);
addRxPlugin(RxDBKeyCompressionPlugin);
addRxPlugin(RxDBValidateZSchemaPlugin);

// adapter
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

  async insertItem(payload: Omit<ItemDocType, '_id'>) {
    const db =  await this.db;

    return db.items.insert(payload);
  }

  async findItems(): Promise<RxDocument<ItemDocType>[]> {
    const db = await this.db;
    const query = db.items.find();

    return query.exec();
  }

  async updateItem(item: RxDocument<ItemDocType>, payload: ItemDocType) {
    return item.update({
      _id: item.get('_id'),
      _rev: item.get('_rev'),
      ...payload
    });
  }
}

export default new RXDBService();