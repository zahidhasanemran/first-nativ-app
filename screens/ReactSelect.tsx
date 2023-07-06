import RNPickerSelect from 'react-native-picker-select';

const filters = [
  {label: 'General', value: 'general'},
  {label: 'Health', value: 'health'},
  {label: 'Science', value: 'science'},
  {label: 'Sports', value: 'sports'},
  {label: 'Technology', value: 'technology'},
  {label: 'Entertainment', value: 'entertainment'},
  {label: 'Business', value: 'business'},
];

const ReactSelect = ({value, setValue}) => {
  console.log(value, setValue);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <RNPickerSelect
      onValueChange={valu => setValue(valu)}
      items={filters}
      value={value}
    />
  );
};

export default ReactSelect;
