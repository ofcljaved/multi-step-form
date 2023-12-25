import { useFormContext } from 'react-hook-form';
import { PlanSchemaType } from '../lib/schema';
import { stepsData } from '../assets/data';

type labelType = RadioLabel | CheckboxLabel;
type NameType = Partial<keyof PlanSchemaType>;

const flattenedStpes = stepsData.flatMap(step => step.form || []);

const useUserSubmission = () => {
  const { getValues } = useFormContext<PlanSchemaType>();
  const userValues = getValues();
  const { plan, yearlyPlan } = userValues;

  const planType: PlanType = yearlyPlan ? 'yearly' : 'monthly';

  const selectedPlanForm = flattenedStpes.find(formItem => {
    const label = formItem?.label as labelType;
    return label?.[planType]?.type === plan;
  });
  const planAmount = (selectedPlanForm?.label as labelType)[planType]?.amount;

  const addOns = flattenedStpes
    .filter(
      step => step.field === 'checkbox' && userValues[step.name as NameType]
    )
    .map(field => (field?.label as labelType)[planType]);

  const totalAmount = addOns
    .map(addOn => Number(addOn.amount.match(/\d+/)))
    .reduce((acc, curr) => acc + curr, Number(planAmount?.match(/\d+/)));

  return {
    plan,
    planType,
    planAmount,
    addOns,
    totalAmount,
  };
};

export default useUserSubmission;
