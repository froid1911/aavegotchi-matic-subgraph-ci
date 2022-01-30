const apollo = require("apollo-fetch");
const ethers = require("ethers");
const config = require("./config");

async function checkSubgraph() {
  console.log(config.rpcUrl);
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const graph = apollo.createApolloFetch({ uri: config.endpoint });

  const query = `{_meta {block { hash number } deployment hasIndexingErrors}}`;

  const { number } = await provider.getBlock("latest");
  const { data } = await graph({ query });

  console.log(`Current block number #${number}`);
  console.log(`Synced up to block number #${data._meta.block.number}`);

  return number <= data._meta.block.number + 100;
}

module.exports = checkSubgraph;
