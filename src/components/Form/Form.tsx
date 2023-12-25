import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormTrigger,
} from 'react-hook-form';
import { Button, ConfirmStep } from '..';
import { stepsData } from '../../assets/data';
import { FieldName, PlanSchemaType } from '../../lib/schema';
import AddonStep from '../Steps/AddonStep';
import InputStep from '../Steps/InputStep';
import PlanStep from '../Steps/PlanStep';

interface FormHandlerProps {
  reset: UseFormReset<PlanSchemaType>;
  trigger: UseFormTrigger<PlanSchemaType>;
  handleSubmit: UseFormHandleSubmit<PlanSchemaType>;
  register: UseFormRegister<PlanSchemaType>;
  errors: FieldErrors<PlanSchemaType>;
  activeStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

const Form = ({
  reset,
  trigger,
  handleSubmit,
  register,
  errors,
  activeStep,
  nextStep,
  previousStep,
}: FormHandlerProps) => {
  const processForm: SubmitHandler<PlanSchemaType> = data => {
    console.log(data);
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
      {activeStep === 1 && (
        <InputStep
          data={stepsData[activeStep - 1]}
          register={register}
          errors={errors}
        />
      )}
      {activeStep === 2 && (
        <PlanStep
          data={stepsData[activeStep - 1]}
          register={register}
          errors={errors}
        />
      )}
      {activeStep === 3 && (
        <AddonStep
          data={stepsData[activeStep - 1]}
          register={register}
          errors={errors}
        />
      )}
      {activeStep === 4 && <ConfirmStep data={stepsData[activeStep - 1]} />}
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
    </form>
  );
};

export default Form;
