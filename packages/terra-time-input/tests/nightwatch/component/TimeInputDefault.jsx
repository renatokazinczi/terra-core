import React from 'react';
import Base from 'terra-base';
import TimeInput from '../../../lib/TimeInput';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const TimeInputDefault = () => (
  <Base locale={locale}>
    <TimeInput
      id="timeInput"
      name="time-input"
    />
  </Base>
);

export default TimeInputDefault;
