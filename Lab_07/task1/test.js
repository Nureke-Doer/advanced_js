import ConfigManager from "./singleton.js";

const instance1 = ConfigManager.getInstance();
const instance2 = new ConfigManager();

console.log("Это один и тот же объект?", instance1 === instance2);

instance1.set("theme", "dark");
console.log("Тема из второго экземпляра:", instance2.get("theme"));