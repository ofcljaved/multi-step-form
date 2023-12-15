import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='grid-rows-container mx-auto grid h-full w-full max-w-[940px] grid-cols-container gap-8 rounded-2xl bg-no-repeat p-4 shadow-md sm:max-h-[600px] sm:bg-white'>
      {children}
    </div>
  );
};

export default Container;
