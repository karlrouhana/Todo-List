import React from 'react';
import './button.css';

const Button = (props) => {
  const { class: className, value, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {value}
    </button>
  );
}

export default Button;
