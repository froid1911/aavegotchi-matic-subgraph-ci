require("dotenv").config({ path: "./.env.e2e" });
const config = {
  endpoint: process.env.GRAPH_URL,
  endpointCmp: process.env.GRAPH_URL_CMP,
};

module.exports = config;
