import {
  ComponentProps,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useId,
} from 'react';
import { CheckboxPrimitive, Label } from '@unnamedrestaurant/ui/components/ui';
import { cn } from '@unnamedrestaurant/ui/lib/utils';

export type CheckboxProps = PropsWithChildren<
  ComponentProps<typeof CheckboxPrimitive> & {
    _containerProps?: DetailedHTMLProps<
      HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >;
    _labelProps?: Omit<ComponentProps<typeof Label>, 'children'>;
    label?: ReactNode;
  }
>;

export const Checkbox = ({
  _containerProps,
  _labelProps,
  label,
  ...props
}: CheckboxProps) => {
  const id = props.id ?? useId();
  return (
    <div
      {..._containerProps}
      className={cn(
        'flex items-center space-x-2',
        _containerProps?.className ?? '',
      )}
    >
      <CheckboxPrimitive {...props} id={id} />
      <Label {..._labelProps} htmlFor={id}>
        {label}
      </Label>
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
