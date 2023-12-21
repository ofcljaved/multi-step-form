/// <reference types="vite/client" />

type PlanType = 'monthly' | 'yearly';

type Step = {
  id: number;
  title: string;
};

type CheckboxLabel = {
  [K in PlanType]: {
    type: string;
    amount: `${string}/${K extends 'monthly' ? 'mo' : 'yr'}`;
    description: string;
  };
};

type RadioLabel = OmitThisParametert<CheckboxLabel, 'description'>;

type InputFrom = {
  field: 'input';
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
};

type ChoiceLabel =
  | {
      field: 'radio';
      label: RadioLabel;
    }
  | { field: 'checkbox'; label: CheckboxLabel };

type ChoiceForm = ChoiceLabel & {
  inputVisible?: boolean;
};

type Form = {
  name: string;
} & (InputFrom | ChoiceForm);

type StepData = {
  id: number;
  heading: string;
  description: string;
  form?: Form[];
};

