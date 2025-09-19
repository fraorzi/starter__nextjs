import clsx from 'clsx';

import clsxm from '@/lib/clsxm';

import type { ButtonSize, ButtonVariant } from '@/components/UI/buttons/models/button.model';

export const buttonSizeClasses = (size: ButtonSize) => {
  return clsx([
    size === 'small' && ['px-8 py-2 md:px-14 md:py-2.5', 'text-xs md:text-sm'],
    size === 'base' && ['px-8 py-3 md:px-10', 'text-xs md:text-sm'],
  ]);
};

export const buttonVariantClasses = (variant: keyof typeof ButtonVariant) => {
  return clsx([
    variant === 'primary' && [
      'bg-primary-500 text-white',
      'border-primary-500 border',
      'hover:bg-primary-600 hover:text-white',
      'active:bg-primary-500',
      'disabled:bg-primary-400 disabled:hover:bg-primary-400',
    ],
    variant === 'outline' && [
      'text-primary-500',
      'border-primary-500 border',
      'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
    ],
    variant === 'ghost' && [
      'text-primary-500',
      'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
    ],
    variant === 'light' && [
      'text-dark bg-white',
      'border border-gray-300',
      'hover:text-dark hover:bg-gray-100',
      'active:bg-white/80 disabled:bg-gray-200',
    ],
    variant === 'dark' && [
      'bg-gray-900 text-white',
      'border border-gray-600',
      'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
    ],
  ]);
};

export const buttonClasses = (variant: keyof typeof ButtonVariant, size: ButtonSize) => {
  return clsxm(
    'inline-flex items-center',
    'font-semibold', // default font
    'rounded-xl', // default border radius
    'cursor-pointer', // default cursor

    // focus classes
    'focus-visible:ring-primary-500 focus:outline-hidden focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2',

    // transitions
    'transition-colors',

    // disabled cursor
    'disabled:cursor-not-allowed',

    // SIZES
    buttonSizeClasses(size),

    // VARIANTS
    buttonVariantClasses(variant),
  );
};
