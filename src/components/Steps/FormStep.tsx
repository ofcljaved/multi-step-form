import { Form } from '..';
import Checkbox from '../Form/Checkbox';

interface FormStepProps {
  heading: string;
  description: string;
  form: Form[];
  planType?: boolean;
}

const FormStep = ({ heading, description, form, planType }: FormStepProps) => {
  return (
    <div className='px-20 py-10'>
      <h1 className='text-3xl font-bold text-secondary'>{heading}</h1>
      <p className='my-2 text-base text-foreground'>{description}</p>
      <Form formData={form} colFlow={planType} />
      {planType && (
        <div className='mt-8 grid w-full grid-flow-col justify-center gap-6 rounded bg-muted-foreground p-4 text-sm font-bold'>
          <span className='text-secondary'>Monthly</span>
          <Checkbox
            inputVisible={false}
            className="block h-full w-9 rounded-full bg-secondary after:absolute after:start-1 after:top-1/2 after:aspect-square after:w-3.5 after:-translate-y-1/2 after:rounded-full after:bg-background after:transition-all after:content-[''] peer-checked:after:translate-x-full"
          ></Checkbox>
          <span className='text-foreground'>Yearly</span>
        </div>
      )}
    </div>
  );
};

export default FormStep;
