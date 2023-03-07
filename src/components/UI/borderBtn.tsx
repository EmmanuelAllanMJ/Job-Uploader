type SelectProps = {
  children: React.ReactNode;
  onClick?: () => void;
  mandatory?: boolean;
  className?: string;
};

function BorderBtn({ children, onClick, mandatory, className }: SelectProps) {
  return (
    <div
      className="bg[#fff] hover:bg-blue hover:text-[#fff] border text-blue font-medium py-2 px-4 rounded inline cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default BorderBtn;
