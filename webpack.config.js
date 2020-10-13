/**
 * @typedef { import('webpack/declarations/WebpackOptions').WebpackOptions } WebpackOptions
 */
const TsPathPlugin = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
var _ = require("lodash")

var fs = require("fs");
var nodeModules = {};
fs.readdirSync("node_modules").filter((x) => {
  return [".bin"].indexOf(x) === -1;
}).forEach(function (mod) {
  nodeModules[mod] = "commonjs " + mod;
});

var externalDependencies = {
  "sqlite3": "commonjs sqlite3",
  "mariasql": "commonjs mariasql",
  "mssql": "commonjs mssql",
  "mysql2": "commonjs mysql2",
  "oracle": "commonjs oracle",
  "strong-oracle": "commonjs strong-oracle",
  "oracledb": "commonjs oracledb",
  "pg": "commonjs pg",
  "pg-query-stream": "commonjs pg-query-stream",
  "should": "commonjs should",
  "kafka-node": "commonjs kafka-node",
  "swagger2-koa": "commonjs swagger2-koa",
  "routing-controllers-openapi": "commonjs routing-controllers-openapi",
  "api-spec-converter": "commonjs api-spec-converter",
  "typescript": "commonjs typescript",
  "knex": "commonjs knex",
  "mysql": "commonjs mysql",
  "jaeger-client": "commonjs jaeger-client",
  "@risingstack/opentracing-auto": "commonjs @risingstack/opentracing-auto"
}

/**
 * @type { WebpackOptions }
 */
module.exports = {
  devtool: "eval",
  entry: "./src/server.ts",
  output: {
    path: __dirname + "/dist",
    filename: "server.js",
  },
  resolve: {
    // Add ".ts" and ".tsx" as a resolvable extension.
    extensions: [".webpack.js", ".ts", ".js", ".json"],
    plugins: [
      new TsPathPlugin(),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: "ts-loader",
      },
    ],
  },
  target: "node",
  externals: externalDependencies,
  plugins: [
    new TerserPlugin()
  ]
};