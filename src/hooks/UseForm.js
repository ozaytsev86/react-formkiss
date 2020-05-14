import {useState, useRef} from 'react';

export function useForm({initialForm = {}, validateAll = null, onSubmit = null}) {
  const [isDirtyForm, setIsDirtyForm] = useState(false);
  const formRef = useRef(initialForm);

  const resetForm = () => {
    formRef.current = initialForm; //reset form
    setIsDirtyForm(false); //update the flag to not validate field on change
  };

  // when field change it saves the new value
  const onChangeField = (name, value) => {
    formRef.current = {...formRef.current, [name]: value};
  };

  const onSubmitForm = (e) => {
    e && e.preventDefault();
    setIsDirtyForm(true); //set the flag to validate field on change

    if (validateAll) {
      validateAll(formRef.current) ? onSubmit(formRef.current) : null;
    } else {
      onSubmit(formRef.current);
    }
  };
  return {isDirtyForm, onChangeField, onSubmitForm, resetForm};
}
