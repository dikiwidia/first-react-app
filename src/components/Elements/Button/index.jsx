const Button = (props) => {
  const {
    children,
    onClick,
    type = "button",
    classname = "bg-blue-500",
  } = props;
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
