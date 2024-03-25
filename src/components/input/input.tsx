import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

export type TType = 'text' | 'number' | 'email' | 'currency' | 'date';
interface IInput {
  value?: string | number;
  onChange?: (name: string, value: string | number) => void;
  icon?: IconProp;
  type: TType;
  label?: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
  textHelper?: React.ReactNode;
  selectedCurrency?: {
    name: string;
    id: string | number;
  };
  error?: string;
  testId?: string;
  loading?: boolean;
}

const typeMap = {
  text: 'text',
  number: 'number',
  email: 'email',
  currency: 'string',
  date: 'string'
};

export function InputText({
  value,
  onChange,
  icon,
  type,
  label,
  required,
  name,
  textHelper,
  placeholder,
  error,
  testId,
  loading
}: IInput) {
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    let newValue: string | number = e.target.value;

    if (type === 'number') {
      newValue = parseInt(newValue);
      onChange && onChange(e.target.name, newValue);

      return;
    } else if (type === 'currency') {
      // Remove non-numeric characters
      newValue = newValue.replace(/[^0-9.]/g, '');

      // Format with commas
      newValue = Number(newValue).toLocaleString('en-US', {
        style: 'decimal'
      });

      onChange && onChange(e.target.name, newValue);
      return;
    } else if (type === 'date') {
      // Remove non-numeric characters
      newValue = newValue.replace(/[^0-9/]/g, '');

      // Format as yyyy/mm
      const match = newValue.match(/^(\d{0,4})(\/)?(\d{0,2})?(\/)?(\d{0,2})?$/);

      if (match) {
        const year = match[1] || '';
        const month = match[3] || '';
        const day = match[5] || '';

        if (day && day.length > 2) {
          // If more than 2 digits are entered for the day, ignore any additional input
          newValue = `${year}/${month}/${day.substring(0, 2)}`;
        } else if (day && day.length > 0) {
          // If the day is entered, ignore any further input for day
          newValue = `${year}/${month}/${day}`;
        } else {
          newValue = `${year}${month && '/' + month}`;
        }

        onChange && onChange(e.target.name, newValue);
        return;
      }
    } else if (type === 'text') {
      onChange && onChange(e.target.name, newValue);
    }
  }

  return (
    <div className={styles.holder}>
      <div className={styles.label}>
        {label && <label data-testid={`${testId}-label`}>{label}</label>}
        {required && (
          <span data-testid={`${testId}-required`} className={styles.label}>
            {' '}
            *
          </span>
        )}
      </div>
      <div className={styles.container}>
        <input
          readOnly={loading}
          data-testid={`${testId}-input-${name}`}
          value={value}
          onChange={handleOnChange}
          type={typeMap[type]}
          name={name}
          placeholder={type === 'date' ? 'yyyy/mm/dd' : placeholder}
        />
        {icon && <FontAwesomeIcon icon={icon} width={15} />}
        {textHelper && textHelper}
      </div>
      <div className={styles.errorContainer}>
        {error && <span data-testid={`${testId}-error`}>{error}</span>}
      </div>
    </div>
  );
}
