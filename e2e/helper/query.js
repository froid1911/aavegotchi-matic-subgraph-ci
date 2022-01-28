const apollo = require("apollo-fetch");
export async function query(endpoint, query) {
  const graph = apollo.createApolloFetch({
    uri: endpoint,
  });
  const result = await graph({ query: query });
  return result;
}

export default query;
