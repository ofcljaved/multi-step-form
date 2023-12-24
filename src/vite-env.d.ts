/// <reference types="vite/client" />
type Step = {
  id: number;
  title: string;
};

type PlanType = 'monthly' | 'yearly';

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

interface InputField {
  field: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

interface RadioField {
  field: string;
  name: string;
  inputVisible: boolean;
  defaultChecked?: boolean;
  label: RadioLabel;
}

interface CheckboxField {
  field: string;
  name: string;
  inputVisible: boolean;
  defaultChecked?: boolean;
  label: CheckboxLabel;
}

type StepsData = {
  heading: string;
  description: string;
  form?: InputField[] | RadioField[] | CheckboxField[];
};
