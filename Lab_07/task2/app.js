import { NotificationFactory } from "./NotificationFactory.js";

const email = NotificationFactory.create("email", { 
  to: "user@test.com", 
  subject: "Welcome" 
});
email.send("Hello there!");

const sms = NotificationFactory.create("sms", { to: "+77071234567" });
sms.send("Your code is 5555");