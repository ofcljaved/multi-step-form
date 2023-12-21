// import { Icon } from '..';
// import Input from './Input';
// import Checkbox from './Checkbox';
// import Radio from './Radio';

const Form = () => {
  // const planType: string = 'monthly';
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

      {/* ------STEP 2 -------- */}
      {/* <h1 className='text-3xl font-bold text-secondary'>Select your plan</h1>
      <p className='my-2 text-base text-foreground'>
        You have the option for monthly or yearly billing.
      </p>
      <form className='grid grid-cols-3 gap-4 pt-8'>
        <Radio
          name='plan'
          inputVisible={false}
          className='grid gap-10 rounded-lg border border-foreground p-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
        >
          <Icon name='Arcade' />
          <div className='grid gap-1'>
            <strong className='text-secondary'>Arcade</strong>
            <span className='text-sm text-foreground'>$9/mo</span>
            {planType === 'yearly' && (
              <span className='text-xs font-semibold text-secondary'>
                2 months free
              </span>
            )}
          </div>
        </Radio>
        <Radio
          name='plan'
          inputVisible={false}
          className='grid gap-10 rounded-lg border border-foreground p-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
        >
          <Icon name='Advanced' />
          <div className='grid gap-1'>
            <strong className='text-secondary'>Advanced</strong>
            <span className='text-sm text-foreground'>$12/mo</span>
            {planType === 'yearly' && (
              <span className='text-xs font-semibold text-secondary'>
                2 months free
              </span>
            )}
          </div>
        </Radio>
        <Radio
          name='plan'
          inputVisible={false}
          className='grid gap-10 rounded-lg border border-foreground p-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
        >
          <Icon name='Pro' />
          <div className='grid gap-1'>
            <strong className='text-secondary'>Pro</strong>
            <span className='text-sm text-foreground'>$15/mo</span>
            {planType === 'yearly' && (
              <span className='text-xs font-semibold text-secondary'>
                2 months free
              </span>
            )}
          </div>
        </Radio>
      </form>
      <div className='my-8 grid w-full grid-flow-col justify-center gap-6 rounded bg-muted-foreground p-4 text-sm font-bold'>
        <span className='text-secondary'>Monthly</span>
        <Checkbox
          inputVisible={false}
          className="block h-full w-9 rounded-full bg-secondary after:absolute after:start-1 after:top-1/2 after:aspect-square after:w-3.5 after:-translate-y-1/2 after:rounded-full after:bg-background after:transition-all after:content-[''] peer-checked:after:translate-x-full"
        ></Checkbox>
        <span className='text-foreground'>Yearly</span>
      </div> */}

      {/* ------STEP 3 -------- */}
      {/* <h1 className='text-3xl font-bold text-secondary'>Pick add-ons</h1>
      <p className='my-2 text-base text-foreground'>
        Add-ons helps enhance your gaming experience.
      </p>
      <form className='grid gap-4 pt-8'>
        <Checkbox
          name='checkbox1'
          inputVisible={false}
          className='grid grid-cols-[max-content_1fr_max-content] items-center gap-5 rounded-lg border border-foreground px-6 py-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
        >
          <div className='grid aspect-square place-content-center rounded bg-primary p-1'>
            <Icon name='Checkmark' />
          </div>
          <p className='text-sm text-foreground'>
            <strong className='text-base text-secondary'>Larger storage</strong>
            <br />
            Extraa 1TB of cloud space
          </p>
          <span className='text-sm text-primary'>+$20/mo</span>
        </Checkbox>
        <Checkbox
          name='checkbox1'
          inputVisible={false}
          className='grid grid-cols-[max-content_1fr_max-content] items-center gap-5 rounded-lg border border-foreground px-6 py-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
        >
          <div className='grid aspect-square place-content-center rounded bg-primary p-1'>
            <Icon name='Checkmark' />
          </div>
          <p className='text-sm text-foreground'>
            <strong className='text-base text-secondary'>
              Customizable profile
            </strong>
            <br />
            Custom theme on your profile
          </p>
          <span className='text-sm text-primary'>+$20/mo</span>
        </Checkbox>
        <Checkbox
          name='checkbox1'
          inputVisible={false}
          className='grid grid-cols-[max-content_1fr_max-content] items-center gap-5 rounded-lg border border-foreground px-6 py-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
        >
          <div className='grid aspect-square place-content-center rounded bg-primary p-1'>
            <Icon name='Checkmark' />
          </div>
          <p className='text-sm text-foreground'>
            <strong className='text-base text-secondary'>Online service</strong>
            <br />
            Access to multiplayer games
          </p>
          <span className='text-sm text-primary'>+$9/mo</span>
        </Checkbox>
      </form> */}

      {/* ------STEP 4 -------- */}
      <h1 className='text-3xl font-bold text-secondary'>Finishing up</h1>
      <p className='my-2 text-base text-foreground'>
        Double-check everything looks OK before confirming.
      </p>
      <div className='grid gap-4 pt-8'>
        <div className='grid gap-4 rounded-lg bg-muted-foreground p-6'>
          <div className='grid grid-cols-[1fr_max-content] items-center gap-5 '>
            <p className='text-sm text-foreground'>
              <strong className='text-base text-secondary'>
                Arcade (Yearly)
              </strong>
              <br />
              <a href='#' className='underline'>
                Change
              </a>
            </p>
            <span className='font-bold text-secondary'>+$20/mo</span>
          </div>
          <hr />
          <div className='grid grid-cols-[1fr_max-content] items-center gap-5 text-sm'>
            <p className='text-foreground'>Online Service</p>
            <span className='text-secondary'>+$10/mo</span>
          </div>
          <div className='grid grid-cols-[1fr_max-content] items-center gap-5 text-sm'>
            <p className='text-foreground'>Larger Storage</p>
            <span className='text-secondary'>+$20/mo</span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-[1fr_max-content] gap-5 p-6 text-sm text-foreground'>
        <span>Total (per year)</span>
        <span className='text-xl font-bold text-primary'>$120/yr</span>
      </div>

      {/* ------STEP 5 -------- */}
      {/* <div className='grid place-items-center gap-3 self-center'>
        <div className='my-4'>
          <Icon name='Thankyou' />
        </div>
        <h1 className='text-4xl font-bold text-secondary'>Thank you!</h1>
        <p className='my-2 text-center text-foreground'>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          to support@loremgaming.com
        </p>
      </div> */}
    </div>
  );
};

export default Form;
