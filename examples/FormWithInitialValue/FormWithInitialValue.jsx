import React from 'react';

import {useForm} from '../../src/hooks/UseForm';
import {Field} from './Field';

const FormWithInitialValue = (props) => {
  const initialForm = {
    field1: 'Hello',
  };

  const handleOnSubmit = (form) => {
    //service.post().then(...)

    // this is just for example purpose
    props.onSubmit(form);
  };
  const {onChangeField, onSubmitForm} = useForm({onSubmit: handleOnSubmit});

  return (
    <form noValidate onSubmit={onSubmitForm}>
      <Field
        name="field1"
        initialValue={initialForm.field1}
        onChange={onChangeField}
      />
      <button>Submit</button>
    </form>
  );
};

export default FormWithInitialValue;
