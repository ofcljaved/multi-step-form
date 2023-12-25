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
      <div className='grid gap-4 pt-8'>
        <div className='grid gap-4 rounded-lg bg-muted-foreground p-6'>
          <div className='grid grid-cols-[1fr_max-content] items-center gap-5 '>
            <p>
              <strong className='text-base capitalize text-secondary'>
                {`${plan} (${planType})`}
              </strong>
              <br />
              <Button
                onClick={change}
                variant='Ghost'
                className='text-sm text-foreground underline'
              >
                Change
              </Button>
            </p>
            <span className='font-bold text-secondary'>{planAmount}</span>
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
      <div className='grid grid-cols-[1fr_max-content] gap-5 p-6 text-sm text-foreground'>
        <span>Total (per year)</span>
        <span className='text-xl font-bold text-primary'>
          +${totalAmount}/{planType === 'yearly' ? 'yr' : 'mo'}
        </span>
      </div>
    </FromContainer>
  );
};

export default ConfirmStep;
