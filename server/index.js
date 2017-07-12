import fs from 'fs';
import path from 'path';
import http from 'http';
import express from 'express';
import graphqlHttp from 'express-graphql';
import { printSchema } from 'graphql';

import { schema } from './schema';

const schemaPath = path.resolve(__dirname, '../schema.graphql');
fs.writeFileSync(schemaPath, printSchema(schema));
console.log('Wrote Schema: ' + schemaPath);

const port = 3020;

const app = express();

app.use('/', graphqlHttp({
  schema,
  pretty: true,
  graphiql: true,
  context: {
    baseUrl: 'http://localhost:3010'
  }
}));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`widgets graphql server stated on port ${port}`);
});
