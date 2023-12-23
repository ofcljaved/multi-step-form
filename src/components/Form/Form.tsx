import { Button } from '..';
import { stepsData } from '../../assets/data';
import { useStepQueryParam } from '../../hooks';
import InputStep from '../Steps/InputStep';

const Form = () => {
  const { activeStep, nextStep, previousStep } = useStepQueryParam();
  return (
    <form className='grid grid-rows-container '>
      {activeStep === 1 && <InputStep data={stepsData[activeStep]} />}
      <div className='flex flex-row-reverse justify-between px-20 py-4'>
        <Button className='px-6 py-3 text-base font-semibold capitalize'>
          Confirm
        </Button>
        <Button
          variant='Secondary'
          className='px-6 py-3 text-base font-semibold capitalize'
          onClick={nextStep}
        >
          Next Step
        </Button>
        <Button
          variant='Ghost'
          className='px-8 py-3 text-base font-semibold capitalize text-foreground hover:text-secondary'
          onClick={previousStep}
        >
          Go Back
        </Button>
      </div>
    </form>
  );
};

export default Form;
