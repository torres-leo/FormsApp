import { FormControl } from '@angular/forms';

export const nameLastnamePattern: string = '([a-zA-z]+) ([a-zA-z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const cantBeStrider = (control: FormControl) => {
  const value: string = control.value?.trim().toLocaleLowerCase();
  if (value === 'strider') {
    return { noStrider: true };
  }
  return null;
};
