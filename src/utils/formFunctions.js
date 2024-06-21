const useErrorTextMasseges = true;

const nameRegex = /[^A-zА-яЁё0-9+ ()-]/;
const phoneRegex = /^\+49\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;
const linkRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;

const errors = {
  empty: 'Field cannot be empty',
  name: 'Numbers are not allowed',
  phone: 'Wrong phone format',
  email: 'Wrong e-mail format',
  password: 'Password must include uppercase letters and numbers',
  select: 'Nothing has been selected',
  checkbox: 'This point is required',
  link: 'This is not a valid URL',
};

export const validateInput = input => {
  let errorText = '';
  const currentInput = input;
  const inputWrapper = currentInput.type === 'radio' ? currentInput.closest('fieldset') : currentInput.closest('label');
  const textErrorEl = inputWrapper.querySelector('.labelError');

  // add Error
  const addError = text => {
    errorText = text;
    const currentInputs = inputWrapper.querySelectorAll('[required]');
    currentInputs.forEach(requiredInput => {
      requiredInput.classList.add('invalid');
      requiredInput.classList.remove('valid');
    });
    addErrorText(text);
  };

  // delete Error
  const deleteError = () => {
    currentInput.classList.remove('invalid');
    currentInput.classList.add('valid');
    deleteErrorText();
  };

  // add error Text
  const addErrorText = text => {
    if (useErrorTextMasseges) {
      if (textErrorEl) {
        textErrorEl.innerHTML = text;
        return;
      }
      inputWrapper.insertAdjacentHTML('beforeend', `<span class="labelError">${text}</span>`);
      setTimeout(() => inputWrapper.querySelector('.labelError').classList.add('active'), 1);
    }
  };

  // delete error Text
  const deleteErrorText = () => {
    if (textErrorEl) {
      textErrorEl.classList.remove('active');
      setTimeout(() => {
        textErrorEl.remove();
      }, 300);
    }
  };

  // radios in grup validate
  const radiosValidate = () => {
    const allRadios = inputWrapper.querySelectorAll('input[type="radio"]');
    const checkedRadios = inputWrapper.querySelectorAll('input[type="radio"]:checked');

    if (checkedRadios.length) {
      allRadios.forEach(radio => {
        radio.classList.remove('invalid');
        radio.removeAttribute('required');
      });
      deleteErrorText();
      return;
    }
    addError(errors.select);
  };

  // validate inputs by situations and types
  if (currentInput.required) {
    //select
    if (!currentInput.value && currentInput.dataset.type === 'select') {
      addError(errors.select);
      return errorText;
    }
    //Empty field
    if (!currentInput.value.trim()) {
      addError(errors.empty);
      return errorText;
    }
    //Minimum characters count
    if (currentInput.min) {
      if (currentInput.type !== 'number' && currentInput.min > currentInput.value.length) {
        addError(`Minimum ${currentInput.min} characters`);
        return errorText;
      }
      if (currentInput.type === 'number' && Number(currentInput.value) < currentInput.min) {
        addError(`Minimal number is ${currentInput.min}`);
        return errorText;
      }
    }
    //Maximum characters count
    if (currentInput.max) {
      if (currentInput.type !== 'number' && currentInput.max < currentInput.value.length) {
        addError(`Maximum ${currentInput.max} characters`);
        return errorText;
      }
      if (currentInput.type === 'number' && Number(currentInput.value) > currentInput.max) {
        addError(`Maximal number is ${currentInput.max}`);
        return errorText;
      }
    }
    //Name
    if (currentInput.name === 'name' && nameRegex.test(currentInput.value)) {
      addError(errors.name);
      return errorText;
    }
    //phone
    if (currentInput.type === 'tel' && !phoneRegex.test(currentInput.value)) {
      addError(errors.phone);
      return errorText;
    }
    //email
    if (currentInput.type === 'email' && !emailRegex.test(currentInput.value)) {
      addError(errors.email);
      return errorText;
    }
    //password
    if (currentInput.type === 'password' && !passwordRegex.test(currentInput.value)) {
      addError(errors.password);
      return errorText;
    }
    //checkboxes
    if (currentInput.type === 'checkbox' && currentInput.checked === false) {
      addError(errors.checkbox);
      return errorText;
    }
    //radio
    if (currentInput.type === 'radio') {
      radiosValidate();
      return errorText;
    }
    //link
    if (currentInput.type === 'url' && !linkRegex.test(currentInput.value)) {
      addError(errors.link);
      return errorText;
    }
  }

  if (!errorText) {
    deleteError();
  }
};

// validate Form
export const validateForm = form => {
  let errorsCount = 0;
  const formData = form.querySelectorAll('[required]');
  formData.forEach(input => {
    const error = validateInput(input);
    if (error) {
      errorsCount += 1;
    }
  });
  return errorsCount;
};
