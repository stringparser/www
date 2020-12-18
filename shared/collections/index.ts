import { RxCollection, RxJsonSchema, RxSchema } from "rxdb";
import { RxCollectionCreatorBase } from "rxdb/dist/types/types";

export type ItemDocType = {
  content: string;
};

export type DatabaseCollections = {
  items: RxCollection<ItemDocType>
};

const items: RxJsonSchema<ItemDocType> = {
  title: 'human schema',
  type: 'object',
  description: 'describes a human being',
  version: 0,
  keyCompression: false,
  properties: {
    content: {
      type: 'string',
    },
  },
  required: ['content']
};

const collections: { [key: string]: RxCollectionCreatorBase } = {
  items: {
    schema: items,
  }
}

export default collections;