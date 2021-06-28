import { createConnection } from "typeorm";

createConnection().then(() => console.log('DATABASE > Successfully connected with database.'));