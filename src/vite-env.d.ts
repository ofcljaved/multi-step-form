/// <reference types="vite/client" />

type PlanType = 'monthly' | 'yearly';

type Step = {
  id: number;
  title: string;
};
type BaseLabel = {
  type: string;
  amount: `${string}/${K extends 'monthly' ? 'mo' : 'yr'}`;
};
type RadioLabel = {
  [K in PlanType]: BaseLabel;
};
type CheckboxLabel = {
  [K in PlanType]: BaseLabel & {
    description: string;
  };
};

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
  inputVisible: boolean;
};

type Form = {
  name: string;
} & (InputFrom | ChoiceForm);

type StepData = {
  [K in Step['id']]: {
    heading: string;
    description: string;
    form?: Form[];
    planType?: boolean;
  };
};
