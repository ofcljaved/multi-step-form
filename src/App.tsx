import { Container, StepBar } from './components';

const App = () => {
  return (
    <div className='grid min-h-[100svh] items-center bg-muted-foreground'>
      <Container>
        <StepBar />
      </Container>
    </div>
  );
};

export default App;
