import getPaginatedResponse from "@reactioncommerce/api-utils/graphql/getPaginatedResponse.js";
import { decodeShopOpaqueId } from "../../xforms/id.js";


export default async function featuredProductsByShop(_, args, context) {
  const { shopId: opaqueShopId, ...connectionArgs } = args;

  const shopId = decodeShopOpaqueId(opaqueShopId);

  const results = await context.queries.featuredProductsByShop(context, shopId);
  return getPaginatedResponse(results, connectionArgs);
}