import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'danger' | 'default';
}

// Atomic Component
export const Button = ({
  variant = 'default',
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      //   onClick={onClick}  onClick과 같은 이벤트는 밖에서 걸 수 있게 Props를 인터페이스로 만들고 extends 받아서 쓴다
      className={clsx(
        `btn-${variant}`,
        'inline-flex',
        'justify-around',
        'gap-1',
        ' items-center',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
