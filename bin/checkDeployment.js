const config = require("../e2e/helper/config");
const checkSubgraph = require("../e2e/helper/checkSubgraph");

setTimeout(() => {
  checkSubgraph().then((result) => {
    if (!result) {
      console.log("Subgraph not ready");
      return process.exit(1);
    }

    console.log("Subgraph ready");
    return process.exit(0);
  });
}, 1000);
