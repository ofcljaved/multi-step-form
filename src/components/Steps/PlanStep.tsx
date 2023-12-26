import { useFormContext, useWatch } from 'react-hook-form';
import { Checkbox, FromContainer, Icon, Radio } from '..';
import { PlanSchemaType } from '../../lib/schema';

interface StepProps {
  data: StepsData;
}

const PlanStep = ({ data }: StepProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PlanSchemaType>();
  const plan = useWatch<PlanSchemaType>({ name: 'yearlyPlan' });
  const planType: PlanType = plan ? 'yearly' : 'monthly';

  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid gap-3 pt-3 sm:grid-cols-3 sm:gap-4 sm:pt-8'>
        {data.form &&
          (data.form as RadioField[]).map(form => {
            const name = form.name as keyof PlanSchemaType;
            const { label, inputVisible } = form;
            return (
              <Radio
                key={label.monthly.type}
                inputVisible={inputVisible}
                value={label.monthly.type}
                error={errors[name]}
                {...register(name as keyof PlanSchemaType)}
                className='flex gap-3 rounded-lg border border-foreground p-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground sm:grid sm:gap-10'
              >
                <Icon name={label[planType].type} />
                <div className='grid sm:gap-1'>
                  <strong className='text-secondary'>
                    {label[planType].type}
                  </strong>
                  <span className='text-sm text-foreground'>
                    {label[planType].amount}
                  </span>
                  {planType !== 'monthly' && (
                    <span className='text-xs font-medium text-secondary'>
                      2 months free
                    </span>
                  )}
                </div>
              </Radio>
            );
          })}
      </div>
      <div className='mt-4 grid w-full grid-flow-col justify-center gap-6 rounded bg-muted-foreground p-4 text-sm font-bold sm:my-8'>
        <span className='text-secondary'>Monthly</span>
        <Checkbox
          inputVisible={false}
          {...register('yearlyPlan')}
          className="block h-full w-9 rounded-full bg-secondary after:absolute after:start-1 after:top-1/2 after:aspect-square after:w-3.5 after:-translate-y-1/2 after:rounded-full after:bg-background after:transition-all after:content-[''] peer-checked:after:translate-x-full"
        ></Checkbox>
        <span className='text-foreground'>Yearly</span>
      </div>
    </FromContainer>
  );
};

export default PlanStep;
