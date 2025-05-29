//29.05
//1
const block = document.querySelector('.block');
const newDiv = document.createElement('div');

newDiv.classList.add('item');
newDiv.setAttribute('class');
newDiv.textContent = 'Элемент внутри';

newDiv.style.color = 'blue';
newDiv.style.border ='2px solid black';
newDiv.style.backgroundColor = '#f8f8f8'
newDiv.style.padding = '16px'

block.appendChild(newDiv);

//2
const paragraph = document.querySelector('.text');
console.log(paragraph);

const title = document.querySelector('h2');
console.log(title);

const contentParent = paragraph.parentElement;
console.log(contentParent);

const image = document.querySelector('img');
console.log(image);

const parentElem = anyInnerElement.closest('.elem');
console.log(parentElem);

// 3
const h2Element = document.querySelector('.subtitle');
let parent = h2Element.parentNode;

// Пока есть родительские узлы, выводим их в консоль
while (parent) {
    console.log(parent);
    parent = parent.parentNode;
}

// 4
const content = document.querySelector(".content");

const button = document.createElement("button");
button.textContent = "Отправить";

button.addEventListener("click", function() {
    // Меняем текст при клике
    button.textContent = "Текст отправлен";
});

content.appendChild(button);
