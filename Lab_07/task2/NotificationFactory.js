import { EmailNotification } from "./notifications/EmailNotification.js";
import { SMSNotification } from "./notifications/SMSNotification.js";

export class NotificationFactory {
  static create(type, options) {
    switch (type) {
      case "email":
        return new EmailNotification(options.to, options.subject);
      case "sms":
        return new SMSNotification(options.to);
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }
}