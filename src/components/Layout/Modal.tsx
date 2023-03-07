type SelectProps = {
  children: React.ReactNode;
};

function Modal({ children }: SelectProps) {
  return (
    <div className="">
      <h4>{children}</h4>
    </div>
  );
}

export default Modal;
