import * as e from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cors from "cors";
import * as helmet from "helmet";
import * as passport from "passport";
import "reflect-metadata";
import config from "./config";
import * as line from "@line/bot-sdk";

import { WebhookModule } from "./modules";

// import routes = require('../api/routes/v1');
// import { logs } from './vars';
// import strategies = require('./passport');
// import error = require('../api/middlewares/error');

const app = e();

// // request logging. dev: console | production: file
app.use(morgan(config.logs));

// // parse body params and attache them to req.body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // gzip compression
// app.use(compress());

// // lets you use HTTP verbs such as PUT or DELETE
// // in places where the client doesn't support it
// app.use(methodOverride());

// // secure apps by setting various HTTP headers
// app.use(helmet());

// // enable CORS - Cross Origin Resource Sharing
// app.use(cors());

// // enable authentication
// app.use(passport.initialize());
// passport.use('jwt', strategies.jwt);
// passport.use('facebook', strategies.facebook);
// passport.use('google', strategies.google);

// // mount api v1 routes
// app.use('/v1', routes);

// // if error is not an instanceOf APIError, convert it.
// app.use(error.converter);

// // catch 404 and forward to error handler
// app.use(error.notFound);

// // error handler, send stacktrace only during development
// app.use(error.handler);

app.get("/", (req, res) => res.json({ status: "OK" }));
app.use(
  "/webhook",
  line.middleware({ ...config.line }),
  WebhookModule
);

export default app;