import InputForm from './InputForm';
import RadioForm from './RadioForm';
import CheckboxForm from './CheckboxForm';

interface FormProps {
  formData: Form[];
  colFlow?: boolean;
}
const Form = ({ formData, colFlow }: FormProps) => {
  const planType: PlanType = 'monthly';
  return (
    <form className={`grid gap-4 pt-8 ${colFlow && 'grid-cols-3'}`}>
      {formData.map(form => {
        switch (form.field) {
          case 'input':
            return <InputForm key={form.name} form={form} />;
          case 'radio':
            return (
              <RadioForm
                key={form.label.monthly.type}
                form={form}
                planType={planType}
              />
            );
          case 'checkbox':
            return (
              <CheckboxForm key={form.name} form={form} planType={planType} />
            );
          default:
            return null;
        }
      })}
    </form>
  );
};

export default Form;
