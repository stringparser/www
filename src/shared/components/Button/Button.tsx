import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FunctionComponent<ButtonProps> = ({ type = 'button', ...props }) => (
  <button type={type} {...props} />
);


export default Button;