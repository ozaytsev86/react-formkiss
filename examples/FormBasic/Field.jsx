import React, {useEffect} from 'react';
import {useFormField} from '../../src/hooks/UseFormField';

export const Field = props => {
  const {formField, onChangeFormField} = useFormField();

  useEffect(() => {
    props.onChange(props.name, formField.value);
  }, [formField.value]);

  return (
    <input
      type="text"
      value={formField.value}
      onChange={e => onChangeFormField(e.target.value)}
    />
  );
};
