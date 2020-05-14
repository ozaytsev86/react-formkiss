import React from 'react';

import {useForm} from '../../src/hooks/UseForm';
import {Field} from './Field';

const FormWithResetOnSubmitSuccess = (props) => {
  const handleValidateAll = (form) => {
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
  const handleOnSubmit = (form) => {
    //service.post().then(() => resetForm())

    // this is just for example purpose
    props.onSubmit(form);
    setTimeout(() => {
      resetForm();
    }, 1000);
  };
  const {isDirtyForm, onChangeField, onSubmitForm, resetForm} = useForm({validateAll: handleValidateAll, onSubmit: handleOnSubmit});

  return (
    <form noValidate onSubmit={onSubmitForm}>
      <div>
        <Field
          name="field1"
          isDirtyForm={isDirtyForm}
          onChange={onChangeField}
          validate={hasErrorsField1}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormWithResetOnSubmitSuccess;
