import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const RadioGroupComponent = ({
  radioOptions,
  selectedValue,
  handleChangeState,
  name,
  formLabel,
  helpText,
}) => {
  const renderRadioOptions = radioOptions.map((option) => {
    return (
      <FormControlLabel
        key={option.value}
        value={option.value}
        control={<Radio color='secondary' />}
        label={option.label}
        labelPlacement={option.labelPlacement}
      />
    );
  });

  return (
    <FormControl component='fieldset' margin='dense'>
      <FormLabel component='legend'>{formLabel}</FormLabel>
      <RadioGroup
        aria-label={name}
        name={name}
        value={selectedValue}
        onChange={(e) => handleChangeState(e.target.value)}
        row
      >
        {renderRadioOptions}
      </RadioGroup>
      <FormHelperText>{helpText}</FormHelperText>
    </FormControl>
  );
};

export default RadioGroupComponent;
