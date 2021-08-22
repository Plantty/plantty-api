import "reflect-metadata";
import express from "express";
import cors from 'cors';
import "./database/connect";

import routes from "./routes/router";

const server = express();

server.use(cors());
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(3001, () => {
  console.log();
  console.log("Plantty ☘️  - api-rest has been initialized");
  console.log("Running on localhost:3000");
  console.log();
});
