export class Model {
  constructor(data = {}) {
    this._data = { ...data };
    this._observers = new Set();
  }

  // Получаем значение поля
  get(key) {
    return this._data[key];
  }

  // Устанавливаем значение поля (с уведомлением наблюдателей)
  set(key, value) {
    this._data[key] = value;
    this.notifyObservers();
  }

  // Обновляем несколько полей сразу
  update(updates) {
    Object.assign(this._data, updates);
    this.notifyObservers();
  }

  // Подписываемся на изменения модели
  subscribe(callback) {
    this._observers.add(callback);
    // Возвращаем функцию отписки
    return () => this._observers.delete(callback);
  }

  // Уведомляем всех наблюдателей
  notifyObservers() {
    for (const observer of this._observers) {
      observer(this._data);
    }
  }

  // Клонируем данные модели
  getData() {
    return { ...this._data };
  }
}
