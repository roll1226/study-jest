interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  label: string;
  onClick?: () => void;
  dataTestId?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  dataTestId,
  type = "button",
}) => {
  return (
    <button onClick={onClick} data-testid={dataTestId} type={type}>
      {label}
    </button>
  );
};

export default Button;
