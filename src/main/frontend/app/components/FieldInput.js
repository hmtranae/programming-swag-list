import React from 'react';
import '../css/showpage.scss';

const FieldInput = (props) => {
  const { label, name, type, onChange, value, min, max } = props;

  if (min && max) {
    return (
      <div className="form-group paragraph-spacing">
        <label htmlFor={name}>{label}</label>
        <input
          className="form-control"
          id={name}
          name={name}
          type={type}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
        />
      </div>
    )

  } else {
    return (
      <div className="form-group paragraph-spacing">
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
}

export default FieldInput;