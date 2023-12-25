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
      <div className='grid gap-4 pt-8'>
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
                className='grid grid-cols-[max-content_1fr_max-content] items-center gap-5 rounded-lg border border-foreground px-6 py-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
              >
                <div className='icon-checked grid aspect-square place-content-center rounded border border-foreground p-1'>
                  <Icon name='Checkmark' />
                </div>
                <p className='text-sm text-foreground'>
                  <strong className='text-base text-secondary'>
                    {label[planType].type}
                  </strong>
                  <br />
                  {label[planType].description}
                </p>
                <span className='text-sm text-primary'>
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
