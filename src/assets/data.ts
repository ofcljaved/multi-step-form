export const stepsData: StepsData[] = [
  {
    id: 1,
    title: 'your info',
    heading: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
    form: [
      {
        field: 'input',
        name: 'name',
        label: 'Name',
        placeholder: 'e.g. Stephen King',
        type: 'text',
      },
      {
        field: 'input',
        name: 'email',
        label: 'Email Address',
        placeholder: 'e.g. stephenking@lorem.com',
        type: 'email',
      },
      {
        field: 'input',
        name: 'phone',
        label: 'Phone Number',
        placeholder: 'e.g. +1 234 567 890',
        type: 'tel',
      },
    ],
  },
  {
    id: 2,
    title: 'select plan',
    heading: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    form: [
      {
        field: 'radio',
        name: 'plan',
        inputVisible: false,
        label: {
          monthly: { type: 'Arcade', amount: '$9/mo' },
          yearly: { type: 'Arcade', amount: '$90/yr' },
        },
      },
      {
        field: 'radio',
        name: 'plan',
        inputVisible: false,
        label: {
          monthly: { type: 'Advanced', amount: '$12/mo' },
          yearly: { type: 'Advanced', amount: '$120/yr' },
        },
      },
      {
        field: 'radio',
        name: 'plan',
        inputVisible: false,
        label: {
          monthly: { type: 'Pro', amount: '$15/mo' },
          yearly: { type: 'Pro', amount: '$150/yr' },
        },
      },
    ],
  },
  {
    id: 3,
    title: 'add-ons',
    heading: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    form: [
      {
        field: 'checkbox',
        name: 'onlineService',
        inputVisible: false,
        label: {
          monthly: {
            type: 'Online service',
            amount: '$1/mo',
            description: 'Access to multiplayer games',
          },
          yearly: {
            type: 'Online service',
            amount: '$10/yr',
            description: 'Access to multiplayer games',
          },
        },
      },
      {
        field: 'checkbox',
        name: 'largerStorage',
        inputVisible: false,
        label: {
          monthly: {
            type: 'Larger storage',
            amount: '$2/mo',
            description: 'Extra 1TB of cloud save',
          },
          yearly: {
            type: 'Larger storage',
            amount: '$20/yr',
            description: 'Extra 1TB of cloud save',
          },
        },
      },
      {
        field: 'checkbox',
        name: 'customizableProfile',
        inputVisible: false,
        label: {
          monthly: {
            type: 'Customizable profile',
            amount: '$2/mo',
            description: 'Custom theme on your profile',
          },
          yearly: {
            type: 'Customizable profile',
            amount: '$20/yr',
            description: 'Custom theme on your profile',
          },
        },
      },
    ],
  },
  {
    id: 4,
    title: 'summary',
    heading: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
  },
];
