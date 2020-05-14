import React, {useState} from 'react';
import FormBasic from './FormBasic/FormBasic';
import FormAdvanced from './FormAdvanced/FormAdvanced';
import FormWithInitialValue from './FormWithInitialValue/FormWithInitialValue';
import FormWithValidation from './FormWithValidation/FormWithValidation';
import FormWithResetOnSubmitSuccess from './FormWithResetOnSubmitSuccess/FormWithResetOnSubmitSuccess';

export default { title: 'Examples' };

export const BasicForm = () => {
  const [submittedForm, setSubmittedForm] = useState(null);
  const handleOnSubmit = (form) => {
    setSubmittedForm(form);
  };
  return (
    <>
      <FormBasic onSubmit={handleOnSubmit}/>
      <p>Submitted form: {JSON.stringify(submittedForm)}</p>
    </>
  );
};

export const AdvancedForm = () => {
  const [submittedForm, setSubmittedForm] = useState(null);
  const handleOnSubmit = (form) => {
    setSubmittedForm(form);
  };
  return (
    <>
      <FormAdvanced onSubmit={handleOnSubmit}/>
      <p>Submitted form: {JSON.stringify(submittedForm)}</p>
    </>
  );
};

export const WithInitialValue = () => {
  const [submittedForm, setSubmittedForm] = useState(null);
  const handleOnSubmit = (form) => {
    setSubmittedForm(form);
  };
  return (
    <>
      <FormWithInitialValue onSubmit={handleOnSubmit}/>
      <p>Submitted form: {JSON.stringify(submittedForm)}</p>
    </>
  );
};

export const WithValidation = () => {
  const [submittedForm, setSubmittedForm] = useState(null);
  const handleOnSubmit = (form) => {
    setSubmittedForm(form);
  };
  return (
    <>
      <FormWithValidation onSubmit={handleOnSubmit}/>
      <p>Submitted form: {JSON.stringify(submittedForm)}</p>
    </>
  );
};

export const WithResetOnSubmitSuccess = () => {
  const [submittedForm, setSubmittedForm] = useState(null);
  const handleOnSubmit = (form) => {
    setSubmittedForm(form);
  };
  return (
    <>
      <FormWithResetOnSubmitSuccess onSubmit={handleOnSubmit}/>
      <p>Submitted form: {JSON.stringify(submittedForm)}</p>
    </>
  );
};
