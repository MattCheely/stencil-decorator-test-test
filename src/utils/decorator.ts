/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { ComponentInterface } from '@stencil/core';

declare type ResizeDecorator = (target: ComponentInterface, propertyKey: string) => void;

export function OnResize(): ResizeDecorator {
  return (target: ComponentInterface, methodName: string) => {
    const method = target[methodName];
    window.addEventListener('resize', method.bind(target));
  };
}
