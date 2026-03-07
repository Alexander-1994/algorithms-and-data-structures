export class Button {
  constructor(element, onClick, viewModel) {
    this.element = element;
    this.onClick = onClick;
    this.viewModel = viewModel;

    this.element.addEventListener('click', () => {
      this.onClick(viewModel);
    });
  }
}
