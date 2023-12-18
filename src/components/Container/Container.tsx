import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='grid-rows-mobile-container mx-auto grid h-full w-full max-w-[940px] gap-8 bg-no-repeat shadow-md sm:max-h-[600px] sm:grid-cols-container sm:grid-rows-container sm:rounded-2xl sm:bg-white sm:p-4'>
      {children}
    </div>
  );
};

export default Container;
