import React, {useEffect} from 'react';
import {useFormField} from '../../src/hooks/UseFormField';

export const Field = props => {
  const {formField, onChangeFormField} = useFormField({validate: props.validate});

  useEffect(() => {
    onChangeFormField(formField.value, props.isDirtyForm);
  }, [props.isDirtyForm]);

  useEffect(() => {
    props.onChange(props.name, formField.value);
  }, [formField.value]);

  return (
    <>
      <input
        type="text"
        value={formField.value}
        onChange={e => onChangeFormField(e.target.value, props.isDirtyForm)}
      />
      {formField.error && <p>{formField.error}</p>}
    </>
  );
};
