import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = form.email;
const textArea = form.message;
console.log(input, textArea);

const userDataArr = JSON.parse(
  localStorage.getItem('feedback-form-state')) ?? [];

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert("Шановний(а), будь ласка, обов'язково заповніть всі поля!");
  } else {
    const userData = {
      [email.name]: event.currentTarget.elements.email.value.trim(),
      [message.name]: event.currentTarget.elements.message.value.trim(),
    };
    userDataArr.push(userData);
    localStorage.setItem('feedback-form-state', JSON.stringify(userDataArr));
    console.log(userData);
  }
//   if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
//   }
 
 const userMail = JSON.parse(localStorage.getItem('feedback-form-state'));
 form.firstChild.value = userMail.pop().email;
}

 