import { ViewModel, Model } from './core';
import { TextField, Button } from './components';

// Инициализация ViewModel
const vm = new ViewModel();

// Создаём модель
const userModel = new Model({
  name: 'Иван',
  email: 'ivan@example.com',
});

// Добавляем модель в ViewModel
vm.addModel('user', userModel);

// Инициализируем компоненты
new TextField(document.getElementById('field1'), 'user', 'name', vm);
new TextField(document.getElementById('field2'), 'user', 'name', vm);
new TextField(document.getElementById('field3'), 'user', 'name', vm);

new Button(
  document.getElementById('btnClear'),
  vm => {
    vm.getModel('user').set('name', '');
  },
  vm
);

new Button(
  document.getElementById('btnUpdate'),
  vm => {
    vm.getModel('user').set('name', 'Hello World!');
  },
  vm
);
