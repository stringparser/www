import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FunctionComponent<InputProps> = ({ type = 'text', ...props }) => (
  <input type={type} {...props} />
);


export default Input;