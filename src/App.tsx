import { stepsData } from './assets/data';
import {
  Button,
  ConfirmStep,
  Container,
  FinalStep,
  FormStep,
  StepBar,
} from './components';

const App = () => {
  const stepCount: Step['id'] = 2;
  return (
    <div className='grid min-h-[100svh] items-center bg-muted-foreground'>
      <Container>
        <StepBar />
        {stepCount <= 3 && (
          <FormStep
            heading={stepsData[stepCount].heading}
            description={stepsData[stepCount].description}
            form={stepsData[stepCount].form!}
            planType={stepsData[stepCount].planType}
          />
        )}
        {stepCount === 4 && (
          <ConfirmStep
            heading={stepsData[stepCount].heading}
            description={stepsData[stepCount].description}
          />
        )}
        {stepCount === 5 && <FinalStep />}
        {stepCount !== 5 && (
          <div className='flex justify-between px-20 py-4'>
            <Button
              variant='Ghost'
              className='px-8 py-3 text-base font-semibold capitalize text-foreground hover:text-secondary'
            >
              Go Back
            </Button>
            {stepCount === 4 ? (
              <Button className='px-6 py-3 text-base font-semibold capitalize'>
                Confirm
              </Button>
            ) : (
              <Button
                variant='Secondary'
                className='px-6 py-3 text-base font-semibold capitalize'
              >
                Next Step
              </Button>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
