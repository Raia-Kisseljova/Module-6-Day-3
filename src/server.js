import cors from "cors";
import express from "express";

import db from "./db/index.js";
import productsRouter from "./services/products.js";
import categoryRouter from "./services/category.js";
import { corsConfig } from "./lib/server-config.js";
import {
  notFoundErrorHandler,
  badRequestErrorHandler,
  serverErrorHandler,
  forbiddenRequest,
} from "./lib/error-Handlers.js";

const server = express();

server.use(express.json());
server.use(cors(corsConfig));
server.use("/products", productsRouter);
server.use("/categories", categoryRouter);

db.sync()
  .then(() => {
    server.listen(process.env.PORT, () =>
      console.log("🦄 Server is running on port ", process.env.PORT)
    );

    server.on("error", (error) => console.log("🐼 Error ", error));
  })
  .catch((e) => console.log(e));

// Errors middlewares
server.use(notFoundErrorHandler);
server.use(forbiddenRequest);
server.use(badRequestErrorHandler);
server.use(serverErrorHandler);
