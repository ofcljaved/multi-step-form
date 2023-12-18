import { Button, Container, Form, StepBar } from './components';

const App = () => {
  return (
    <div className='grid min-h-[100svh] items-center bg-muted-foreground'>
      <Container>
        <StepBar />
        <Form />
        <div className='flex justify-between px-20 py-4'>
          <Button
            variant='Ghost'
            className='px-8 py-3 text-base font-semibold capitalize text-foreground hover:text-secondary'
          >
            Go Back
          </Button>
          <Button
            variant='Secondary'
            className='px-6 py-3 text-base font-semibold capitalize'
          >
            Next Step
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default App;
