import React from 'react';

const FieldWrapper = (props) => {
  const { label, error, children, id } = props;
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <div>{children}</div>
      </label>
      {error?.message && <div>{error?.message}</div>}
    </div>
  );
};

export default FieldWrapper;
