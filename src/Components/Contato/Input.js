import React from "react";
import styled from "styled-components";

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <span>{error}</span>}
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    /* padding-top: 10px; */
    margin-bottom: 5px;
    font-size: 1.2rem;
    color: var(--gray);
  }
  input {
    padding: 10px;
    color: var(--black);
    font-size: 1.2rem;
    :focus {
      outline-color: var(--yellow);
    }
  }
  span {
    color: var(--yellow);
  }
`;
