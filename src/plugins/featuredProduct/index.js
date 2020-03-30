
import queries from "./queries/index.js";
import resolvers from "./resolvers/index.js";
import schemas from "./schemas/index.js";

export default async function register(app) {
  await app.registerPlugin({
    label: "FeaturedProduct",
    name: "featured-products",
    version: app.context.appVersion,
    graphQL: {
      resolvers,
      schemas
    },
    queries
  });
}