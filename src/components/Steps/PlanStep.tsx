import { FieldErrors, UseFormRegister, useWatch } from 'react-hook-form';
import { Checkbox, FromContainer, Icon, Radio } from '..';
import { PlanSchemaType } from '../../lib/schema';

interface StepProps {
  data: StepsData;
  register: UseFormRegister<PlanSchemaType>;
  errors: FieldErrors<PlanSchemaType>;
}

const PlanStep = ({ data, register, errors }: StepProps) => {
  const plan = useWatch<PlanSchemaType>({ name: 'yearlyPlan' });
  const planType: PlanType = plan ? 'yearly' : 'monthly';

  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid grid-cols-3 gap-4 pt-8'>
        {data.form &&
          (data.form as RadioField[]).map(form => {
            const name = form.name as keyof PlanSchemaType;
            const { label, inputVisible, defaultChecked } = form;
            return (
              <Radio
                key={label.monthly.type}
                inputVisible={inputVisible}
                defaultChecked={defaultChecked}
                value={label.monthly.type}
                error={errors[name]}
                {...register(name as keyof PlanSchemaType)}
                className='grid gap-10 rounded-lg border border-foreground p-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
              >
                <Icon name={label[planType].type} />
                <div className='grid gap-1'>
                  <strong className='text-secondary'>
                    {label[planType].type}
                  </strong>
                  <span className='text-sm text-foreground'>
                    {label[planType].amount}
                  </span>
                  {planType !== 'monthly' && (
                    <span className='text-xs font-semibold text-secondary'>
                      2 months free
                    </span>
                  )}
                </div>
              </Radio>
            );
          })}
      </div>
      <div className='my-8 grid w-full grid-flow-col justify-center gap-6 rounded bg-muted-foreground p-4 text-sm font-bold'>
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
