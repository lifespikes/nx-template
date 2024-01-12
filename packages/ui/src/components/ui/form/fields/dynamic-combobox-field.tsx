import {
  ComboboxField,
  ComboboxFieldProps,
} from '@unnamedrestaurant/ui/components/ui/form/fields/combobox-field';
import { useEffect, useMemo, useState } from 'react';
import { ComboboxOptions } from '@unnamedrestaurant/ui/components/ui';

export type DynamicComboboxFieldProps<T extends (...args: any) => any> = Omit<
  ComboboxFieldProps,
  'options'
> & {
  useQueryFn: T;
  dataTransformer?: (data: any) => ComboboxOptions;
  onChangeInput?: (value: string) => void;
};

const defaultTransformer = (data: Record<string, any>[]): ComboboxOptions => {
  return data.map((row) => ({
    label: row.name,
    value: row.id,
  }));
};

export const DynamicComboboxField = <T extends (...args: any) => any>({
  dataTransformer,
  useQueryFn,
  name,
  onChangeInput,
  ...props
}: DynamicComboboxFieldProps<T>) => {
  const { data, isLoading, error } = useQueryFn();
  const [input, setInput] = useState('');

  useEffect(() => {
    if (onChangeInput) onChangeInput(input);
  }, [input]);

  const comboboxOptions = useMemo(() => {
    if (!data) return [];
    if (!dataTransformer) {
      return defaultTransformer(data.data);
    }
    return dataTransformer(data);
  }, [data, dataTransformer]);

  return (
    <ComboboxField
      options={comboboxOptions}
      name={name}
      _commandInputProps={{ value: input, onValueChange: setInput }}
      _commandProps={{ shouldFilter: false }}
      {...props}
    />
  );
};
