import { Checkbox, FromContainer, Icon } from '..';

interface StepProps {
  data: StepsData;
}

const AddonStep = ({ data }: StepProps) => {
  const planType: PlanType = 'monthly';

  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid gap-4 pt-8'>
        {data.form &&
          (data.form as CheckboxField[]).map(form => (
            <Checkbox
              key={form.name}
              name={form.name}
              inputVisible={form.inputVisible}
              className='grid grid-cols-[max-content_1fr_max-content] items-center gap-5 rounded-lg border border-foreground px-6 py-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
            >
              <div className='grid aspect-square place-content-center rounded bg-primary p-1'>
                <Icon name='Checkmark' />
              </div>
              <p className='text-sm text-foreground'>
                <strong className='text-base text-secondary'>
                  {form.label[planType].type}
                </strong>
                <br />
                {form.label[planType].description}
              </p>
              <span className='text-sm text-primary'>
                +{form.label[planType].amount}
              </span>
            </Checkbox>
          ))}
      </div>
    </FromContainer>
  );
};

export default AddonStep;
