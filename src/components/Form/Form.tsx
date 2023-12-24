import { Button, ConfirmStep } from '..';
import { stepsData } from '../../assets/data';
import { useStepQueryParam } from '../../hooks';
import AddonStep from '../Steps/AddonStep';
import InputStep from '../Steps/InputStep';
import PlanStep from '../Steps/PlanStep';

const Form = () => {
  const { activeStep, nextStep, previousStep } = useStepQueryParam();
  return (
    <form className='grid grid-rows-container '>
      {activeStep === 1 && <InputStep data={stepsData[activeStep]} />}
      {activeStep === 2 && <PlanStep data={stepsData[activeStep]} />}
      {activeStep === 3 && <AddonStep data={stepsData[activeStep]} />}
      {activeStep === 4 && <ConfirmStep data={stepsData[activeStep]} />}
      <div className='flex flex-row-reverse justify-between px-20 py-4'>
        <Button className='px-6 py-3 text-base font-semibold capitalize'>
          Confirm
        </Button>
        <Button
          type='submit'
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
