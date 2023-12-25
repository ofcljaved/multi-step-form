import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Button, ConfirmStep, FinalStep } from '..';
import { stepsData } from '../../assets/data';
import { FieldName, PlanSchemaType } from '../../lib/schema';
import AddonStep from '../Steps/AddonStep';
import InputStep from '../Steps/InputStep';
import PlanStep from '../Steps/PlanStep';
import { SetURLSearchParams } from 'react-router-dom';

interface FormHandlerProps {
  submit: string | null;
  activeStep: number;
  nextStep: () => void;
  previousStep: () => void;
  setSearchParams: SetURLSearchParams;
}

const Form = ({
  activeStep,
  submit,
  nextStep,
  previousStep,
  setSearchParams,
}: FormHandlerProps) => {
  const { trigger, handleSubmit, reset } = useFormContext<PlanSchemaType>();

  const processForm: SubmitHandler<PlanSchemaType> = data => {
    console.log(data);
    setSearchParams(prev => {
      prev.set('submit', 'true');
      return prev;
    });
    reset();
  };

  const next = async () => {
    const fields = stepsData[activeStep - 1].form?.map(f => f.name);
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    if (!output) return;

    nextStep();
  };

  const confirmForm = async () => {
    handleSubmit(processForm)();
  };

  return (
    <form
      className='grid grid-rows-container'
      onSubmit={handleSubmit(processForm)}
    >
      {activeStep === 1 && <InputStep data={stepsData[activeStep - 1]} />}
      {activeStep === 2 && <PlanStep data={stepsData[activeStep - 1]} />}
      {activeStep === 3 && <AddonStep data={stepsData[activeStep - 1]} />}
      {activeStep === 4 && submit !== 'true' && (
        <ConfirmStep data={stepsData[activeStep - 1]} change={previousStep} />
      )}
      {activeStep === 4 && submit === 'true' && <FinalStep />}
      {submit !== 'true' && (
        <div className='flex flex-row-reverse justify-between px-20 py-4'>
          {activeStep === stepsData.length ? (
            <Button
              className='px-6 py-3 text-base font-semibold capitalize'
              onClick={confirmForm}
            >
              Confirm
            </Button>
          ) : (
            <Button
              variant='Secondary'
              className='px-6 py-3 text-base font-semibold capitalize'
              onClick={next}
            >
              Next Step
            </Button>
          )}

          {activeStep !== 1 && (
            <Button
              variant='Ghost'
              className='px-8 py-3 text-base font-semibold capitalize text-foreground hover:text-secondary'
              onClick={previousStep}
            >
              Go Back
            </Button>
          )}
        </div>
      )}
    </form>
  );
};

export default Form;
