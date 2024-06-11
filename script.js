/*
1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.

3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

//1
const from = document.getElementById("from");
const span = document.querySelector("#from + span");
from.addEventListener("input", () => span.textContent = from.value);

//2
const messageBtn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");

message.style.visibility = "hidden";
messageBtn.addEventListener("click", () => {
    message.classList.add("animate_animated", "animate_fadeInLeftBig");
    message.style.visibility = "visible";
})

//3
const form = document.querySelector("form");
const inputFormControl = document.querySelector("input.form-control");
const selectFormControl = document.querySelector("select.form-control");

document.head.insertAdjacentHTML("beforeend", `
<style>
    .error {
        border: 1px solid red;
    }
</style>
`);

form.addEventListener("input", () => {
    if (inputFormControl.value !== "") inputFormControl.classList.remove("error");
    if (selectFormControl.value !== "") selectFormControl.classList.remove("error");
});

form.onclick = (e) => {
    if (e.target.tagName.toLowerCase() == "button") {
        if (inputFormControl.value == "" || selectFormControl.value == "") e.preventDefault();
        if (inputFormControl.value == "") inputFormControl.classList.add("error");
        if (selectFormControl.value == "") selectFormControl.classList.add("error");
    }
}

