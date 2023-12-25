import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { stepsData } from '../assets/data';

const MAX_STEP = stepsData.length;

const useStepQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams({ step: '' });
  const activeStep: number = parseInt(searchParams.get('step') || '1', 10);
  const visistedStep: Set<number> = useMemo(() => new Set(), []);

  const previousStep = () => {
    setSearchParams(prev => {
      const prevStep = parseInt(prev.get('step')!, 10);
      const newStep = Math.max(prevStep - 1, 1);
      prev.set('step', newStep.toString());
      return prev;
    });
  };

  const nextStep = () => {
    setSearchParams(prev => {
      const prevStep = parseInt(prev.get('step')!, 10);
      const newStep = Math.min(prevStep + 1, MAX_STEP);
      prev.set('step', newStep.toString());
      visistedStep.add(prevStep);
      return prev;
    });
  };

  useEffect(() => {
    setSearchParams(prev => {
      const step = parseInt(prev.get('step')!, 10);
      if (
        !isNaN(step) &&
        step >= 1 &&
        step <= MAX_STEP &&
        visistedStep.has(step - 1)
      ) {
        return prev;
      }

      prev.set('step', '1');
      return prev;
    });
  }, [setSearchParams, visistedStep]);

  return {
    activeStep,
    setSearchParams,
    previousStep,
    nextStep,
  };
};

export default useStepQueryParam;
