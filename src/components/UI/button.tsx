type SelectProps = {
  children: React.ReactNode;
  onClick?: () => void;
  mandatory?: boolean;
  className?: string;
};

function Button({ children, onClick, mandatory, className }: SelectProps) {
  return (
    <div
      className="bg-blue hover:bg-blue-dark text-white font-medium py-2 px-4 rounded inline cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
