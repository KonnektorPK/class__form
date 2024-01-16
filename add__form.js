const HeaderFirstName = 'Имя'; //текст заголовка
const HeaderLastName = 'Фамилия' //текст заголовка
const HeaderTextField = 'Резюме';
const HeaderButtonAdd = 'Отправить';
const HeaderCheckBox = 'Согласие на обработку персональных данных';
const arr = [
    'Форма вот такая 1',
    'Вот другая 2 ',
    'А тут третья 3',
    'Форма а это четвертая 4'
]








const length_arr = arr.length;
let arr_form = new Array(length_arr);
for (let i = 0; i < arr.length; i++) { //создание двумерного массива
    arr_form[i] = { name: arr[i], class: 'form' + Number(i + 1) + '__button' };
    // arr_form[i][0] = arr[i];
    // arr_form[i][1] = 'form' + Number(i + 1) + '__button';
}

// console.log(arr_form)
let found__button = (array) => {
    const parent = document.querySelector('.search__elements')
    const buttons = Array.from(parent.querySelectorAll('button'));;
    buttons.forEach(function (button) {
        parent.removeChild(button);
    });
    // let formn = document.createElement('div');
    // formn.style.position = 'fixed';
    // formn.style.display = 'none';
    // formn.className = 'formn'
    for (let i = 0; i < array.length; i++) {
        let button = document.createElement('button');

        button.style.width = '100%'
        button.textContent = array[i].name;
        button.className = array[i].class;
        parent.appendChild(button);
    }
};

found__button(arr_form);

let search = (array, targetWord) => {
    let newArr = [], similarity = 0;
    let str;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.indexOf(targetWord) > 0) {
            newArr.push({ name: array[i].name, class: array[i].class, position: 100 });
            continue;
        }
        for (let j = 0; j < targetWord.length; j++) {
            if (array[i].name.includes(targetWord[j])) {
                similarity++;
            }
        }
        if (similarity > 0) {
            newArr.push({ name: array[i].name, class: array[i].class, position: similarity });
        }
        console.log(similarity)
        similarity = 0;
    }
    console.log(newArr)
    newArr.sort(function (a, b) {
        return b.position - a.position;
    });
    return newArr;
}

class myForm {
    #form
    #modal
    #nameDiv
    constructor(Name) {
        this.#modal = document.createElement('div');
        document.body.appendChild(this.#modal);
        this.#form = document.createElement('div'); //создаем тег

        this.#modal.style.position = 'fixed';
        this.#modal.style.height = '100%'
        this.#modal.style.width = '100%'
        this.#modal.style.backgroundColor = 'white';

        this.#form.style.width = '350px'
        this.#modal.style.top = '0';
        this.#modal.style.left = '0';

        this.#form.style.margin = '0 auto';
        this.#nameDiv = Name;
        this.#modal.className = this.#nameDiv + '__modal';
        this.#form.className = Name; //даем имя класса

        this.#form.style.display = 'flex';
        this.#form.style.backgroundColor = 'white';
        this.#form.style.flexDirection = 'column';
        this.#form.style.justifyContent = 'space-between'
    }
    createInput(Name) {
        let input__name = document.createElement('label'); //создаем элемент label
        input__name.style.display = 'flex';
        input__name.style.flexDirection = 'column';

        input__name.textContent = Name;
        input__name.appendChild(document.createElement('input')); //добавляем в блок input

        this.#form.appendChild(input__name);
    }
    createTextArea(Name) {
        let input__TextField = document.createElement('label'); //создаем элемент label
        input__TextField.style.display = 'flex';
        input__TextField.style.flexDirection = 'column';

        input__TextField.textContent = Name; //добавляем текст в блок

        let TextFieldClass = document.createElement('textarea');
        TextFieldClass.style.resize = 'vertical';
        TextFieldClass.style.height = '200px';
        TextFieldClass.style.padding = '5px'

        input__TextField.appendChild(TextFieldClass); //добавляем в блок input
        this.#form.appendChild(input__TextField);
    }
    createButton(Name) {
        let button__add = document.createElement('button');
        button__add.textContent = Name;
        button__add.style.width = 'min-content';
        button__add.className = this.#nameDiv + '__send'
        this.#form.appendChild(button__add);
    }
    createCheckBox(Name) {
        let CheckBoxData = document.createElement('label');
        CheckBoxData.style.display = 'flex';
        CheckBoxData.style.flexDirection = 'row';
        CheckBoxData.textContent = Name;
        CheckBoxData.style.fontSize = '12px';

        let input__check = document.createElement('input')
        input__check.type = 'checkbox';
        input__check.style.marginLeft = '8px';
        CheckBoxData.appendChild(input__check);
        this.#form.appendChild(CheckBoxData);
    }
    draw() {
        this.#modal.style.display = 'none';
        document.body.appendChild(this.#modal);
        this.#modal.appendChild(this.#form);
    }
    show() {
        this.#modal.style.display = 'block';
    }
    hide() {
        this.#modal.style.display = 'none';
    }
}

let RAND = (max) => Math.floor(Math.random() * max);

check__random = RAND(arr.length);
let form1 = new myForm('form1');
form1.createInput(HeaderFirstName);
form1.createInput(HeaderLastName);
form1.createTextArea(HeaderTextField);
if (check__random === 1) form1.createCheckBox(HeaderCheckBox);
form1.createButton(HeaderButtonAdd);
form1.draw();

let form2 = new myForm('form2');
form2.createInput(HeaderFirstName)
if (check__random === 2) form2.createCheckBox(HeaderCheckBox);
form2.createButton(HeaderButtonAdd);
form2.draw();

let form3 = new myForm('form3');
form3.createTextArea(HeaderFirstName);
if (check__random === 3) form3.createCheckBox(HeaderCheckBox);
form3.createButton(HeaderButtonAdd);
form3.draw();

let form4 = new myForm('form4');
form4.createTextArea(HeaderFirstName);
form4.createInput(HeaderLastName);
form4.createTextArea(HeaderTextField);
if (check__random === 4) form4.createCheckBox(HeaderCheckBox);
form4.createButton(HeaderButtonAdd);
form4.draw();


document.querySelector('.search__button').addEventListener('click', () => {
    let targetWord = document.querySelector('.search__form').value;
    if (targetWord !== '') {
        found__button(search(arr_form, targetWord));
    }
    else {
        found__button(arr_form);
    }
    // console.log(search(arr_form, targetWord));
    // console.log(search(arr_form, targetWord));
});

document.querySelector('.form1__button').addEventListener('click', () => {
    form1.show();
});
document.querySelector('.form1__send').addEventListener('click', () => {
    form1.hide();
});

document.querySelector('.form2__button').addEventListener('click', () => {
    form2.show();
});
document.querySelector('.form2__send').addEventListener('click', () => {
    form2.hide();
});

document.querySelector('.form3__button').addEventListener('click', () => {
    form3.show();
});
document.querySelector('.form3__send').addEventListener('click', () => {
    form3.hide();
});

document.querySelector('.form4__button').addEventListener('click', () => {
    form4.show();
});
document.querySelector('.form4__send').addEventListener('click', () => {
    form4.hide();
});
// button__add.style.flexGrow = '0';
// button__add.style.flexShrink = '0';
// button__add.style.backgroundColor = '#007FFF';
