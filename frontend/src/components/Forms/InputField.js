import React from 'react';
import clsx from 'clsx';
import FieldWrapper from './FieldWrapper';

const InputField = (props) => {
  const { type = 'text', label, className, registration, error, placeholder, id } = props;

  return (
    <FieldWrapper error={error} label={label} id={id}>
      <input id={id} type={type} placeholder={placeholder} className={clsx('', className)} {...registration} />
    </FieldWrapper>
  );
};

export default InputField;
