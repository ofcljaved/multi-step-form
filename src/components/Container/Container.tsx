import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='mx-auto h-full w-full max-w-[940px] rounded-[10px] p-4 sm:max-h-[600px] sm:bg-white'>
      {children}
    </div>
  );
};

export default Container;
