import { useFormContext } from 'react-hook-form';
import { FromContainer, Input } from '..';
import { PlanSchemaType } from '../../lib/schema';

interface StepProps {
  data: StepsData;
}
const InputStep = ({ data }: StepProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PlanSchemaType>();
  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid gap-3 pt-3 sm:gap-4 sm:pt-8'>
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
                className='font-medium placeholder:text-foreground'
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
