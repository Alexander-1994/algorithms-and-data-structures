export class ViewModel {
  constructor() {
    this.models = new Map(); // Храним модели по именам
    this.components = new Map(); // Компоненты, привязанные к моделям
  }

  // Добавляем модель в ViewModel
  addModel(name, model) {
    this.models.set(name, model);

    // Подписываемся на изменения модели
    model.subscribe(data => {
      // Уведомляем все компоненты, использующие эту модель
      if (this.components.has(name)) {
        for (const component of this.components.get(name)) {
          component.update(data);
        }
      }
    });
  }

  // Получаем модель по имени
  getModel(name) {
    return this.models.get(name);
  }

  // Регистрируем компонент для модели
  registerComponent(modelName, component) {
    if (!this.components.has(modelName)) {
      this.components.set(modelName, new Set());
    }
    this.components.get(modelName).add(component);
  }

  // Отвязываем компонент от модели
  unregisterComponent(modelName, component) {
    if (this.components.has(modelName)) {
      this.components.get(modelName).delete(component);
    }
  }
}
