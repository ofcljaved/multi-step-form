import Input from './Input';
interface FormProps {
  form: {
    name: string;
  } & InputFrom;
}

const InputForm = ({ form }: FormProps) => {
  return (
    <Input
      label={form.label}
      placeholder={form.placeholder}
      type={form.type}
      name={form.name}
      className='font-semibold placeholder:text-foreground'
    />
  );
};

export default InputForm;
