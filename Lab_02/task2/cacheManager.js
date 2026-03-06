/**
 * Паттерн Singleton (Одиночка) для управления кэшем.
 * Класс гарантирует, что во всем приложении будет только один экземпляр кэша.
 */
class CacheManager {
  constructor(maxSize = 100) {
    // Проверяем, существует ли уже экземпляр. Это нужно, чтобы предотвратить 
    // случайное создание дубликатов кэша в разных частях программы.
    if (CacheManager.instance) {
      return CacheManager.instance;
    }

    // Используем Map вместо обычного объекта {}. Map строже сохраняет порядок ключей,
    // что критично для правильного и предсказуемого удаления самых старых записей.
    this.cache = new Map();
    this.maxSize = maxSize;

    // Сохраняем ссылку на этот единственный экземпляр
    CacheManager.instance = this;
  }

  getCached(key) {
    // Добавляем базовую обработку ошибок, чтобы программа не сломалась от пустых запросов
    if (!key) throw new Error("Key is required");

    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    return null;
  }

  setCached(key, value) {
    if (!key) throw new Error("Key is required");

    // Если лимит превышен, удаляем самый старый элемент (первый добавленный),
    // чтобы освободить память для новых данных и не перегружать систему.
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, value);
  }

  clearCache() {
    // Очищаем Map напрямую с помощью встроенного метода, это безопаснее, 
    // чем пересоздавать пустой объект, как было в старом коде.
    this.cache.clear();
  }

  getCacheSize() {
    return this.cache.size;
  }
}

// Экспортируем готовый экземпляр для использования в других файлах (ES6 модули)
export const cacheInstance = new CacheManager();