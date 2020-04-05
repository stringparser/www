import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FunctionComponent<TextareaProps> = (props) => (
  <textarea {...props} />
);


export default Textarea;