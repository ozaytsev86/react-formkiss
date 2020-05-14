import React from 'react';

import {useForm} from '../../src/hooks/UseForm';
import {Field} from './Field';

const FormAdvanced = (props) => {
  const handleValidateAll = (form) => {
    let isValid = true;
    const isAnyFieldInvalid = hasErrorsField1(form.field1) || hasErrorsField2(form.field2);
    if(isAnyFieldInvalid) isValid = false;
    return isValid;
  };

  const hasErrorsField1 = (value) => {
    if(value === '') return 'The field is required';
    else if (value.length < 5) return 'The field should have 10 characters';
    return false;
  };
  const hasErrorsField2 = (value) => {
    if(value === '') return 'The field is required';
    else if (value.length < 5) return 'The field should have 5 characters';
    return false;
  };
  const handleOnSubmit = (form) => {
    //service.post().then(...)

    // this is just for example purpose
    props.onSubmit(form);
  };
  const {isDirtyForm, onChangeField, onSubmitForm} = useForm({validateAll: handleValidateAll, onSubmit: handleOnSubmit});

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <Field
          name="field1"
          isDirtyForm={isDirtyForm}
          onChange={onChangeField}
          validate={hasErrorsField1}
        />
      </div>
      <div>
        <Field
          name="field2"
          isDirtyForm={isDirtyForm}
          onChange={onChangeField}
          validate={hasErrorsField2}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormAdvanced;
