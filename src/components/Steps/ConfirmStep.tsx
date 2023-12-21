interface ConfirmStepProps {
  heading: string;
  description: string;
}

const ConfirmStep = ({ heading, description }: ConfirmStepProps) => {
  return (
    <div className='px-20 py-10'>
      <h1 className='text-3xl font-bold text-secondary'>{heading}</h1>
      <p className='my-2 text-base text-foreground'>{description}</p>
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
    </div>
  );
};

export default ConfirmStep;
