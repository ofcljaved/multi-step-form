import { useFormContext, useWatch } from 'react-hook-form';
import { Checkbox, FromContainer, Icon } from '..';
import { PlanSchemaType } from '../../lib/schema';

interface StepProps {
  data: StepsData;
}

const AddonStep = ({ data }: StepProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PlanSchemaType>();

  const plan = useWatch<PlanSchemaType>({ name: 'yearlyPlan' });
  const planType: PlanType = plan ? 'yearly' : 'monthly';

  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid gap-3 pt-3 sm:gap-4 sm:pt-8'>
        {data.form &&
          (data.form as CheckboxField[]).map(form => {
            const name = form.name as keyof PlanSchemaType;
            const { label, inputVisible } = form;
            return (
              <Checkbox
                key={name}
                inputVisible={inputVisible}
                error={errors[name]}
                {...register(name as keyof PlanSchemaType)}
                className='border-foregroundp grid grid-cols-[max-content_1fr_max-content] items-center gap-4 rounded-lg border px-4 py-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground sm:gap-5 sm:px-6'
              >
                <div className='icon-checked grid aspect-square place-content-center rounded border border-foreground p-1'>
                  <Icon name='Checkmark' />
                </div>
                <p className='text-xs text-foreground sm:text-sm'>
                  <strong className='text-sm text-secondary sm:text-base'>
                    {label[planType].type}
                  </strong>
                  <br />
                  {label[planType].description}
                </p>
                <span className='text-xs text-primary sm:text-sm'>
                  +{label[planType].amount}
                </span>
              </Checkbox>
            );
          })}
      </div>
    </FromContainer>
  );
};

export default AddonStep;
