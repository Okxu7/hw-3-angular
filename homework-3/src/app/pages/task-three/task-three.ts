
import { Component } from '@angular/core';

import {
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  PercentPipe,
  JsonPipe,
  SlicePipe,
  KeyValuePipe,
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe
} from '@angular/common';

@Component({
  selector: 'app-task-three',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    JsonPipe,
    SlicePipe,
    KeyValuePipe,
    AsyncPipe,
    I18nPluralPipe,
    I18nSelectPipe
  ],
  templateUrl: './task-three.html',
  styleUrl: './task-three.css'
})

export class TaskThree {

  // Дані для текстових пайпів
  textLow = 'hello angular';
  textUpper = 'HELLO ANGULAR';
  textTitle = 'learning angular pipes';

  // Дата
  today = new Date(2026, 10, 1);

  // Числа та валюта
  price = 1250.567;
  amount = 12345.678;
  progress = 0.75;

  // Об'єкт для JSON
  user = {
    name: 'Oksana',
    age: 55,
    profession: 'Frontend Developer'
  };

  // Масив для SlicePipe
  fruits = ['Apple', 'Banana', 'Orange', 'Kiwi'];

  // Об'єкт для KeyValuePipe
  userInfo = {
    name: 'Oksana',
    city: 'Kyiv',
    skill: 'Angular'
  };

  // Promise для AsyncPipe
  messagePromise = Promise.resolve(
    'Дані успішно завантажені!'
  );

  // I18nPluralPipe
  taskCount = 3;

  taskMapping = {
    '=0': 'Немає завдань',
    '=1': 'Одне завдання',
    other: '# завдань'
  };

  // I18nSelectPipe
  gender = 'female';

  genderMapping = {
    male: 'Він виконує завдання',
    female: 'Вона виконує завдання',
    other: 'Вони виконують завдання'
  };

}
