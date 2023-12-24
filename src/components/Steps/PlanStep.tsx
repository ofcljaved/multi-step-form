import { FromContainer, Icon, Radio } from '..';

interface StepProps {
  data: StepsData;
}

const PlanStep = ({ data }: StepProps) => {
  const planType: PlanType = 'monthly';
  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid grid-cols-3 gap-4 pt-8'>
        {data.form &&
          (data.form as RadioField[]).map(form => (
            <Radio
              key={form.label.monthly.type}
              name={form.name}
              inputVisible={form.inputVisible}
              defaultChecked={form.defaultChecked}
              className='grid gap-10 rounded-lg border border-foreground p-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
            >
              <Icon name={form.label[planType].type} />
              <div className='grid gap-1'>
                <strong className='text-secondary'>
                  {form.label[planType].type}
                </strong>
                <span className='text-sm text-foreground'>
                  {form.label[planType].amount}
                </span>
                {planType !== 'monthly' && (
                  <span className='text-xs font-semibold text-secondary'>
                    2 months free
                  </span>
                )}
              </div>
            </Radio>
          ))}
      </div>
    </FromContainer>
  );
};

export default PlanStep;
