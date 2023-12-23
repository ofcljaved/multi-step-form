import { FromContainer, Input } from '..';

interface StepProps {
  data: StepsData[1];
}
const InputStep = ({ data }: StepProps) => {
  return (
    <FromContainer heading={data.heading} description={data.description}>
      {data.form.map(form => {
        <Input
          label={form.label}
          placeholder={form.placeholder}
          type={form.type}
          name={form.name}
          className='font-semibold placeholder:text-foreground'
        />;
      })}
    </FromContainer>
  );
};

export default InputStep;
