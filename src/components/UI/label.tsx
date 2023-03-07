type SelectProps = {
  children: React.ReactNode;
  mandatory?: boolean;
};

function Label({ children, mandatory = false }: SelectProps) {
  return (
    <div>
      <h4>{children}</h4>
      {mandatory && <span className="text-alert">*</span>}
    </div>
  );
}

export default Label;
