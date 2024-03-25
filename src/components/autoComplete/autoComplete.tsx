'use client';
import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import {
  faChevronDown,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IOption {
  name: string;
  id: string | number;
}

export interface IAutoComplete {
  options: IOption[];
  selectedOption: IOption | undefined;
  // eslint-disable-next-line no-unused-vars
  setSelected: (option: IOption) => void;
  placeholder?: string;
  loading?: boolean;
  smallInput?: boolean;
  label?: string;
  testId?: string;
}

export function AutoComplete({
  options,
  selectedOption,
  setSelected,
  placeholder,
  loading,
  smallInput,
  label,
  testId,
}: IAutoComplete) {
  const [query, setQuery] = useState('');
  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedOption} onChange={setSelected}>
      <div className={styles.container} data-testid={`auto-complete-${testId}`}>
        {label && (
          <label data-testid={`auto-complete-${testId}-label`}>{label}</label>
        )}
        <div
          data-testid={`auto-complete-${testId}-input-container`}
          className={
            smallInput
              ? styles.textInputContainerSmall
              : styles.textInputContainer
          }
        >
          {loading ? (
            <div
              data-testid={`auto-complete-${testId}-loading`}
              className={styles.loading}
            >
              Hold on data is loading...
            </div>
          ) : (
            <>
              <Combobox.Input
                data-testid={`auto-complete-${testId}-input`}
                placeholder={placeholder}
                className={styles.textInput}
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(option: IOption) => option.name}
              />
              <Combobox.Button>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  width={15}
                  data-testid={`auto-complete-${testId}-down-arrow`}
                />
              </Combobox.Button>
            </>
          )}
        </div>
      </div>
      <div className={styles.itemsWrapper}>
        <Combobox.Options
          className={styles.items}
          data-testid={`auto-complete-${testId}-options`}
        >
          {filteredOptions.map((option) => (
            <Combobox.Option
              key={option.id}
              value={option}
              as={Fragment}
              data-testid={`auto-complete-${testId}-option`}
            >
              {({ active, selected }) => {
                return (
                  <li className={active ? styles.activeItem : styles.item}>
                    <span>{option.name}</span>
                    {selected && (
                      <span data-testid={`auto-complete-${testId}-check-mark`}>
                        <FontAwesomeIcon
                          className={styles.selectedCheck}
                          icon={faCheckCircle}
                          width={15}
                        />
                      </span>
                    )}
                  </li>
                );
              }}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
