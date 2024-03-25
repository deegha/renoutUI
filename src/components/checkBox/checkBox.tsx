'use client';

import styles from './styles.module.scss';
import { Switch } from '@headlessui/react';

interface ICheckBox {
  label: string;
  isChecked: boolean;
  name: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (name: string, isChecked: boolean) => void;
  testId?: string;
}

export function CheckBox({
  label,
  isChecked,
  onChange,
  name,
  testId,
}: ICheckBox) {
  return (
    <Switch
      data-testid={testId}
      checked={isChecked}
      onChange={(checked) => onChange(name, checked)}
      className={
        isChecked ? styles.checkboxContainerSelected : styles.checkboxContainer
      }
    >
      <span>{label}</span>
    </Switch>
  );
}
