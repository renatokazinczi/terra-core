import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ProgressBar from 'terra-progress-bar/lib/ProgressBar';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const ProgressBarGradient = () => (
  <div>
    <ProgressBar valueText="3%" value={3} max={10} colorClass={cx(['customized-color-bar-example-1'])} />
    <br />
    <br />
    <ProgressBar valueText="5%" value={5} max={10} colorClass={cx(['customized-color-bar-example-2'])} />
  </div>
);

export default ProgressBarGradient;