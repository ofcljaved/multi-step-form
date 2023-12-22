import { useSearchParams } from 'react-router-dom';
import { stepsData } from './assets/data';
import {
  Button,
  ConfirmStep,
  Container,
  FinalStep,
  FormStep,
  StepBar,
} from './components';
import { useEffect } from 'react';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams({ step: '' });
  const stepCount: Step['id'] = parseInt(searchParams.get('step')!, 10);

  // const handlePrevious =

  useEffect(() => {
    if (isNaN(stepCount)) {
      setSearchParams(prev => {
        prev.set('step', '1');
        return prev;
      });
    } else {
      setSearchParams(prev => {
        prev.set('step', stepCount.toString());
        return prev;
      });
    }
  }, [setSearchParams, stepCount]);

  return (
    <div className='grid min-h-[100svh] items-center bg-muted-foreground'>
      <Container>
        <StepBar activeStep={stepCount} setSearchParams={setSearchParams} />
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
          <div className='flex flex-row-reverse justify-between px-20 py-4'>
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
            {stepCount !== 1 && (
              <Button
                variant='Ghost'
                className='px-8 py-3 text-base font-semibold capitalize text-foreground hover:text-secondary'
              >
                Go Back
              </Button>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
