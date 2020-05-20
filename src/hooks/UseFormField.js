import {useState, useRef} from 'react';

export function useFormField({
  validateOnBlur = false,
  validateOnChange = false,
  initialValue = '',
  validate = null
} = {}) {
  const [formField, setFormField] = useState({value: initialValue});
  const lastDirtyStateRef = useRef(false);

  const onChangeFormField = (value, isDirtyForm) => {
    //if the last lastDirtyStateRef was true it because the form was submitted,
    //and if the current is false it because resetForm was executed
    if (lastDirtyStateRef.current === true && isDirtyForm === false) {
      //reset field
      setFormField({...formField, value: '', isDirty: false});
    } else {
      if (isDirtyForm) {
        const error = validate(value);
        setFormField({value, error, isDirty: true});
      } else {
        setFormField({value, isDirty: true});
      }
    }

    lastDirtyStateRef.current = isDirtyForm;
  };
  return {formField, onChangeFormField};
}
