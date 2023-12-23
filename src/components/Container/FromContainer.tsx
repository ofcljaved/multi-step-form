import { ReactNode } from 'react';

interface ContainerProps {
  heading: string;
  description: string;
  children: ReactNode;
}

const FromContainer = ({ heading, description, children }: ContainerProps) => {
  return (
    <div className='px-20 py-10'>
      <h1 className='text-3xl font-bold text-secondary'>{heading}</h1>
      <p className='my-2 text-base text-foreground'>{description}</p>
      {children}
    </div>
  );
};

export default FromContainer;
