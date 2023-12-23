import { Checkbox, FromContainer, Icon } from '..';

const AddonStep = () => {
  const heading = '';
  const description = '';
  return (
    <FromContainer heading={heading} description={description}>
      {formData.map(form => {
        <Checkbox
          name={form.name}
          inputVisible={form.inputVisible}
          className='grid grid-cols-[max-content_1fr_max-content] items-center gap-5 rounded-lg border border-foreground px-6 py-4 hover:cursor-pointer hover:border-primary focus-visible:border-primary peer-checked:border-primary peer-checked:bg-muted-foreground'
        >
          <div className='grid aspect-square place-content-center rounded bg-primary p-1'>
            <Icon name='Checkmark' />
          </div>
          <p className='text-sm text-foreground'>
            <strong className='text-base text-secondary'>
              {form.label[planType].type}
            </strong>
            <br />
            {form.label[planType].description}
          </p>
          <span className='text-sm text-primary'>
            +{form.label[planType].amount}
          </span>
        </Checkbox>;
      })}
    </FromContainer>
  );
};

export default AddonStep;
