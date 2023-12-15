import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='grid-cols-container mx-auto grid h-full w-full max-w-[940px] rounded-2xl p-4 shadow-md sm:max-h-[600px] sm:bg-white'>
      {children}
    </div>
  );
};

export default Container;
