/*

  Hook to manage field value and validations
  once the form was submitted the validations will be shown

 */

import {useState, useRef} from 'react';

export function useFormField({initialValue = '', validate = null} = {}) {
  const [formField, setFormField] = useState({value: initialValue});
  const lastDirtyStateRef = useRef(false);

  const onChangeFormField = (value, isDirtyForm) => {
    //if the last lastDirtyStateRef was true it because the form was submitted,
    //and if the current is false it because resetForm was executed
    if (lastDirtyStateRef.current === true && isDirtyForm === false) {
      //reset field
      setFormField({...formField, value: '', isDirtyForm});
    } else {
      if (isDirtyForm) {
        const error = validate(value);
        setFormField({value, isDirtyForm, error});
      } else {
        setFormField({value, isDirtyForm});
      }
    }

    lastDirtyStateRef.current = isDirtyForm;
  };
  return {formField, onChangeFormField};
}
