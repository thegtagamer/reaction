import getConnectionTypeResolvers from "@reactioncommerce/api-utils/graphql/getConnectionTypeResolvers.js";
import featuredProductsByShop from "./featuredProductsByShop/index.js";
import Query from "./Query/index.js";

export default {
    ...getConnectionTypeResolvers("featuredProductsByShop"),
    featuredProductsByShop,
    Query
  };
