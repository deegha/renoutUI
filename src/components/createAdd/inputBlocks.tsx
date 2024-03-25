import { InputText } from '..';
import styles from './styles.module.scss';
import { memo } from 'react';
import { TType } from '@/components/input/input';

interface BlockProps {
  type: 'text' | 'number';
  required: boolean;
  title: string;
  placeHolder: string;
  helper?: string;
  name: string;
  inputType?: TType;
  value?: string | number;
  loading?: boolean;
  handler: (
    // eslint-disable-next-line no-unused-vars
    name: string,
    // eslint-disable-next-line no-unused-vars
    value: string | number,
    // eslint-disable-next-line no-unused-vars
    type: 'text' | 'number',
  ) => void;
}

export const InputBlock: React.FC<BlockProps> = memo(
  function inputBlockFuntion({
    title,
    handler,
    placeHolder,
    name,
    type,
    inputType,
    value,
    loading,
    required,
  }) {
    return (
      <div className={styles.inputBlock} title={title}>
        <InputText
          required={required}
          loading={loading}
          value={value}
          testId="input-block"
          label={title}
          type={inputType ? inputType : 'text'}
          name={name}
          placeholder={placeHolder}
          onChange={(name: string, value: string | number) =>
            handler(name, value, type)
          }
        />
      </div>
    );
  },
);
