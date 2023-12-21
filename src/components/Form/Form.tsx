import { Icon } from '..';
import Input from './Input';
import Checkbox from './Checkbox';
import Radio from './Radio';

interface FormProps {
  formData: Form[];
  colFlow?: boolean;
}
const Form = ({ formData, colFlow }: FormProps) => {
  const planType: PlanType = 'monthly';
  return (
    <form className={`grid gap-4 pt-8 ${colFlow && 'grid-cols-3'}`}>
      {formData.map(form => {
        if (form.field === 'input') {
          return (
            <Input
              label={form.label}
              placeholder={form.placeholder}
              type={form.type}
              name={form.name}
              className='font-semibold placeholder:text-foreground'
            />
          );
        }
        if (form.field === 'radio') {
          return (
            <Radio
              name={form.name}
              inputVisible={form.inputVisible}
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
          );
        }
        if (form.field === 'checkbox') {
          return (
            <Checkbox
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
          );
        }
      })}
    </form>
  );
};

export default Form;
