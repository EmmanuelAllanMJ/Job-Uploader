type SelectProps = {
  children: React.ReactNode;
  className?: string;
};

function Wrapper({ children, className }: SelectProps) {
  return (
    <div className="flex items-start justify-between rounded-t">
      <div className={` w-full flex justify-between items-center ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
