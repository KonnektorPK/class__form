const HeaderFirstName = document.createTextNode("Имя"); //текст заголовка
const HeaderLastName = document.createTextNode("Фамилия"); //текст заголовка
const HeaderTextField = document.createTextNode("Резюме");
const HeaderButtonAdd = document.createTextNode("Отправить");
const HeaderCheckBox = document.createTextNode("Согласие на обработку персональных данных")

class myForm {
    #form
    constructor(Name) {
        this.form = document.createElement("div"); //создаем тег
        this.form.className = Name; //даем имя класса
        this.form.style.position = "fixed";
        this.form.style.display = "flex";
        this.form.style.top = "20px";
        this.form.style.backgroundColor = "white";
        this.form.style.flexDirection = "column";
        this.form.style.justifyContent = "space-between"
    }
    createInput(Name) {
        let input__name = document.createElement("label"); //создаем элемент label
        input__name.style.display = "flex";
        input__name.style.flexDirection = "column";

        input__name.appendChild(Name); //добавляем текст в блок
        input__name.appendChild(document.createElement("input")); //добавляем в блок input

        this.form.appendChild(input__name);
    }
    createTextArea(Name) {
        let input__TextField = document.createElement("label"); //создаем элемент label
        input__TextField.style.display = "flex";
        input__TextField.style.flexDirection = "column";

        input__TextField.appendChild(Name); //добавляем текст в блок
        let TextFieldClass = document.createElement("textarea");
        TextFieldClass.style.resize = "vertical";
        TextFieldClass.style.height = "200px";
        TextFieldClass.style.padding = "5px"
        input__TextField.appendChild(TextFieldClass); //добавляем в блок input
        this.form.appendChild(input__TextField);
    }
    createButton(Name) {
        let button__add = document.createElement("button");
        button__add.appendChild(Name);
        this.form.appendChild(button__add);
    }
    createCheckBox(Name) {
        let CheckBoxData = document.createElement("label");
        let input__check = document.createElement("input")
        input__check.type = "checkbox";
        input__check.style.margin = "10px";
        CheckBoxData.appendChild(input__check);
        CheckBoxData.appendChild(Name);
        this.form.appendChild(CheckBoxData);
    }
    draw() {
        document.body.appendChild(this.form);
    }
}

document.querySelector('.form1__button').addEventListener('click', () => {
    let form1 = new myForm("form1");
    form1.createInput(HeaderFirstName);
    form1.createInput(HeaderLastName);
    form1.createTextArea(HeaderTextField);
    form1.createCheckBox(HeaderCheckBox);
    form1.createButton(HeaderButtonAdd);
    form1.draw();
});




// button__add.style.flexGrow = "0";
// button__add.style.flexShrink = "0";
// button__add.style.backgroundColor = "#007FFF";
