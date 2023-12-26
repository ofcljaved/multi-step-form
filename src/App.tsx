import { FormProvider, useForm } from 'react-hook-form';
import { Form, StepBar } from './components';
import { PlanSchema, PlanSchemaType } from './lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStepQueryParam } from './hooks';

const App = () => {
  const methods = useForm<PlanSchemaType>({
    resolver: zodResolver(PlanSchema),
    defaultValues: { plan: 'Arcade', yearlyPlan: false },
  });

  const { activeStep, submit, nextStep, previousStep, setSearchParams } =
    useStepQueryParam();
  return (
    <FormProvider {...methods}>
      <div className='grid min-h-[100svh] items-center bg-muted-foreground'>
        <div className='mx-auto grid h-full w-full max-w-[940px] grid-rows-mobile-container gap-x-4 bg-no-repeat shadow-md sm:max-h-[600px] sm:grid-cols-container sm:grid-rows-none sm:gap-y-8 sm:rounded-2xl sm:bg-white sm:p-4'>
          <StepBar activeStep={activeStep} setSearchParams={setSearchParams} />
          <Form
            activeStep={activeStep}
            nextStep={nextStep}
            previousStep={previousStep}
            setSearchParams={setSearchParams}
            submit={submit}
          />
        </div>
      </div>
    </FormProvider>
  );
};

export default App;
