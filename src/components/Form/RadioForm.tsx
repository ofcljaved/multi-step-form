import { Icon } from '..';
import Radio from './Radio';

interface FormProps {
  form: {
    name: string;
  } & ChoiceForm;
  planType: PlanType;
}
const RadioForm = ({ form, planType }: FormProps) => {
  return (
    <Radio
      name={form.name}
      inputVisible={form.inputVisible}
      className='grid gap-10 rounded-lg border border-foreground p-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
    >
      <Icon name={form.label[planType].type} />
      <div className='grid gap-1'>
        <strong className='text-secondary'>{form.label[planType].type}</strong>
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
  );
};

export default RadioForm;
