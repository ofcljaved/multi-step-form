import { Button } from '..';
import { steps } from '../../assets/data';
import { useStepQueryParam } from '../../hooks';

const StepBar = () => {
  const { activeStep, setSearchParams } = useStepQueryParam();

  const handleClick = (stepCount: number) => {
    setSearchParams(prev => {
      prev.set('step', stepCount.toString());
      return prev;
    });
  };

  return (
    <div className=' bg-stepbar-mobile bg-cover bg-no-repeat sm:row-span-full sm:rounded-lg sm:bg-stepbar-desktop'>
      <ul className='grid grid-flow-col justify-center gap-4 py-6 sm:grid-flow-row sm:justify-normal sm:gap-3 sm:px-4 sm:py-8'>
        {steps.map(step => {
          const activeClass =
            activeStep === step.id
              ? 'bg-muted'
              : 'border text-primary-foreground';
          return (
            <li key={step.title}>
              <Button
                onClick={() => handleClick(step.id)}
                variant='Ghost'
                className='-mx-4 w-full justify-normal justify-items-start uppercase sm:-mx-0 sm:grid sm:grid-cols-[max-content_auto] sm:grid-rows-[max-content_auto] sm:gap-x-4'
              >
                <span
                  className={`row-span-full grid aspect-square h-8 place-items-center rounded-full font-bold ${activeClass}`}
                >
                  {step.id}
                </span>
                <p className='hidden text-xs font-thin text-primary-foreground sm:block'>
                  Step {step.id}
                </p>
                <p className='hidden text-muted-foreground sm:block'>
                  {step.title}
                </p>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepBar;
