import { useFormContext } from 'react-hook-form';
import { FromContainer } from '..';
import { stepsData } from '../../assets/data';
import { PlanSchemaType } from '../../lib/schema';

interface StepProps {
  data: StepsData;
}

const ConfirmStep = ({ data }: StepProps) => {
  const { getValues } = useFormContext<PlanSchemaType>();
  const userValue = getValues();
  const { plan, yearlyPlan } = userValue;

  const planType: PlanType = yearlyPlan ? 'yearly' : 'monthly';
  const planLabel = stepsData[1].form?.find(
    field => (field.label as RadioLabel)[planType].type === plan
  );
  const planAmount = (planLabel?.label as RadioLabel)[planType].amount;
  const addOns = stepsData[2].form?.filter(
    field => userValue[field.name as Partial<keyof PlanSchemaType>]
  );

  const totalAmount = addOns
    ?.map(addOn => {
      const stringAmount = (addOn.label as RadioLabel)[planType].amount;
      return Number(stringAmount.match(/\d+/));
    })
    .reduce((acc, curr) => acc + curr, Number(planAmount.match(/\d+/)));

  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid gap-4 pt-8'>
        <div className='grid gap-4 rounded-lg bg-muted-foreground p-6'>
          <div className='grid grid-cols-[1fr_max-content] items-center gap-5 '>
            <p className='text-sm text-foreground'>
              <strong className='text-base capitalize text-secondary'>
                {`${plan} (${planType})`}
              </strong>
              <br />
              <a href='#' className='underline'>
                Change
              </a>
            </p>
            <span className='font-bold text-secondary'>{planAmount}</span>
          </div>
          <hr />
          {addOns?.map(addOn => (
            <div
              key={addOn.name}
              className='grid grid-cols-[1fr_max-content] items-center gap-5 text-sm'
            >
              <p className='text-foreground'>
                {(addOn.label as RadioLabel)[planType].type}
              </p>
              <span className='text-secondary'>
                +{(addOn.label as RadioLabel)[planType].amount}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-[1fr_max-content] gap-5 p-6 text-sm text-foreground'>
        <span>Total (per year)</span>
        <span className='text-xl font-bold text-primary'>
          +${totalAmount}/{yearlyPlan ? 'yr' : 'mo'}
        </span>
      </div>
    </FromContainer>
  );
};

export default ConfirmStep;
