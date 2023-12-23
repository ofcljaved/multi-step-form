import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { steps } from '../assets/data';

const MAX_STEP = steps.length;

const useStepQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams({ step: '' });
  const activeStep: number = parseInt(searchParams.get('step')!, 10);

  const previousStep = () => {
    setSearchParams(prev => {
      const prevStep = parseInt(prev.get('step')!, 10);
      if (prevStep <= 1) return prev;
      const newStep = prevStep - 1;
      prev.set('step', newStep.toString());
      return prev;
    });
  };

  const nextStep = () => {
    setSearchParams(prev => {
      const prevStep = parseInt(prev.get('step')!, 10);
      if (prevStep >= MAX_STEP) return prev;
      const newStep = prevStep + 1;
      prev.set('step', newStep.toString());
      return prev;
    });
  };

  useEffect(() => {
    setSearchParams(prev => {
      const step = parseInt(prev.get('step')!, 10);
      if (!isNaN(step) && step >= 1 && step <= MAX_STEP) return prev;

      prev.set('step', '1');
      return prev;
    });
  }, [setSearchParams]);

  return {
    activeStep,
    setSearchParams,
    previousStep,
    nextStep,
  };
};

export default useStepQueryParam;
