import { Button } from '..';

const steps = ['your info', 'select plan', 'add-ons', 'summary'];
const StepBar = () => {
  const activeStep = 1; //TODO: make it state
  return (
    <div className=' bg-stepbar-mobile bg-cover bg-no-repeat sm:row-span-full sm:rounded-lg sm:bg-stepbar-desktop'>
      <ul className='grid grid-flow-col justify-center gap-4 py-6 sm:grid-flow-row sm:justify-normal sm:gap-3 sm:px-4 sm:py-8'>
        {steps.map((step, idx) => {
          const count = idx + 1;
          const activeClass =
            activeStep === count
              ? 'bg-muted'
              : 'border text-primary-foreground';
          return (
            <li key={step}>
              <Button
                variant='Ghost'
                className='-mx-4 justify-items-start uppercase sm:-mx-0 sm:grid sm:grid-cols-[max-content_auto] sm:grid-rows-[max-content_auto] sm:gap-x-4'
              >
                <span
                  className={`row-span-full grid aspect-square h-8 place-items-center rounded-full font-bold ${activeClass}`}
                >
                  {count}
                </span>
                <p className='hidden text-xs font-thin text-primary-foreground sm:block'>
                  Step {count}
                </p>
                <p className='hidden text-muted-foreground sm:block'>{step}</p>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepBar;
