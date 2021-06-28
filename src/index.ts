import "reflect-metadata";
import express from "express";

import "./database/connect";

import routes from "./routes/router";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(3000, () => {
  console.log("Server has been running on localhost:3000");
});
