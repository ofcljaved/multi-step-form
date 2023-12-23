import { Form, StepBar } from './components';

const App = () => {
  return (
    <div className='grid min-h-[100svh] items-center bg-muted-foreground'>
      <div className='mx-auto grid h-full w-full max-w-[940px] grid-rows-mobile-container gap-x-4 gap-y-8 bg-no-repeat shadow-md sm:max-h-[600px] sm:grid-cols-container sm:grid-rows-none sm:rounded-2xl sm:bg-white sm:p-4'>
        <StepBar />
        <Form />
      </div>
    </div>
  );
};

export default App;
