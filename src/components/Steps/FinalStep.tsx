import { Icon } from '..';

const FinalStep = () => {
  return (
    <div className='row-span-full grid px-20 py-10'>
      <div className='grid place-items-center gap-3 self-center'>
        <div className='my-4'>
          <Icon name='Thankyou' />
        </div>
        <h1 className='text-4xl font-bold text-secondary'>Thank you!</h1>
        <p className='my-2 text-center text-foreground'>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          to support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default FinalStep;
