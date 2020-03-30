// import ReactionError from "@reactioncommerce/reaction-error";

// /**
//  * @name featuredProductsByShop
//  * @method
//  * @summary Query the Catalog collection for products that have the `featured-product` tag
//  * @param {Object} context - an object containing the per-request state
//  * @param {String} params.shopId - Shop ID for the shop
//  * @return {Promise<Object>|undefined} - An array of Catalog objects
//  */
// export default async function featuredProductsByShop(context, { shopId } = {}) {
//   const { collections } = context;
//   const { Catalog, Tags } = collections;

//   if (!shopId) {
//     throw new ReactionError("invalid-param", "You must provide shopId arguments");
//   }

//   const featuredTag = await Tags.findOne({ name: "featured-product"});

//   // If a feature-product doesn't exist, let's create one
//   let newTag;
//   if (!featuredTag) {
//     newTag = await Tags.insertOne({
//       name: "featured-product"
//     });
//   }

//   const featuredItems = Catalog.find({ "product.tagIds": { $in: [featuredTag._id] }, shopId: shopId });
//   return featuredItems;
// }


import getPaginatedResponse from "@reactioncommerce/api-utils/graphql/getPaginatedResponse.js";
import { decodeShopOpaqueId } from "../../xforms/id.js";


export default async function featuredProductsByShop(_, args, context) {
  const { shopId: opaqueShopId, ...connectionArgs } = args;

  const shopId = decodeShopOpaqueId(opaqueShopId);

  const results = await context.queries.featuredProductsByShop(context, shopId);
  return getPaginatedResponse(results, connectionArgs);
}