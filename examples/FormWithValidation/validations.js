const validateAll = (form) => {
  let isValid = true;
  const isAnyFieldInvalid = hasErrorsField1(form.field1);
  if(isAnyFieldInvalid) isValid = false;
  return isValid;
};

const hasErrorsField1 = (value) => {
  if(!value) return 'The field is required';
  else if (value.length < 5) return 'The field should have 5 characters';
  return false;
};

export {validateAll, hasErrorsField1};
