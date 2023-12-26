import { SetURLSearchParams } from 'react-router-dom';
import { Button } from '..';
import { stepsData } from '../../assets/data';
import { FieldName, PlanSchemaType } from '../../lib/schema';
import { useFormContext } from 'react-hook-form';

interface StepBarProps {
  activeStep: number;
  setSearchParams: SetURLSearchParams;
}

const StepBar = ({ activeStep, setSearchParams }: StepBarProps) => {
  const { trigger } = useFormContext<PlanSchemaType>();

  const handleClick = async (stepCount: number) => {
    const fields = stepsData[activeStep - 1].form?.map(f => f.name);
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    if (!output) return;

    setSearchParams(prev => {
      prev.set('step', stepCount.toString());
      return prev;
    });
  };

  return (
    <div className='col-span-full row-start-1 row-end-3 grid grid-rows-[subgrid] bg-stepbar-mobile bg-cover bg-no-repeat sm:col-span-1 sm:row-span-full sm:block sm:rounded-lg sm:bg-stepbar-desktop'>
      <ul className='grid grid-flow-col justify-center gap-4 py-6 sm:grid-flow-row sm:justify-normal sm:gap-3 sm:px-4 sm:py-8'>
        {stepsData.map(step => {
          const activeClass =
            activeStep === step.id
              ? 'bg-muted'
              : 'border text-primary-foreground';
          return (
            <li key={step.title}>
              <Button
                onClick={() => handleClick(step.id)}
                variant='Ghost'
                className='w-full justify-normal justify-items-start px-0 py-0 uppercase sm:grid sm:grid-cols-[max-content_auto] sm:grid-rows-[max-content_auto] sm:gap-x-4 sm:px-4 sm:py-2'
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
