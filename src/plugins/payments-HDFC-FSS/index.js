/* eslint camelcase: 0 */
import i18n from "./i18n/index.js";
import schemas from "./schemas/index.js";
import { HDFC_PACKAGE_NAME } from "./util/constants.js";
import stripeCapturePayment from "./util/stripeCapturePayment.js";
import stripeCreateAuthorizedPayment from "./util/stripeCreateAuthorizedPayment.js";
import stripeCreateRefund from "./util/stripeCreateRefund.js";
import stripeListRefunds from "./util/stripeListRefunds.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "HDFC FSS",
    name: HDFC_PACKAGE_NAME,
    version: app.context.appVersion,
    i18n,
    graphQL: {
      schemas
    },
    paymentMethods: [{
      name: "HDFC_FSS_card",
      canRefund: true,
      displayName: "HDFC FSS Card",
      functions: {
        capturePayment: stripeCapturePayment,
        createAuthorizedPayment: stripeCreateAuthorizedPayment,
        createRefund: stripeCreateRefund,
        listRefunds: stripeListRefunds
      }
    }]
  });
}
