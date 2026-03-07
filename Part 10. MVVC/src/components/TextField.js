export class TextField {
  constructor(element, modelName, fieldName, viewModel) {
    this.element = element;
    this.modelName = modelName;
    this.fieldName = fieldName;
    this.viewModel = viewModel;

    viewModel.registerComponent(modelName, this);

    const model = viewModel.getModel(modelName);
    if (model) {
      this.update(model.getData());
    }

    this.element.addEventListener('input', e => {
      const model = viewModel.getModel(modelName);
      if (model) {
        model.set(fieldName, e.target.value);
      }
    });
  }

  update(data) {
    if (data[this.fieldName] !== undefined) {
      this.element.value = data[this.fieldName];
    }
  }
}
