import * as React from 'react';
import { FC } from 'react';
import {
  Step,
  StepProps,
  Steps,
  StepsProps,
} from '@unnamedrestaurant/ui/components/ui';

export const SimpleStepper: FC<StepsProps & { steps: StepProps[] }> = (
  props,
) => {
  return (
    <Steps isVertical={props.isVertical}>
      {props.steps.map((step, index) => (
        <Step index={index} key={index} {...step} />
      ))}
    </Steps>
  );
};
