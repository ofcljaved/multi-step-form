import { Button, FromContainer } from '..';
import { useUserSubmission } from '../../hooks';

interface StepProps {
  data: StepsData;
  change: () => void;
}

const ConfirmStep = ({ data, change }: StepProps) => {
  const { plan, addOns, planAmount, planType, totalAmount } =
    useUserSubmission();

  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid gap-3 pt-3 sm:gap-4 sm:pt-8'>
        <div className='grid gap-2 rounded-lg bg-muted-foreground p-4 sm:gap-4 sm:p-6'>
          <div className='grid grid-cols-[1fr_max-content] items-center gap-5 '>
            <p>
              <strong className='text-sm capitalize text-secondary sm:text-base'>
                {`${plan} (${planType})`}
              </strong>
              <br />
              <Button
                onClick={change}
                variant='Ghost'
                className='px-0 py-0 text-sm text-foreground underline'
              >
                Change
              </Button>
            </p>
            <span className='text-sm font-bold text-secondary sm:text-base'>
              {planAmount}
            </span>
          </div>
          <hr />
          {addOns.map(addOn => (
            <div
              key={addOn?.type}
              className='grid grid-cols-[1fr_max-content] items-center gap-5 text-sm'
            >
              <p className='text-foreground'>{addOn.type}</p>
              <span className='text-secondary'>+{addOn.amount}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-[1fr_max-content] gap-5 px-4 pt-6 text-sm text-foreground sm:p-6'>
        <span>Total (per {planType === 'yearly' ? 'year' : 'month'})</span>
        <span className='text-lg font-bold text-primary sm:text-xl'>
          +${totalAmount}/{planType === 'yearly' ? 'yr' : 'mo'}
        </span>
      </div>
    </FromContainer>
  );
};

export default ConfirmStep;
