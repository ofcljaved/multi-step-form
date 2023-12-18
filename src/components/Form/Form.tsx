import { Icon } from '..';
import Radio from './Radio';

const Form = () => {
  return (
    <div className='px-20 py-10'>
      {/* ------STEP 1 -------- */}
      {/* <h1 className='text-3xl font-bold text-secondary'>Personal info</h1>
      <p className='my-2 text-base text-foreground'>
        Please provide your name, email address, and phone number.
      </p>
      <form className='grid gap-4 pt-8'>
        <Input
          label='Name'
          placeholder='e.g. Stephen King'
          className='font-semibold placeholder:text-foreground'
        />
        <Input
          label='Email Address'
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          className='font-semibold placeholder:text-foreground'
        />
        <Input
          label='Phone Number'
          type='tel'
          placeholder='e.g. +1 234 567 890'
          className='font-semibold placeholder:text-foreground'
        />
      </form> */}
      <h1 className='text-3xl font-bold text-secondary'>Select your plan</h1>
      <p className='my-2 text-base text-foreground'>
        You have the option for monthly or yearly billing.
      </p>
      <form className='grid grid-cols-3 gap-4 pt-8'>
        <Radio
          name='plan'
          inputVisible
          className='checked: grid gap-10 rounded-lg border border-primary bg-muted-foreground p-4'
        >
          <Icon name='Arcade' />
          <div className='grid'>
            <strong className='text-secondary'>Arcade</strong>
            <span className='text-sm text-foreground'>$9/mo</span>
          </div>
        </Radio>
        <Radio
          name='plan'
          inputVisible
          className='grid gap-10 rounded-lg border border-primary bg-muted-foreground p-4'
        >
          <Icon name='Advanced' />
          <div className='grid'>
            <strong className='text-secondary'>Advanced</strong>
            <span className='text-sm text-foreground'>$12/mo</span>
          </div>
        </Radio>
        <Radio
          name='plan'
          inputVisible
          className='grid gap-10 rounded-lg border border-primary bg-muted-foreground p-4'
        >
          <Icon name='Pro' />
          <div className='grid'>
            <strong className='text-secondary'>Pro</strong>
            <span className='text-sm text-foreground'>$15/mo</span>
          </div>
        </Radio>
      </form>
    </div>
  );
};

export default Form;
