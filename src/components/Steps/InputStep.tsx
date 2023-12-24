import { FromContainer, Input } from '..';

interface StepProps {
  data: StepsData;
}
const InputStep = ({ data }: StepProps) => {
  return (
    <FromContainer heading={data.heading} description={data.description}>
      <div className='grid gap-4 pt-8'>
        {data.form &&
          (data.form as InputField[]).map(form => (
            <Input
              key={form.name}
              label={form.label}
              placeholder={form.placeholder}
              type={form.type}
              name={form.name}
              required={form.required}
              className='font-semibold placeholder:text-foreground'
            />
          ))}
      </div>
    </FromContainer>
  );
};

export default InputStep;
