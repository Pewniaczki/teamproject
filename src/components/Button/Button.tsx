// import './Button.scss';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return (
    <button
      className="w-full cursor-pointer rounded-lg border-1 border-[var(--color-grey-50)] bg-[var(--color-grey-70)] p-3 font-bold text-[var(--color-grey-20)] transition-[background-color,transform] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-1 hover:border-[var(--color-secondary)] hover:bg-[var(----color-secondary-20)] hover:text-[var(--color-secondary)] active:translate-y-0 disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
      {...buttonProps}
    >
      {children}
    </button>
  );
};
