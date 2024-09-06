// diContainer.js
class DIContainer {
  constructor() {
    this.dependencies = new Map(); // Хранит зависимости в виде ключ-значение
  }

  // Регистрация зависимости
  register(key, dependency) {
    this.dependencies.set(key, dependency);
  }

  // Получение зависимости по ключу
  get(key) {
    if (!this.dependencies.has(key)) {
      throw new Error(`Dependency ${key} not found`); // Выбрасываем ошибку, если зависимости нет
    }
    return this.dependencies.get(key); // Возвращаем зарегистрированную зависимость
  }
}

const container = new DIContainer(); // Создаем экземпляр контейнера
export default container;
