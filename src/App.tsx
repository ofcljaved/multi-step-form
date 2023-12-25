import { FormProvider, useForm } from 'react-hook-form';
import { Form, StepBar } from './components';
import { PlanSchema, PlanSchemaType } from './lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStepQueryParam } from './hooks';

const App = () => {
  const methods = useForm<PlanSchemaType>({
    resolver: zodResolver(PlanSchema),
  });

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = methods;

  const { activeStep, nextStep, previousStep, setSearchParams } =
    useStepQueryParam();
  return (
    <div className='grid min-h-[100svh] items-center bg-muted-foreground'>
      <div className='mx-auto grid h-full w-full max-w-[940px] grid-rows-mobile-container gap-x-4 gap-y-8 bg-no-repeat shadow-md sm:max-h-[600px] sm:grid-cols-container sm:grid-rows-none sm:rounded-2xl sm:bg-white sm:p-4'>
        <StepBar
          trigger={trigger}
          activeStep={activeStep}
          setSearchParams={setSearchParams}
        />
        <FormProvider {...methods}>
          <Form
            register={register}
            reset={reset}
            handleSubmit={handleSubmit}
            trigger={trigger}
            errors={errors}
            activeStep={activeStep}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        </FormProvider>
      </div>
    </div>
  );
};

export default App;
