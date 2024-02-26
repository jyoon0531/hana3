import { Ref, forwardRef } from 'react';

export const H5 = forwardRef(
  ({ ss }: { ss: string }, ref: Ref<HTMLInputElement>) => {
    return (
      <div style={{ border: '1px solid skyblue', marginBottom: '0.5rem' }}>
        <h5>H55555566-{ss}</h5>
        <input type='text' ref={ref} placeholder='child-input...' />
      </div>
    );
  }
);

H5.displayName = 'H5';
