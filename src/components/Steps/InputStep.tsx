import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FromContainer, Input } from '..';
import { PlanSchemaType } from '../../lib/schema';

interface StepProps {
  data: StepsData;
  register: UseFormRegister<PlanSchemaType>;
  errors: FieldErrors<PlanSchemaType>;
}
const InputStep = ({ data, register, errors }: StepProps) => {
  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid gap-4 pt-8'>
        {data.form &&
          (data.form as InputField[]).map(form => {
            const name = form.name as keyof PlanSchemaType;
            const { label, placeholder, type } = form;
            return (
              <Input
                key={name}
                label={label}
                placeholder={placeholder}
                type={type}
                className='font-semibold placeholder:text-foreground'
                error={errors[name]}
                {...register(name)}
              />
            );
          })}
      </div>
    </FromContainer>
  );
};

export default InputStep;
