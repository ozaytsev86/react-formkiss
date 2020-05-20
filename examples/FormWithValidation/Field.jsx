import React, {useEffect} from 'react';
import {useFormField} from '../../src/hooks/UseFormField';

export const Field = ({name, isDirtyForm, validate, onChangeField}) => {
  const {formField, onChangeFormField} = useFormField({validate});

  useEffect(() => {
    onChangeFormField(formField.value, isDirtyForm);
  }, [isDirtyForm]);

  useEffect(() => {
    onChangeField(name, formField.value);
  }, [formField.value]);

  return (
    <>
      <input
        type="text"
        value={formField.value}
        onChange={e => onChangeFormField(e.target.value, isDirtyForm)}
      />
      {formField.error && <p>{formField.error}</p>}
    </>
  );
};
