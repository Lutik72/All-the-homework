//1.1
const days = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье'
};
console.log(days[2]);

//1.2
let user = {
  name: 'Софья',
  surname: 'Грибова',
  age: 18
};
let string = user.surname + '-' + user.name + '-' + user.age;
console.log(string);

//1.3
let patronymic = prompt('Введите ваше отчество:');
user.patronymic = patronymic;

//1.4
delete user.surname;

//2.1
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

let weekDays = {};
for(let i = 0; i < arr1.length; i++) {
  weekDays[arr1[i]] = arr2[i];
}
console.log(weekDays);

//2.2
const obj = { x: 1, y: 2, z: 3 };

for (let key in obj) {
obj[key] *= obj[key];
}
console.log(obj);

//3
const Obj = {
  key1: { key1: 1, key2: 2, key3: 3 },
  key2: { key1: 4, key2: 5, key3: 6 },
  key3: { key1: 7, key2: 8, key3: 9 },
};
let sum = 0;
for (let outerKey in Obj) {
  const innerObj = Obj[outerKey];
  
  for (let innerKey in innerObj) {
    sum += innerObj[innerKey];
  }
}
console.log(sum);

//4
const riddles = {
  question: 'Мышь считает дырки в сыре: три плюс два равно...',
  answer: '5',
  
// Метод, задающий вопрос пользователю и проверяющий ответ
    askQuestion() {
    let userAnswer = prompt(this.question);// Запрашиваем ответ пользователя
    
    if (userAnswer.toLowerCase().trim() === this.answer.toLowerCase()) { // Метод toLowerCase() — это стандартный метод строковых объектов в JavaScript, который возвращает копию строки, переведённую в нижний регистр (все буквы становятся строчными).
      console.log("Верно!");
    } else {
      console.log("Вы проиграли");
    }
  }
};
riddles.askQuestion();
