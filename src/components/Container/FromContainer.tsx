import { ReactNode } from 'react';

interface ContainerProps {
  heading: string;
  description: string;
  children: ReactNode;
}

const FromContainer = ({ heading, description, children }: ContainerProps) => {
  return (
    <div className='mx-4 self-start rounded-xl bg-white px-6 py-8 sm:mx-0 sm:self-auto sm:px-20 sm:py-10'>
      <h1 className='text-2xl font-bold text-secondary sm:text-3xl'>
        {heading}
      </h1>
      <p className='my-2 text-base text-foreground'>{description}</p>
      {children}
    </div>
  );
};

export default FromContainer;
