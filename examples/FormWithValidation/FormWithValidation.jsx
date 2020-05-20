import React from 'react';

import {useForm} from '../../src/hooks/UseForm';
import {Field} from './Field';
import {validateAll, hasErrorsField1} from './validations';

const FormWithValidation = ({onSubmit}) => {
  const handleOnSubmit = (form) => {
    //service.post().then(...)

    // this is just for example purpose
    onSubmit(form);
  };
  const {isDirtyForm, onChangeField, onSubmitForm} = useForm({
    validateAll,
    onSubmit: handleOnSubmit
  });

  return (
    <form noValidate onSubmit={onSubmitForm}>
      <div>
        <Field
          name="field1"
          isDirtyForm={isDirtyForm}
          onChangeField={onChangeField}
          validate={hasErrorsField1}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormWithValidation;
