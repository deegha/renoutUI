export const sectionOneItems = [
  {
    name: 'title',
    title: 'Title of the property',
    helper:
      'Add something that catches viewers eye. May be mentioned the number of bedroom. this will be first thing they see',
    placeHolder: 'Enter title',
    type: 'text',
    required: true,
    inputType: 'text',
  },
  {
    name: 'contactNumber',
    title: 'Contact number',
    helper: '',
    placeHolder: 'Eg : 0771234567',
    type: 'text',
    required: true,
    inputType: 'text',
  },
  {
    name: 'contactPerson',
    title: 'Contact Person',
    helper: '',
    placeHolder: 'Eg : Jhone Doe',
    type: 'text',
    required: true,
    inputType: 'text',
  },
  {
    name: 'rentAmount',
    title: 'Rent per month',
    helper:
      'Add your expected rent amount. You can set how often rent has to be paid in next option.',
    placeHolder: 'Enter expected monthly rent',
    type: 'number',
    inputType: 'currency',
    required: true,
  },
  {
    name: 'advancePayment',
    title: 'Advance Payment',
    helper:
      'This is the fee that the tenant has to pay for blocking the property. This is usually arround 25,000LKR',
    placeHolder: 'Eg : 25,000 LKR',
    type: 'number',
    inputType: 'currency',
    required: false,
  },
  {
    name: 'securityDeposit',
    title: 'Security Deposit',
    helper:
      'This is the fee that the tenant has to pay before moving in. This is usually 1 month rent. But you can set your own value',
    placeHolder: 'Eg : 100,000 LKR',
    type: 'number',
    inputType: 'currency',
    required: false,
  },
];

export const sectionTwoItems = [
  {
    name: 'numOfBedrooms',
    title: 'Number of bedrooms',
    helper:
      'How many bedroom do you have in your apartment. This should not include maid rooms. And all the rooms should be inside the hosuse',
    placeHolder: 'eg: 3',
    type: 'number',
    inputType: 'number',
    required: true,
  },
  {
    name: 'numOfBathrooms',
    title: 'Number of bathrooms',
    helper:
      'How many bathrooms do you have in your apartment. This should not include maid bathroom. ',
    placeHolder: 'eg: 3',
    type: 'number',
    inputType: 'number',
    required: true,
  },
  {
    name: 'floorArea',
    title: 'How big is your property',
    helper: 'How many squrefeet does you property have',
    placeHolder: 'eg: 1200',
    type: 'number',
    inputType: 'number',
    required: false,
  },
];
