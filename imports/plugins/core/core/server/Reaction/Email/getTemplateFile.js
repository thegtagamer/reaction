import Logger from "@reactioncommerce/logger";
import { Meteor } from "meteor/meteor";

/**
 * @method getTemplateFile
 * @memberof Email
 * @param  {String} file name of the template on file system
 * @return {String} returns source
 */
export default function getTemplateFile(file) {
  if (typeof file !== "string") {
    const msg = "Reaction.Email.getTemplateFile() requires a template name";
    Logger.error(msg);
    throw new Meteor.Error("invalid-parameter", msg);
  }

  try {
    return Assets.getText(`email/templates/${file}.html`);
  } catch (error) {
    Logger.warn(`Template not found: ${file}. Falling back to coreDefault.html`);
    return Assets.getText("email/templates/coreDefault.html");
  }
}
