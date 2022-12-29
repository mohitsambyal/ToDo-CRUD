import React from 'react';
import clsx from 'clsx';
import FieldWrapper from './FieldWrapper';

const TextAreaField = (props) => {
  const { label, className, registration, error, placeholder, id } = props;

  return (
    <FieldWrapper error={error} label={label} id={id}>
      <textarea id={id} placeholder={placeholder} className={clsx('', className)} {...registration} />
    </FieldWrapper>
  );
};

export default TextAreaField;
