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

  const processForm: SubmitHandler<PlanSchemaType> = () => {
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
      className='col-span-full row-start-2 row-end-[10] grid grid-rows-container sm:col-span-1 sm:row-start-auto sm:row-end-auto'
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
        <div className='flex flex-row-reverse justify-between bg-white px-4 py-4 sm:px-20'>
          {activeStep === stepsData.length ? (
            <Button
              className='px-4 py-3 text-base font-medium capitalize sm:px-6'
              onClick={confirmForm}
            >
              Confirm
            </Button>
          ) : (
            <Button
              variant='Secondary'
              className='px-4 py-3 text-base font-medium capitalize sm:px-6'
              onClick={next}
            >
              Next Step
            </Button>
          )}

          {activeStep !== 1 && (
            <Button
              variant='Ghost'
              className='px-2 py-3 text-base font-medium capitalize text-foreground hover:text-secondary sm:px-8'
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
