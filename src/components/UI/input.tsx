type SelectProps = {
  children: React.ReactNode;
  placeholder: string;
};

function Input({ children, placeholder }: SelectProps) {
  return (
    <div className="">
      <h4>{children}</h4>
    </div>
  );
}

export default Input;
