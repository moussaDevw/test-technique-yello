import styles from "./Input.module.css";

type InputProps = {
  placeholder: string;
  className?: string;
  type: string;
};

const Input = ({ placeholder, className = "", type }: InputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`${styles.input} ${className}`}
  />
);

export default Input;
