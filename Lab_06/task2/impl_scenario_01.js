// Реализация паттерна Singleton для AppConfig
class AppConfig {
  constructor() {
    // Если экземпляр уже существует, возвращаем его
    if (AppConfig._instance) {
      return AppConfig._instance;
    }

    // Инициализация настроек
    this.settings = {
      apiBaseUrl: 'https://api.example.com/v1',
      locale: 'kk-KZ',
      featureFlags: { darkMode: true, betaCheckout: false }
    };

    // Сохраняем ссылку на единственный экземпляр
    AppConfig._instance = this;
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }

  // Статический метод для получения доступа к одиночке
  static getInstance() {
    if (!AppConfig._instance) {
      new AppConfig();
    }
    return AppConfig._instance;
  }
}

// Демонстрация
const cfg1 = AppConfig.getInstance();
const cfg2 = AppConfig.getInstance();

console.log('[SCENARIO_01] Обе ссылки ведут на один объект:', cfg1 === cfg2);
cfg1.set('locale', 'en-US');
console.log('[SCENARIO_02] Изменено в cfg1, доступно в cfg2:', cfg2.get('locale'));