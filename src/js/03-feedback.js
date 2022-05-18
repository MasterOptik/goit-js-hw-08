
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
};
let formData = {};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", onTextareaInput);

function onTextareaInput(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        const createObject = JSON.parse(savedMessage)
        formData = JSON.parse(savedMessage)
        refs.email.value = createObject.email || '';
        refs.message.value = createObject.message || '';
    }
}
populateTextarea();

function onFormSubmit(e) {
    if (formData.email && formData.message) {
        // e.target.reset();
        localStorage.removeItem(STORAGE_KEY);
        formData = {};
    } else {
        e.preventDefault();
    }
}