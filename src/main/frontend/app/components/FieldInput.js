import React from 'react';

const FieldInput = (props) => {
  const { label, name, type, onChange, value } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FieldInput;